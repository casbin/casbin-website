---
id: webpage-controller
title: Webpage Controller
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

You can refer to our [React example](https://github.com/casbin-js/examples/tree/master/react) to see a practical usage of Casbin.js



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
    c.Data["perm"] = e.CasbinJsGetUserPermission(visitor) 
    // Pass the data to the fronend.
    c.ServeJSON()
}
```

:::note
Currently, `CasbinJsGetUserPermission` api is only supported in Go Casbin and Node-Casbin. If you want this api to be supported in other languages, please [raise an issue](https://github.com/casbin/casbin.js/issues) or leave a comment below.
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


