---
id: abac
title: ABAC
---

## What is the ABAC model actually?

ABAC is ``Attribute-Based Access Control``, meaning you can use the attributes (properties) of the subject, object or action instead of themselves (the string) to control the access. You may already hear of a complicated ABAC access control language named XACML. Compared to XACML, Casbin's ABAC is very simple: in ABAC, you can use structs (or class instances based on the programming language) instead of string for model elements.

Use the official ABAC example for example:

```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = r.sub == r.obj.Owner
```

We use ``r.obj.Owner`` instead of ``r.obj`` in the matcher. The ``r.obj`` passed in the ``Enforce()`` function will be a struct or class instance instead of string. Casbin will use reflection to retrieve the ``obj`` member variable in that struct or class for you.

Here is a definition for the ``r.obj`` struct or class:

```go
type testResource struct {
	Name  string
	Owner string
}
```

## How to use ABAC?

Simply speaking, to use ABAC, you need to do two things:

1. Specify the attributes in the model matcher.
2. Pass in the struct or class instance for the element as the argument in Casbin's ``Enforce()`` function.

:::warning
Currently, only request elements like ``r.sub``, ``r.obj``, ``r.act`` and so on support ABAC. You cannot use it on policy elements like ``p.sub``, because there is no way to define a struct or class in Casbin's policy.
:::

:::tip
You can use multiple ABAC attributes in a matcher, for example: ``m = r.sub.Domain == r.obj.Domain``.
:::
