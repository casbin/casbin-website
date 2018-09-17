---
id: node-quick-start
title: Node
---

## Installation

```
# npm
npm install casbin --save
# yarn
yarn add casbin
```

## Usage
Import casbin

```typescript
import { Enforcer } from 'casbin';
````

New a node-casbin enforcer with a model file and a policy file:

```typescript
// you can initialize it in async middleware
const enforcer = await Enforcer.newEnforcer('path/to/model.conf', 'path/to/policy.csv');
```

**Note:** you can also initialize an enforcer with policy in DB instead of file, see [Persistence](#persistence) section for details.

Add an enforcement hook into your code right before the access happens:

```typescript
const sub = 'alice'; // the user that wants to access a resource.
const obj = 'data1'; // the resource that is going to be accessed.
const act = 'read'; // the operation that the user performs on the resource.

if (enforcer.enforce(sub, obj, act) == true) {
    // permit alice to read data1
} else {
    // deny the request, show an error
}
```

Besides the static policy file, node-casbin also provides API for permission management at run-time. For example, You can get all the roles assigned to a user as below:

```typescript
const roles = enforcer.getRoles('alice');
```

Please refer to the [src/test](https://github.com/casbin/node-casbin/tree/master/test) package for more usage.
