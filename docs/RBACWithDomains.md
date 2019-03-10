---
id: rbac-with-domains
title: RBAC with Domains
---

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
