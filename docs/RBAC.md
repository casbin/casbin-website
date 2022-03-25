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

```
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

See [RBAC with Pattern](/docs/en/rbac-with-pattern)

## Role manager

See [Role Managers](/docs/en/role-managers) section for details.

