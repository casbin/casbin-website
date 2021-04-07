---
id: rbac-api
title: RBAC API
---

A more friendly API for RBAC. This API is a subset of Management API. The RBAC users could use this API to simplify the code. 

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

### `GetRolesForUser()`

GetRolesForUser gets the roles that a user has.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.GetRolesForUser("alice")
```

<!--Node.js-->
```typescript
const res = await e.getRolesForUser('alice')
```

<!--PHP-->
```php
$res = $e->getRolesForUser("alice");
```

<!--.NET-->
```csharp
var res = e.GetRolesForUser("alice");
```

<!--Rust-->
```rust
let roles = e.get_roles_for_user("alice", None); // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetUsersForRole()`

GetUsersForRole gets the users that has a role.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.GetUsersForRole("data1_admin")
```

<!--Node.js-->
```typescript
const res = await e.getUsersForRole('data1_admin')
```

<!--PHP-->
```php
$res = $e->getUsersForRole("data1_admin");
```

<!--.NET-->
```csharp
var res = e.GetUsersForRole("data1_admin");
```

<!--Rust-->
```rust
let users = e.get_users_for_role("data1_admin", None); // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `HasRoleForUser()`

HasRoleForUser determines whether a user has a role.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
res := e.HasRoleForUser("alice", "data1_admin")
```

<!--Node.js-->
```typescript
const res = await e.hasRoleForUser('alice', 'data1_admin')
```

<!--PHP-->
```php
$res = $e->hasRoleForUser("alice", "data1_admin");
```

<!--.NET-->
```csharp
var res = e.HasRoleForUser("alice", "data1_admin");
```

<!--Rust-->
```rust
let has = e.has_role_for_user("alice", "data1_admin", None); // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddRoleForUser()`

