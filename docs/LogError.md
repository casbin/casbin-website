---
id: log-error
title: Log & Error Handling
---

## Logging

Casbin uses the built-in ``log`` to print logs to console by default like:

```log
2017/07/15 19:43:56 [Request: alice, data1, read ---> true]
```

The logging is not enabled by default. You can toggle it via ``Enforcer.EnableLog()`` or the last parameter of ``NewEnforcer()``.

### Use different logger for different enforcer
Every enforcer could have its own logger to log info, and it could be changed at run-time.

```go
// Set a default logger as enforcer e1's logger.
// This operation could also be seen as changing the logger of e1 at run-time.
e1.SetLogger(&Log.DefaultLogger{})

// Set another logger as enforcer e2's logger.
e2.SetLogger(&YouOwnLogger)
```

#### How to write an logger

You own logger should implement the ``Logger`` interface by providing at least six mandatory methods:``EnableLog(bool)``, ``IsEnabled() bool``, ``LogModel(event int, line []string, model [][]string)``, ``LogEnforce(event int, line string, request *[]interface{}, policies *[]string, result *[]interface{})``, ``LogRole(event int, line string, role []string)`` and ``LogPolicy(event int, line string, pPolicyFormat []string, gPolicyFormat []string, pPolicy *[]interface{}, gPolicy *[]interface{})``.

Method | Type | Description
----|------|----
EnableLog() | mandatory | Control whether print the message.
IsEnabled() | mandatory | Show the current logger's enabled status.
LogModel() | mandatory | Log info related to model.
LogEnforce() | mandatory | Log info related to enforce.
LogRole() | mandatory | Log info related to role.
LogPolicy() | mandatory | Log info related to policy.

We provide different params for different methods, you could pay more attention to those params you need.

And there is a param called ``event`` to describe the log information, we have defined 7 events now:
```go
const (
	LogTypeGrantedAccessRequest  = iota // Enforcer grants a request.
	LogTypeRejectedAccessRequest        // Enforcer rejects a request.
	LogTypeLoadPolicy                   // Enforcer starts or stops auto loading policy.
	LogTypePrintModel                   // Print model.
	LogTypePrintPolicy                  // Print policy.
	LogTypePrintRole                    // Print role.
	LogTypeLinkRole                     // Build role links.
)
```

Then, you could use your custom ``logger`` using the method of ``Enforcer.SetLogger()``.

Here is an example about how to customize a logger for Golang:

```go
import (
	"fmt"

	"github.com/casbin/casbin/log"
)

// Define the logger structure.
type Logger struct {
	enable bool // Using a field to record logger's status.
}

// Declare this logger.
var logger Logger

// EnableLog controls whether to print the message, you could change this value depends on your own struct.
func (l *Logger) EnableLog(enable bool) {
	// Change your logger status.
	l.enable = enable
}

// IsEnabled returns if logger is enabled, decides whether log functions are turned on.
func (l *Logger) IsEnabled() bool {
	return l.enable
}

// Line is a param we generate in default form.
func (l *Logger) LogModel(event int, line []string, model [][]string) {
	// Judging log status.
	if !l.IsEnabled() {
		return
    }

	fmt.Println(model)
}

func (l *Logger) LogEnforce(event int, line string, request *[]interface{}, policies *[]string, result *[]interface{}) {
	if !l.IsEnabled() {
		return
    }

	// Make different log according to different events.
	if event == log.LogTypeGrantedAccessRequest {
		fmt.Println("FAIL: ", request, result)
		return
	}

	fmt.Println("PASS: ", request, policies)
}

func (l *Logger) LogPolicy(event int, line string, pPolicyFormat []string, gPolicyFormat []string, pPolicy *[]interface{}, gPolicy *[]interface{}) {
	if !l.IsEnabled() {
		return
	}

	// pPolicyFormat means the p policy's format, such as: sub sub obj act
	// gPolicyFormat means the g policy's format, such as: _ _
	fmt.Println(pPolicy, gPolicy)
}

func (l *Logger) LogRole(event int, line string, role []string) {
	if !l.IsEnabled() {
		return
	}

	fmt.Println(role)
}

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
