---
id: function
title: Function
---

## Functions in matchers

You can even specify functions in a matcher to make it more powerful. You can use the built-in functions or specify your own function. All built-in functions take such a format(except ``keyGet`` and ``keyGet2``):

```C
bool function_name(string arg1, string arg2)
```

It returns whether ``arg1`` matches ``arg2``.

``keyGet`` and ``keyGet2`` will return the string which matching the wildcard, and return ``""`` if nothing was matched.

The supported built-in functions are:

Function | arg1 | arg2 | Example
----|------|----|----
keyMatch | a URL path like ``/alice_data/resource1`` | a URL path or a ``*`` pattern like ``/alice_data/*`` | [keymatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf)/[keymatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv)
keyGet | a URL path like ``/alice_data/resource1`` | a URL path or a ``*`` pattern like ``/alice_data/*`` | [keyget_model.conf](https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf)/[keymatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv)
keyMatch2 | a URL path like ``/alice_data/resource1`` | a URL path or a ``:`` pattern like ``/alice_data/:resource`` | [keymatch2_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf)/[keymatch2_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv)
keyGet2 | a URL path like ``/alice_data/resource1`` | a URL path or ``:`` pattern like ``/alice_data/:resource`` | [keyget2_model.conf](https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf)/[keymatch2_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv)
keyMatch3 | a URL path like ``/alice_data/resource1`` | a URL path or a ``{}`` pattern like ``/alice_data/{resource}`` |
keyMatch4 | a URL path like ``/alice_data/123/book/123`` | a URL path or a ``{}`` pattern like ``/alice_data/{id}/book/{id}`` |
regexMatch | any string | a regular expression pattern | [keymatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf)/[keymatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv)
ipMatch | an IP address like ``192.168.2.123`` | an IP address or a CIDR like ``192.168.2.0/24`` | [ipmatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf)/[ipmatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv)

See details for above functions at: https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go

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
