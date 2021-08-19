---
title: Authorization in APISIX using Casbin
author: Rushikesh Tote
authorTitle: Member of Casbin
authorURL: http://github.com/rushitote
authorImageURL: https://avatars.githubusercontent.com/rushitote
---

## Introduction

[APISIX](https://apisix.apache.org/) is a high performance and scalable cloud native API gateway based on Nginx and etcd. It is an open source project by the Apache Software Foundation. Besides that, what makes APISIX so good is the support of many great built in plugins that could be used to implement features like authentication, monitoring, routing, etc. And the fact that plugins in APISIX are hot-reloaded (without restarts) makes it very dynamic.

But while using APISIX, there may be scenarios where you might want to add complex authorization logic in your application. This is where authz-casbin might help you, authz-casbin is an APISIX plugin based on [Lua Casbin](https://github.com/casbin/lua-casbin/) that enables powerful authorization based on various access control models. [Casbin](https://casbin.org/) is an authorization library which supports access control models like ACL, RBAC, ABAC. Originally written in Go, it has been ported to many languages and Lua Casbin is the Lua implementation of Casbin. The development of authz-casbin started when we proposed a new plugin for authorization in the APISIX repository ([#4674](https://github.com/apache/apisix/issues/4674)) to which the core members agreed. And after the helpful reviews which led to some major changes and improvements, the PR ([#4710](https://github.com/apache/apisix/pull/4710)) was finally merged. 

In this blog, we will use the authz-casbin plugin to show how you can implement an authorization model based on Role Based Access Control (RBAC) in APISIX.

**NOTE**: You will need to use some other plugin or custom workflow for authenticating the user since Casbin will only do authorization and not authentication.

## Creating a model

The plugin uses three parameters for authorizing any request - subject, object and action. Here, subject is the value of  the username header, which could be something like `[username: alice]`. Then, the object is the URL path that is being accessed and the action is request method being used.

Let's say we want to create a model with three resources at the paths - `/`, `/res1` and `/res2`. And we want to have a model like this:

![image](https://i.imgur.com/7BlvBNR.png)

This would mean that all users (`*`) like for example `jack` can access the homepage (`/`). And users with `admin` permissions like `alice` and `bob` can access all the pages and resources (like `res1` and `res2`). Also, let's restrict users without any admin permissions to using only `GET` request method. For this scenario, we could define the model as:

```conf
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)
```

## Creating a policy

From the above scenario, the policy would be:

```conf
p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin
```

The matcher from the model means:

1. `(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))`: Either the request's subject has a role as the policy's subject or the request's subject matches the policy's subject in `keyMatch`. `keyMatch` is built in function in Lua Casbin, you can take a look at the function's description and more such functions that could be useful [here](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).
2. `keyMatch(r.obj, p.obj)`: The request's object matches the policy's object (URL path here).
3. `keyMatch(r.act, p.act)`: The request's action matches the policy's action (HTTP request method here).

## Enabling the plugin on route

Once you have created the model and policy, you can enable it on a route using the APISIX Admin API. To enable it using model and policy file paths:

```sh
curl http://127.0.0.1:9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model_path": "/path/to/model.conf",
            "policy_path": "/path/to/policy.csv",
            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127.0.0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

Here, the username field is the header name that you will be using to pass in the subject. For example, if you will be passing the username header as `user: alice`, you would use `"username": "user"`.

For using model/policy text instead of files, you can use the `model` and `policy` fields instead:

```sh
curl http://127.0.0.1:9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model": "[request_definition]
            r = sub, obj, act

            [policy_definition]
            p = sub, obj, act

            [role_definition]
            g = _, _

            [policy_effect]
            e = some(where (p.eft == allow))

            [matchers]
            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",

            "policy": "p, *, /, GET
            p, admin, *, *
            g, alice, admin
            g, bob, admin",

            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127.0.0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

## Enabling the plugin using a global model/policy

There may be situations where you might want to use a single model and policy configuration across multiple routes. You can do that by first by sending a `PUT` request to add the model and policy configuration to the plugin's metadata by:

```sh
curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -i -X PUT -d '
{
"model": "[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",

"policy": "p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin"
}'
```

And then to enable the same configuration on some route, send a request using the Admin API:

```sh
curl http://127.0.0.1:9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127.0.0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/route1/*"
}'
```

This will add the plugin metadata configuration to the route. You can also easily update the plugin metadata configuration by resending the request to plugin's metadata with updated model and policy configuration, the plugin will automatically update all the routes using the plugin metadata. 

## Use Cases

- The primary use case of this plugin would be in implementing authorization in your APIs. You can easily add this plugin on any API route that you are using with your authorization model and policy configuration. 
- If you want to have a single authorization model for all your APIs, you can use global model/policy method. This makes updating the policy easy for all routes, since you only need to update the metadata in etcd.
- While if you would like to use a different model for every different route, you can use the route method. This is helpful when different API routes have different sets of user permissions. You can also use this when you are dealing with larger policies, since it will make the authorization faster when filtered into multiple routes.
