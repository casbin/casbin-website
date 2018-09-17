---
id: go-quick-start
title: Go
---

New a Casbin enforcer with a model file and a policy file:

```go
e := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")
```

**Note:** you can also initialize an enforcer with policy in DB instead of file, see [Persistence](#persistence) section for details.

Add an enforcement hook into your code right before the access happens:

```go
sub := "alice" // the user that wants to access a resource.
obj := "data1" // the resource that is going to be accessed.
act := "read" // the operation that the user performs on the resource.

if e.Enforce(sub, obj, act) == true {
    // permit alice to read data1
} else {
    // deny the request, show an error
}
```

Besides the static policy file, Casbin also provides API for permission management at run-time. For example, You can get all the roles assigned to a user as below:

```go
roles := e.GetRoles("alice")
```

See [Policy management APIs](#policy-management) for more usage.

Please refer to the ``_test.go`` files for more usage.
