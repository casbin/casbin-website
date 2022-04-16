---
id: abac
title: ABAC
---

## What is the ABAC model actually?

ABAC stands for ``Attribute-Based Access Control``. Using this, we can use the attributes (properties) of the subject, object or action instead of themselves (the string) to control access. You may have already heard of a complicated ABAC access control language named XACML. Casbin's ABAC is very simple in comparison to XACML. In ABAC, we can use structs (or class instances based on the programming language) instead of string for model elements.

Example using Casbin's ABAC:

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

We use ``r.obj.Owner`` instead of ``r.obj`` in the matcher. The ``r.obj`` passed in the ``Enforce()`` function will be a struct or class instance instead of a string. Casbin will use reflection to retrieve the ``obj`` member variable in that struct or class for you.

Here is a definition for the ``r.obj`` struct or class:

```go
type testResource struct {
	Name  string
	Owner string
}
```

## How to use ABAC?

There are two simple steps we need to follow in order to use ABAC:

1. Specify the attributes in the model matcher.
2. Pass in the struct or class instance for the element as the argument in Casbin's ``Enforce()`` function.

### Warning
Currently, only request elements like ``r.sub``, ``r.obj``, ``r.act`` support ABAC. We cannot use it on policy elements like ``p.sub``, because there is no way to define a struct or class in Casbin's policy.


### tip
We can use multiple ABAC attributes in a matcher, for example: ``m = r.sub.Domain == r.obj.Domain``.


### tip
If we need to use a comma in the policy which conflicts with csv's separator and we need to escape it, Casbin parses the policy file through [csv library](https://pkg.go.dev/encoding/csv). We can surround the statement with quotation marks. For example, `"keyMatch("bob", r.sub.Role)"` will not be split.


## Scaling the model for complex and large number of ABAC rules.

The above instance of ABAC implementation is very simple at its core, but often the authorization system needs a very complex and large number of ABAC rules. To satisfy this, the above implementation will increase the verbosity of the model to a large extent. So, it’s wise to add the rules in the policy instead of in the model. This is done by introducing a ``eval()`` functional construct. The example instance to manage such ABAC models is shown below.

This is the definition of the ``CONF`` file used for defining the ABAC model:

```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub_rule, obj, act

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act
```

Here, ``p.sub_rule`` is of type struct or class(user-defined type) which consists of necessary attributes to be used in the policy.
 
This is the policy that is used against the model for ``Enforcement``. Now, we can use the object instance which is passed to ``eval()`` as a parameter to define certain ABAC constraints.

```
p, r.sub.Age > 18, /data1, read
p, r.sub.Age < 60, /data2, write
```
