---
id: function
title: Function
---

## Functions in matchers

You can even specify functions in a matcher. You can use the built-in functions or specify your own function. The supported built-in functions are:

Function | Meaning | Example
----|------|----
keyMatch(arg1, arg2) | arg1 is a URL path like ``/alice_data/resource1``. arg2 can be a URL path or a ``*`` pattern like ``/alice_data/*``. It returns whether arg1 matches arg2 | [keymatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf)/[keymatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv)
keyMatch2(arg1, arg2) | arg1 is a URL path like ``/alice_data/resource1``. arg2 can be a URL path or a ``:`` pattern like ``/alice_data/:resource``. It returns whether arg1 matches arg2. | [keymatch2_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf)/[keymatch2_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv)
regexMatch(arg1, arg2) | arg1 can be any string. arg2 is a regular expression. It returns whether arg1 matches arg2. | [keymatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf)/[keymatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv)
ipMatch(arg1, arg2) | arg1 is an IP address like ``192.168.2.123``. arg2 can be an IP address or a CIDR like ``192.168.2.0/24``. It returns whether arg1 matches arg2. | [ipmatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf)/[ipmatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv)

## How to add a customized function

First prepare your function. It takes several parameters and return a bool:

```go
func KeyMatch(key1 string, key2 string) bool {
	i := strings.Index(key2, "*")
	if i == -1 {
		return key1 == key2
	}

	if len(key1) > i {
		return key1[:i] == key2[:i]
	}
	return key1 == key2[:i]
}
```

Then wrap it with ``interface{}`` types:

```go
func KeyMatchFunc(args ...interface{}) (interface{}, error) {
	name1 := args[0].(string)
	name2 := args[1].(string)

	return (bool)(KeyMatch(name1, name2)), nil
}
```

At last, register the function to the Casbin enforcer:

```go
e.AddFunction("my_func", KeyMatchFunc)
```

Now, you can use the function in your model CONF like this:

```ini
[matchers]
m = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act
```
