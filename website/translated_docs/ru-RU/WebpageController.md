---
id: frontend
title: Frontend Usage
---

[Casbin.js](https://github.com/casbin/casbin.js) is a Casbin addon that facilites your access-control management in the frontend application.


## Installation

```
npm install casbin.js
```
or
```
yarn add casbin.js
```

## Quick Start
You can use `manual` mode in your frontend application, and set the permission whenever you wish:
```Javascript
const casbinjs = require("casbin.js");

// Set the user's permission:
// He/She can read `data1` and `data2` objects and can write `data1` object
const permission = {
    "read": ["data1", "data2"],
    "write": ["data1"]
}

// Run casbin.js in manual mode, which requires you to set the permission manually.
const authorizer = new casbinjs.Authorizer("manual");

authorizer.setPermission(permission);
console.log(authorizer.can("read", "data1"));  // True
console.log(authorizer.cannot("write", "data2"));  // True
```

You can refer to our [React example](https://github.com/casbin-js/examples) to see a practical usage of Casbin.js




<!-- #### Permission Object
Casbin.js will accept a JSON object to manipulate the correspoding permission of a visitor. For example:
```
{
    "read": ["data1", "data2"],
    "write": ["data1"]
}
```
The permission object above shows the visitor can `read` `data1` and `data2` objects, while can only `write` `data1` objects. -->


## Advanced Usage

Casbin.js provides a perfect solution to integrating your frontend access-control management with your backend Casbin service.


Use `auto` mode and specify your endpoint when initializing the Casbin.js `Authorizer`, it will automatically sync the permission and manipulate the frontend status.

```Javascript
const casbinjs = require('casbin.js');

// Set your backend casbin service url
const authorizer = new casbinjs.Authorizer(
    'auto', // mode
    {endpoint: 'http://your_endpoint/api/casbin'}
);

// Set your visitor. 
// Casbin.js will automatically sync the permission with your backend Casbin service.
authorizer.setUser("Tom");

// Evaluate the permission
if authorizer.can("read", "data1") {
    // Some frontend procedure ...
}
```

Correspondingly, you need to expose an interface (e.g. a RestAPI) to generate the permission object and pass it to the frontend. In your API controller, call `CasbinJsGetUserPermission` to construct the permission object. Here is an example in Beego:

```Go
// Router
beego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")

// Controller
func (c *APIController) GetFrontendPermission() {
    // Get the visitor from the GET parameters. (The key is "casbin_subject")
    visitor := c.Input().Get("casbin_subject")
    // `e` is an initialized instance of Casbin Enforcer
    c.Data["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor) 
    // Pass the data to the fronend.
    c.ServeJSON()
}
```

:::note
Currently, `CasbinJsGetPermissionForUser` api is only supported in Go Casbin and Node-Casbin. If you want this api to be supported in other languages, please [raise an issue](https://github.com/casbin/casbin.js/issues) or leave a comment below.
:::


## API List

#### `setPermission(permission: string)`
Set the permission object. Always used in `manual` mode.

#### `setUser(user: string)`
Set the visitor identity and update the permission. Always used in `auto` mode.

#### `can(action: string, object: string)`
Check if the user can perform `action` on `object`.

#### `cannot(action: string, object: string)`
Check if the user **cannot** perform `action` on `object`.

#### `canAll(action: string, objects: Array<object>)`
Check if the user can perform `action` on **all** object in `objects`.

#### `canAny(action: string, objects: Array<object>)`
Check if the user can perform `action` on **any one** of the `objects`.


## Why Casbin.js

People may wonder the difference between Node-Casbin and Casbin.js. In a word, Node-Casbin is the core of Casbin implemented in NodeJS environment, and it's normally used as an access-controlling management toolkit at the server ends. Casbin.js is an frontend library that help you use Casbin to authorize your webpage user at the client side.

Normally, it is not proper to directly build up a Casbin service and do the authorization/enforcement tasks at a web frontend application due to the following problems:
1. When someone turn on the client, the enforcer will be initialized, and it will pull all the policies from the backend persistent layers. A high concurrency could bring tough pressure on the databases and cost a lot of network throughput. 
2. Loading all policies to the client sides could bring secure risks.
3. Difficult for the seperation between client and server as well as the agile development.

We wish a tool that eases the process of using Casbin at the frontend. Actually, the core of Casbin.js is the manipulation of current user's permission at the client side. As you mentioned, Casbin.js does a fetch from a specified endpoint. This procedure will sync the permission of the user with the backend Casbin service. After having the permission data, developers can use Casbin.js interfaces to manage the behaviors of the user at the frontend side.

Casbin.js avoid the two problems that mentioned above: Casbin service will no longer be pulled up repeatedly, and the size of passing messages between the client and the server are reduced. We also avoid to store all the policies at the frontend. User can only accessible to his own permission, but have no idea about anything about things like the access-control model and other users' permissions. Besides, Casbin.js can also efficiently decouple the client and the server in authorization management.
