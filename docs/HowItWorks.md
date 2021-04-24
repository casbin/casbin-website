---
id: how-it-works
title: How it Works
---

In Casbin, an access control model is abstracted into a CONF file based on the **PERM metamodel (Policy, Effect, Request, Matchers)**. So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration. You can customize your own access control model by combining the available models. For example, you can combine RBAC roles and ABAC attributes together inside one model and share one set of policy rules.

The PERM model is composed of four foundations (Policy, Effect, Request, Matchers) describing the relationship between resources and users.

### Request
Define the request parameters. A basic request is a tuple object, requiring at least a subject (accessed entity), object (accessed resource) and action (access method)

For instance, a request definition may look like this:
`r={sub,obj,act}`

It actually defines the parameter name and order which we should provide for access control matching function.

### Policy
Define the model of the access strategy. In fact, it defines the name and order of the fields in the Policy rule document.

For instance:
`p={sub, obj, act}` or `p={sub, obj, act, eft}`

Note: If eft (policy result) is not defined, then the result field in the policy file will not be read, and the matching policy result will be allowed by default.

### Matcher
Matching rules of Request and Policy.

For example: `m = r.sub == p.sub && r.act == p.act && r.obj == p.obj`
This simple and common matching rule means that if the requested parameters (entities, resources, and methods) are equal, that is, if they can be found in the policy, then the policy result (`p.eft`) is returned. The result of the strategy will be saved in `p.eft`.

### Effect
It can be understood as a model in which a logical combination judgment is performed again on the matching results of Matchers.

For example: `e = some(where(p.eft == allow))`

This sentence means that if the matching strategy result p.eft has the result of (some) allow, then the final result is true

Let's look at another example:
`e = some(where (p.eft == allow)) && !some(where (p.eft == deny))`
The logical meaning of this example combination is: if there is a strategy that matches the result of allow and no strategy that matches the result of deny, the result is true. In other words, it is true when the matching strategies are all allow, if there is any deny, both are false (more simply, when allow and deny exist at the same time, deny takes precedence)

The most basic and simplest model in Casbin is ACL. ACL's model CONF is:

```ini
# Request definition
[request_definition]
r = sub, obj, act

# Policy definition
[policy_definition]
p = sub, obj, act

# Policy effect
[policy_effect]
e = some(where (p.eft == allow))

# Matchers
[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act

```

An example policy for ACL model is like:

```
p, alice, data1, read
p, bob, data2, write
```

It means:

- alice can read data1
- bob can write data2

We also support multi-line mode by appending '\\'  in the end:  

```ini
# Matchers
[matchers]
m = r.sub == p.sub && r.obj == p.obj \ 
  && r.act == p.act
```

Furthermore, if you are using ABAC,  you can try operator `in` like the following in Casbin **golang** edition (jCasbin and Node-Casbin are not supported yet):

```ini
# Matchers
[matchers]
m = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')
```

But you **SHOULD** make sure that the length of the array is **MORE** than **1**, otherwise there will cause it to panic.

For more operators, you may take a look at [govaluate](https://github.com/Knetic/govaluate)

