---
id: rbac
title: RBAC
---

## Role definition

``[role_definition]`` is the definition for the RBAC role inheritance relations. Casbin supports multiple instances of RBAC systems, e.g., users can have roles and their inheritance relations, and resources can have roles and their inheritance relations too. These two RBAC systems won't interfere.

This section is optional. If you don't use RBAC roles in the model, then omit this section.

```ini
[role_definition]
g = _, _
g2 = _, _
```

The above role definition shows that ``g`` is a RBAC system, and ``g2`` is another RBAC system. ``_, _`` means there are two parties inside an inheritance relation. As a common case, you usually use ``g`` alone if you only need roles on users.  You can also use ``g`` and ``g2`` when you need roles (or groups) on both users and resources. Please see the [rbac_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf) and [rbac_model_with_resource_roles.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf) for examples.

Casbin stores the actual user-role mapping (or resource-role mapping if you are using roles on resources) in the policy, for example:

```bash
p, data2_admin, data2, read
g, alice, data2_admin
```

It means ``alice`` inherits/is a member of role ``data2_admin``. ``alice`` here can be a user, a resource or a role. Casbin only recognizes it as a string.

Then in a matcher, you should check the role as below:

```ini
[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
```

It means ``sub`` in the request should have the role ``sub`` in the policy.

:::note
1. Casbin only stores the user-role mapping.
2. Casbin doesn't verify whether a user is a valid user, or role is a valid role. That should be taken care of by authentication.
3. Do not use the same name for a user and a role inside a RBAC system, because Casbin recognizes users and roles as strings, and there's no way for Casbin to know whether you are specifying user ``alice`` or role ``alice``. You can simply solve it by using ``role_alice``.
4. If ``A`` has role ``B``, ``B`` has role ``C``, then ``A`` has role ``C``. This transitivity is infinite for now.
:::

## Role hierarchy

Casbin's RBAC supports RBAC1's role hierarchy feature, meaning if ``alice`` has ``role1``, ``role1`` has ``role2``, then ``alice`` will also have ``role2`` and inherit its permissions.

Here is a concept called hierarchy level. So the hierarchy level for this example is 2. For the built-in role manager in Casbin, you can specify the max hierarchy level. The default value is 10. It means an end user like ``alice`` can only inherit 10 levels of roles.

```go
// NewRoleManager is the constructor for creating an instance of the
// default RoleManager implementation.
func NewRoleManager(maxHierarchyLevel int) rbac.RoleManager {
	rm := RoleManager{}
	rm.allRoles = &sync.Map{}
	rm.maxHierarchyLevel = maxHierarchyLevel
	rm.hasPattern = false

	return &rm
}
```

## How to distinguish role from user?

Casbin doesn't distinguish role from user in its RBAC. They are all treated as strings. If you only use single-level RBAC (a role will never be a member of another role). You can use ``e.GetAllSubjects()`` to get all users and ``e.GetAllRoles()`` to get all roles. They just list all ``u`` and all ``r`` respectively in all ``g, u, r`` rules.

But if you are using multi-level RBAC (with role hierarchy), and your application doesn't record whether a name (string) is a user or a role, or you have user and role with same name. You can add a prefix to role like ``role::admin`` before passing it to Casbin. So you will know if it's a role by checking this prefix.

## How to query implicit roles or permissions?

When a user inherits a role or permission via RBAC hierarchy instead of directly assigning them in a policy rule, we call such type of assignment as ``implicit``. To query such implicit relations, you need to use these 2 APIs: ``GetImplicitRolesForUser()`` and ``GetImplicitPermissionsForUser()`` instead of ``GetRolesForUser()`` and ``GetPermissionsForUser()``. For more details, please see [this GitHub issue](https://github.com/casbin/casbin/issues/137).

## Use pattern matching in RBAC

Sometimes, you want some subjects, object or domains/tenants with the specific pattern to be automatically granted to a role. Pattern matching functions in RBAC can help you do that. A pattern matching function shares the same parameters and return value as the previous [matcher function](https://casbin.org/docs/syntax-for-models#functions-in-matchers).

The pattern matching function supports each parameter of g.

We know that normally RBAC is expressed as ``g(r.sub, p.sub)`` in matcher. Then we will use policy like:

```bash
p, alice, book_group, read
g, /book/1, book_group
g, /book/2, book_group
```

So ``alice`` can read all books including ``book 1`` and ``book 2``. But there can be thousands of books and it's very tedious to add each book to the book role (or group) with one ``g`` policy rule.

But with pattern matching functions, you can write the policy with only one line:

```bash
g, /book/:id, book_group
```

Casbin will automatically match ``/book/1`` and ``/book/2`` into pattern ``/book/:id`` for you. You only need to register the function with the enforcer like:

```go
r := e.GetRoleManager()
r.(*defaultrolemanager.RoleManager).AddMatchingFunc("KeyMatch2",util.KeyMatch2)
```

When Using a pattern matching function in domains/tenants, You need to register the function to enforcer and model.

register `keyMatch2` to enforcer: 

```go
r := e.GetRoleManager()
r.(*defaultrolemanager.RoleManager).AddDomainMatchingFunc("KeyMatch2",util.KeyMatch2)
```

register `keyMatch2` to model:

```bash
m = g(r.sub, p.sub, r.dom) && keyMatch2(r.dom, p.dom) && r.obj == p.obj && r.act == p.act
```

If you don't understand what `g(r.sub, p.sub, r.dom)` means, please read [this](https://casbin.org/docs/rbac-with-domains). In short, `g(r.sub, p.sub, r.dom)` will check whether the user `r.sub` has a role `p.sub` in the domain `r.dom`. So this is how the matcher work. You can see the full example [here](https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307).

Apart from the pattern matching syntax above, we can also use pure domain pattern.

For example,  if we want ```sub``` to have access in different domains, ```domain1``` and ```domain2```, we can use the pure domain pattern:

```bash
p, admin, domain1, data1, read
p, admin, domain1, data1, write
p, admin, domain2, data2, read
p, admin, domain2, data2, write

g, alice, admin, *
g, bob, admin, domain2
```

In this example, we want ```alice``` to read and write ```data``` in domain1 and domain2, pattern matching ```*``` in ```g``` makes ```alice``` have the access to two domains.

By using pattern matching, especially in the scenarios which is more complicated and there are a lot of domains or objects we need to take into consideration, we can implement the ```policy_definition``` more elegant and effective.

## Role manager

See [Role Managers](/docs/role-managers) section for details.