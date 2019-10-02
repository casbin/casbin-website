---
id: log-error
title: Log & Error Handling
---

## Logging

Casbin uses the built-in ``log`` to print logs to console like:

```log
2017/07/15 19:43:56 [Request: alice, data1, read ---> true]
```

The logging is enabled by default. You can toggle it via ``Enforcer.EnableLog()`` or the last parameter of ``NewEnforcer()``. Here's an example:

```go
// Disable the logging in the new method.
e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv", false)

// Enable the logging at run-time.
e.EnableLog(true)
```

## Error handling

Error or panic may happen when you use Casbin for reasons like:

1. Invalid syntax in model file (.conf).
2. Invalid syntax in policy file (.csv).
3. Custom error from storage adapters, e.g., MySQL fails to connect.
4. Casbin's bug.

There are five main functions you may need to care about for error or panic:

Function | Behavior on error | What if I want error instead of panic?
----|------|----
[NewEnforcer()](https://godoc.org/github.com/casbin/casbin#NewEnforcer) | Cause panic | Please use [NewEnforcerSafe()](https://godoc.org/github.com/casbin/casbin#NewEnforcerSafe)
[LoadModel()](https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel) | Cause panic | Please use [LoadModelSafe()](https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModelSafe)
[LoadPolicy()](https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy) | Return error | N/A
[SavePolicy()](https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy) | Return error | N/A
[Enforce()](https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce) | Cause panic | Please use [EnforceSafe()](https://godoc.org/github.com/casbin/casbin#Enforcer.EnforceSafe)

:::note
``NewEnforcer()`` calls ``LoadModel()`` and ``LoadPolicy()`` inside. So you don't have to call the latter two calls when using ``NewEnforcer()``.
:::

### Why not just return error for all the functions?

The author believes that Golang error is very unfriendly for developers to debug, because it's only a string and has no faulty call stack information. The panic can show call stack and integrate well with Golang IDEs. Most of the Casbin users are developers too. And they usually don't write the Casbin model or policy correctly at the first time (which causes error or panic). So they can benefit from the advantages of panic. However, there are still many people who favor error more than panic. So we provide the ``xxxSafe()`` functions which just wrap the ``xxx()`` functions by translating panic into error. You can just use ``xxx()`` or ``xxxSafe()`` functions based on personal tastes.

## Enable & disable

The enforcer can be disabled via the ``Enforcer.EnableEnforce()`` function. When it's disabled, ``Enforcer.Enforce()`` will always return ``true``. Other operations like adding or removing policy is not affected. Here's an example:

```go
e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")

// Will return false.
// By default, the enforcer is enabled.
e.Enforce("non-authorized-user", "data1", "read")

// Disable the enforcer at run-time.
e.EnableEnforce(false)

// Will return true for any request.
e.Enforce("non-authorized-user", "data1", "read")

// Enable the enforcer again.
e.EnableEnforce(true)

// Will return false.
e.Enforce("non-authorized-user", "data1", "read")
```
