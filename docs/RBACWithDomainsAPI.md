---
id: rbac-with-domains-api
title: RBAC with Domains API
---

A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code. 

## Reference

global variable `e` is Enforcer instance.

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e, err := NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")
```

<!--Node.js-->
```typescript
const e = await newEnforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv')
```

<!--PHP-->
```php
$e = new Enforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv');
```

<!--.NET-->
```csharp
var e = new Enforcer("path/to/model.conf", "path/to/policy.csv");
```

<!--Rust-->
```rust
let mut e = Enforcer::new("examples/rbac_model.conf", "examples/rbac_policy.csv").await?;
```


<!--END_DOCUSAURUS_CODE_TABS-->

### `GetUsersForRoleInDomain()`

GetUsersForRoleInDomain gets the users that has a role inside a domain.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.GetUsersForRoleInDomain("alice", "domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetRolesForUserInDomain()`

GetRolesForUserInDomain gets the roles that a user has inside a domain.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.GetRolesForUserInDomain("admin", "domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetPermissionsForUserInDomain()`

GetPermissionsForUserInDomain gets permissions for a user or role inside a domain.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.GetPermissionsForUserInDomain("alice", "domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddRoleForUserInDomain()`

AddRoleForUserInDomain adds a role for a user inside a domain.
Returns false if the user already has the role (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteRoleForUserInDomain()`

DeleteRoleForUserInDomain deletes a role for a user inside a domain.
Returns false if the user does not have the role (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteRolesForUserInDomain()`

DeleteRolesForUserInDomain deletes all roles for a user inside a domain.
Returns false if the user does not have any roles (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllUsersByDomain()`

GetAllUsersByDomain would get all users associated with the domain.
Returns empty string array if has no domain defined in model.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.GetAllUsersByDomain("domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteAllUserByDomain()`

DeleteAllUsersByDomain would delete all users associated with the domain.
Returns false if has no domain defined in model.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.DeleteAllUserByDomain("domain1")
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteDomains()`

DeleteDomains would delete all associated users and roles.
It would delete all domains if parameter is not provided.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.DeleteDomains("domain1", "domain2")
```

<!--END_DOCUSAURUS_CODE_TABS-->

:::note
If you are handling a domain like ```name::domain```, it may lead to unexpected behavior. In Casbin, ```::``` is a reversed keyword, just like ```for```, ```if``` in a programming language, we should never put ```::``` in a domain.
:::
