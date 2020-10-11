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

Function | Behavior on error 
----|-----
[NewEnforcer()](https://godoc.org/github.com/casbin/casbin#NewEnforcer) | Return error
[LoadModel()](https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel) | Return error
[LoadPolicy()](https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy) | Return error
[SavePolicy()](https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy) | Return error
[Enforce()](https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce) | Return error

:::note
``NewEnforcer()`` calls ``LoadModel()`` and ``LoadPolicy()`` inside. So you don't have to call the latter two calls when using ``NewEnforcer()``.
:::

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
