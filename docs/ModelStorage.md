---
id: model-storage
title: Model Storage
---

Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don't implement an API to save the model into a storage.

However, the good news is, we provide several ways to load a model statically or dynamically:

1. Load from a model file (.CONF). This is the most common way to use Casbin:

    ```go
    e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")
    ```

2. Load from code. Please see: https://github.com/casbin/casbin/wiki/Load-model-from-string

3. Load from string. Please see: https://github.com/casbin/casbin/wiki/Load-model-from-string

## Load model from string

The model can be initialized from code instead of using ``.CONF`` file. Here's an example for the RBAC model:

```go
// Initialize the model from Go code.
m := casbin.NewModel()
m.AddDef("r", "r", "sub, obj, act")
m.AddDef("p", "p", "sub, obj, act")
m.AddDef("g", "g", "_, _")
m.AddDef("e", "e", "some(where (p.eft == allow))")
m.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")

// Load the policy rules from the .CSV file adapter.
// Replace it with your adapter to avoid files.
a := persist.NewFileAdapter("examples/rbac_policy.csv")

// Create the enforcer.
e := casbin.NewEnforcer(m, a)
```

Or you can just get the model from one single string:

```go
// Initialize the model from a string.
text :=
`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
`
m := NewModel(text)

// Load the policy rules from the .CSV file adapter.
// Replace it with your adapter to avoid files.
a := persist.NewFileAdapter("examples/rbac_policy.csv")

// Create the enforcer.
e := casbin.NewEnforcer(m, a)
```

These two ways are equivalent with the common usage:

[examples/rbac_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf):

```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
```

```go
e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")
```
