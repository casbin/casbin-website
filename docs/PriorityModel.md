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



The smaller priority value will have a higher priority. If there's a non-numerical character in priority, it will be in the last, rather than throw an error.

The priority token name in policy definition is  "priority" conventionally. A customized one requires invoking `e.SetFieldIndex()` and reload policies (full example on [TestCustomizedFieldIndex](https://github.com/casbin/casbin/pull/1044) ).

model.conf:

```ini
[policy_definition]
p = customized_priority, sub, obj, act, eft

```

Golnag code example:

```golang
	e, _ := NewEnforcer("./example/priority_model_explicit_customized.conf",
		"./example/priority_policy_explicit_customized.csv")

	// Due to the customized priority token, the enforcer failed to handle the priority.
	ok, err := e.Enforce("bob", "data2", "read") // the result will be `true, nil`

	// set PriorityIndex and reload
	e.SetFieldIndex("p", constant.PriorityIndex, 0)
	err := e.LoadPolicy()
	if err != nil {
		log.Fatalf("LoadPolicy: %v", err)
	}
	ok, err := e.Enforce("bob", "data2", "read") // the result will be `false, nil`
```

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
## Load Policy with Priority Based on Role and User Hierarchy

The inherited structure of roles and users can only be multiple trees, not graphs. If one user has multiple roles,you have to make sure the user has the same level in different trees. If two roles have the same level,the policy(the role corresponding) appeared earlier has higher priority. more details also see [casbin#833](https://github.com/casbin/casbin/pull/833)、[casbin#831](https://github.com/casbin/casbin/issues/831)

model.conf:
```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act, eft

[role_definition]
g = _, _

[policy_effect]
e = subjectPriority(p.eft) || deny

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act 
```

policy.csv
```csv
p, root, data1, read, deny
p, admin, data1, read, deny

p, editor, data1, read, deny
p, subscriber, data1, read, deny

p, jane, data1, read, allow
p, alice, data1, read, allow

g, admin, root

g, editor, admin
g, subscriber, admin

g, jane, editor
g, alice, subscriber 
```

Request:
```
jane, data1, read --> true // jane is at the bottom,so priority is higher than editor, admin and root
alice, data1, read --> true
```

 The role hierarchy like this: 
```
role: root
 └─ role: admin
    ├─ role editor
    │  └─ user: jane
    │
    └─ role: subscriber
       └─ user: john
```

The priority automatically like this: 

```
role: root                 # auto priority: 30
 └─ role: admin            # auto priority: 20
     ├─ role: editor       # auto priority: 10
     └─ role: subscriber   # auto priority: 10
```
