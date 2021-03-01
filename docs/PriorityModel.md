---
id: priority-model
title: Priority Model
---

Casbin support load policies with priority. 

## Load Policy with Priority Implicitly

It's quite simple, the order determines the priority, policy appeared earlier has higher priority.

model.conf:
```ini
[policy_effect]
e = priority(p.eft) || deny
```

## Load Policy with Priority Explicitly

> Also see: [casbin#550](https://github.com/casbin/casbin/issues/550)

The first element in policy must be priority, and the smaller priority value will has higher priority. If there's non-numerical character in priority, it will be in the last, rather than throw an error.
Now, explicit priority only support `AddPolicy` & `AddPolicies`, if `UpdatePolicy` been called, you shouldn't change the priority attribute.

model.conf:
```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = priority, sub, obj, act, eft

[role_definition]
g = _, _

[policy_effect]
e = priority(p.eft) || deny

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
```

policy.csv
```csv
p, 10, data1_deny_group, data1, read, deny
p, 10, data1_deny_group, data1, write, deny
p, 10, data2_allow_group, data2, read, allow
p, 10, data2_allow_group, data2, write, allow


p, 1, alice, data1, write, allow
p, 1, alice, data1, read, allow
p, 1, bob, data2, read, deny

g, bob, data2_allow_group
g, alice, data1_deny_group
```

request:
```
alice, data1, write --> true // for `p, 1, alice, data1, write, allow` has highest priority
bob, data2, read --> false
bob, data2, write --> true // for bob has role of `data2_allow_group` which has right to write data2, and there's no deny policy with higher priority 
```