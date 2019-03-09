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

The above role definition shows that ``g`` is a RBAC system, and ``g2`` is another RBAC system. ``_, _`` means there are two parties inside an inheritance relation. As a common case, you usually use ``g`` alone if you only need roles on users. and you can use ``g`` and ``g2`` when you need roles (or groups) on both users and resources. Please see the [rbac_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf) and [rbac_model_with_resource_roles.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf) for examples.

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

It means ``sub`` in the request should has the role ``sub`` in the policy.

There are several things to note:

1. Casbin only stores the user-role mapping.
2. Casbin doesn't verify whether a user is a valid user, or role is a valid role. That should be taken care of by authentication.
3. Do not use the same name for a user and a role inside a RBAC system, because Casbin recognizes users and roles as strings, and there's no way for Casbin to know whether you are specifying user ``alice`` or role ``alice``. You can simply solve it by using ``role_alice``.
4. If ``A`` has role ``B``, ``B`` has role ``C``, then ``A`` has role ``C``. This transitivity is infinite for now.

## Role definition with domains tenants

The RBAC roles in Casbin can be global or domain-specific. Domain-specify roles mean that the roles for a user can be different when the user is at different domains/tenants. This is very useful for large systems like a cloud, as the users are usually in different tenants.

The role definition with domains/tenants should be something like:

```ini
[role_definition]
g = _, _, _
```

The 3rd ``_`` means the name of domain/tenant, this part should not be changed. Then the policy can be:

```
p, admin, tenant1, data1, read
p, admin, tenant2, data2, read

g, alice, admin, tenant1
g, alice, user, tenant2
```

It means ``admin`` role in ``tenant1`` can read ``data1``. And ``alice`` has ``admin`` role in ``tenant1``, and has ``user`` role in ``tenant2``. So she can read ``data1``. However, since ``alice`` is not an ``admin`` in ``tenant2``, she cannot read ``data2``.

Then in a matcher, you should check the role as below:

```ini
[matchers]
m = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act
```

Please see the [rbac_with_domains_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf) for examples.