AddRoleForUser adds a role for a user.
Returns false if the user already has the role (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.AddRoleForUser("alice", "data2_admin")
```

<!--Node.js-->
```typescript
await e.addRoleForUser('alice', 'data2_admin')
```

<!--PHP-->
```PHP
$e->addRoleForUser("alice", "data2_admin");
```

<!--.NET-->
```csharp
var added = e.AddRoleForUser("alice", "data2_admin");
or
var added = await e.AddRoleForUserAsync("alice", "data2_admin");
```

<!--Rust-->
```rust
let added = e.add_role_for_user("alice", "data2_admin", None).await?; // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `AddRolesForUser()`

AddRolesForUser adds multiple roles for a user.
Returns false if the user already has one of these roles (aka not affected).

For example: 

<!--DOCUSAURUS_CODE_TABS-->

<!--Rust-->
```rust
let roles = vec!["data1_admin".to_owned(), "data2_admin".to_owned()];
let all_added = e.add_roles_for_user("alice", roles, None).await?; // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `DeleteRoleForUser()`

DeleteRoleForUser deletes a role for a user.
Returns false if the user does not have the role (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.DeleteRoleForUser("alice", "data1_admin")
```

<!--Node.js-->
```typescript
await e.deleteRoleForUser('alice', 'data1_admin')
```

<!--PHP-->
```php
$e->deleteRoleForUser("alice", "data1_admin");
```

<!--.NET-->
```csharp
var deleted = e.DeleteRoleForUser("alice", "data1_admin");
or
var deleted = await e.DeleteRoleForUser("alice", "data1_admin");
```

<!--Rust-->
```rust
let deleted = e.delete_role_for_user("alice", "data1_admin", None).await?; // No domain
```


<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteRolesForUser()`

DeleteRolesForUser deletes all roles for a user.
Returns false if the user does not have any roles (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.DeleteRolesForUser("alice")
```

<!--Node.js-->
```typescript
await e.deleteRolesForUser('alice')
```

<!--PHP-->
```php
$e->deleteRolesForUser("alice");
```

<!--.NET-->
```csharp
var deletedAtLeastOne = e.DeleteRolesForUser("alice");
or
var deletedAtLeastOne = await e.DeleteRolesForUserAsync("alice");
```

<!--Rust-->
```rust
let deleted_at_least_one = e.delete_roles_for_user("alice", None).await?; // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteUser()`

DeleteUser deletes a user.
Returns false if the user does not exist (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```
e.DeleteUser("alice")
```

<!--Node.js-->
```typescript
await e.deleteUser('alice')
```

<!--PHP-->
```php
$e->deleteUser("alice");
```

<!--.NET-->
```csharp
var deleted = e.DeleteUser("alice");
or
var deleted = await e.DeleteUserAsync("alice");
```

<!--Rust-->
```rust
let deleted = e.delete_user("alice").await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeleteRole()`

DeleteRole deletes a role.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.DeleteRole("data2_admin")
```

<!--Node.js-->
```typescript
await e.deleteRole("data2_admin")
```

<!--PHP-->
```php
$e->deleteRole("data2_admin");
```

<!--.NET-->
```csharp
var deleted = e.DeleteRole("data2_admin");
or
var deleted = await e.DeleteRoleAsync("data2_admin");
```

<!--Rust-->
```rust
let deleted = e.delete_role("data2_admin").await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `DeletePermission()`

DeletePermission deletes a permission.
Returns false if the permission does not exist (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.DeletePermission("read")
```

<!--Node.js-->
```typescript
await e.deletePermission('read')
```

<!--PHP-->
```php
$e->deletePermission("read");
```

<!--.NET-->
```csharp
var deleted = e.DeletePermission("read");
or
var deleted = await e.DeletePermissionAsync("read");
```

<!--Rust-->
```rust
let deleted = e.delete_permission(vec!["read".to_owned()]).await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `AddPermissionForUser()`

AddPermissionForUser adds a permission for a user or role.
Returns false if the user or role already has the permission (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.AddPermissionForUser("bob", "read")
```

<!--Node.js-->
```typescript
await e.addPermissionForUser('bob', 'read')
```

<!--PHP-->
```php
$e->addPermissionForUser("bob", "read");
```

<!--.NET-->
```csharp
var added = e.AddPermissionForUser("bob", "read");
or
var added = await e.AddPermissionForUserAsync("bob", "read");
```

<!--Rust-->
```rust
let added = e.add_permission_for_user("bob", vec!["read".to_owned()]).await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddPermissionsForUser()`

AddPermissionsForUser adds multiple permissions for a user or role.
Returns false if the user or role already has one of the permissions (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Rust-->
```rust
let permissions = vec![
    vec!["data1".to_owned(), "read".to_owned()],
    vec!["data2".to_owned(), "write".to_owned()],
];

let all_added = e.add_permissions_for_user("bob", permissions).await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `DeletePermissionForUser()`

DeletePermissionForUser deletes a permission for a user or role.
Returns false if the user or role does not have the permission (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.DeletePermissionForUser("bob", "read")
```

<!--Node.js-->
```typescript
await e.deletePermissionForUser("bob", "read")
```

<!--PHP-->
```php
$e->deletePermissionForUser("bob", "read");
```

<!--.NET-->
```csharp
var deleted = e.DeletePermissionForUser("bob", "read");
or
var deleted = await e.DeletePermissionForUserAsync("bob", "read");
```

<!--Rust-->
```rust
let deleted = e.delete_permission_for_user("bob", vec!["read".to_owned()]).await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `DeletePermissionsForUser()`

DeletePermissionsForUser deletes permissions for a user or role.
Returns false if the user or role does not have any permissions (aka not affected).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.DeletePermissionsForUser("bob")
```

<!--Node.js-->
```typescript
await e.deletePermissionsForUser('bob')
```

<!--PHP-->
```php
$e->deletePermissionsForUser("bob");
```

<!--.NET-->
```csharp
var deletedAtLeastOne = e.DeletePermissionsForUser("bob");
or
var deletedAtLeastOne = await e.DeletePermissionsForUserAsync("bob");
```

<!--Rust-->
```rust
let deleted_at_least_one = e.delete_permissions_for_user("bob").await?;
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetPermissionsForUser()`

GetPermissionsForUser gets permissions for a user or role.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.GetPermissionsForUser("bob")
```

<!--Node.js-->
```typescript
await e.getPermissionsForUser('bob')
```

<!--PHP-->
```php
$e->getPermissionsForUser("bob");
```

<!--.NET-->
```csharp
var permissions = e.GetPermissionsForUser("bob");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `HasPermissionForUser()`

HasPermissionForUser determines whether a user has a permission.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.HasPermissionForUser("alice", []string{"read"})
```

<!--Node.js-->
```typescript
await e.hasPermissionForUser('alice', 'read')
```

<!--PHP-->
```php
$e->hasPermissionForUser("alice", []string{"read"});
```

<!--.NET-->
```csharp
var has = e.HasPermissionForUser("bob", "read");
```

<!--Rust-->
```rust
let has = e.has_permission_for_user("alice", vec!["data1".to_owned(), "read".to_owned()]);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetImplicitRolesForUser()`

GetImplicitRolesForUser gets implicit roles that a user has.
Compared to GetRolesForUser(), this function retrieves indirect roles besides direct roles.

For example:  
g, alice, role:admin  
g, role:admin, role:user  

GetRolesForUser("alice") can only get: ["role:admin"].  
But GetImplicitRolesForUser("alice") will get: ["role:admin", "role:user"].


For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.GetImplicitRolesForUser("alice")
```

<!--Node.js-->
```typescript
await e.getImplicitRolesForUser("alice")
```

<!--PHP-->
```php
$e->getImplicitRolesForUser("alice");
```

<!--.NET-->
```csharp
var implicitRoles = e.GetImplicitRolesForUser("alice");
```

<!--Rust-->
```rust
e.get_implicit_roles_for_user("alice", None); // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetImplicitPermissionsForUser()`

GetImplicitPermissionsForUser gets implicit permissions for a user or role.  
Compared to GetPermissionsForUser(), this function retrieves permissions for inherited roles.  

For example:  
p, admin, data1, read  
p, alice, data2, read  
g, alice, admin  

GetPermissionsForUser("alice") can only get: [["alice", "data2", "read"]].  
But GetImplicitPermissionsForUser("alice") will get: [["admin", "data1", "read"], ["alice", "data2", "read"]].

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.GetImplicitPermissionsForUser("alice")
```

<!--Node.js-->
```text
await e.getImplicitPermissionsForUser("alice")
```

<!--PHP-->
```php
$e->getImplicitPermissionsForUser("alice");
```

<!--.NET-->
```csharp
var implicitPermissions = e.GetImplicitPermissionsForUser("alice");
```

<!--Rust-->
```rust
e.get_implicit_permissions_for_user("alice", None); // No domain
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetDomainsForUser`
GetDomainsForUser get all domains which a user has.

For example:
p, admin, domain1, data1, read
p, admin, domain2, data2, read
p, admin, domain2, data2, write
g, alice, admin, domain1
g, alice, admin, domain2

GetDomainsForUser("alice") could get ["domain1", "domain2"]

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
result, err := e.GetDomainsForUser("alice")
```

<!--END_DOCUSAURUS_CODE_TABS-->
