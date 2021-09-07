---
id: policy-storage
title: Policy Storage
---

In Casbin, the policy storage is implemented as an [adapter](/docs/en/adapters). 

## Load policy from .CSV file

This is the most common way to use Casbin. It's easy to understand for beginners and convenient for sharing when you ask Casbin team for help.

The content of the `.CSV` file [examples/rbac_policy.csv](https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv):

```
p, alice, data1, read
p, bob, data2, write
p, data2_admin, data2, read
p, data2_admin, data2, write
g, alice, data2_admin
```

:::note

If your file contains commas``,`` , you should wrap it in double quotes, for example:

```
p, alice, "data1,data2", read	--correct
p, alice, data1,data2, read		--incorrect ("data1,data2" should be a whole)
```

If your file contains commas``,`` and double quotes``"``, you should enclose the field in double quotes and double any embedded double quotes.

```
p, alice, data, "r.act in (""get"", ""post"")"		--correct
p, alice, data, "r.act in ("get", "post")"			--incorrect (should use "" to escape "")
```

Related issue: [casbin#886](https://github.com/casbin/casbin/issues/886)

:::

## Adapter API

Method | Type | Description
----|------|----
LoadPolicy() | basic | Load all policy rules from the storage
SavePolicy() | basic | Save all policy rules to the storage
AddPolicy() | optional | Add a policy rule to the storage
RemovePolicy() | optional | Remove a policy rule from the storage
RemoveFilteredPolicy() | optional | Remove policy rules that match the filter from the storage

## Database Storage Format

**your policy file**

```
p, data2_admin, data2, read
p, data2_admin, data2, write
g, alice, admin
```

**corresponding database structure (Such as MySQL)**

| id   | ptype | v0          | v1    | v2    | v3   | v4   | v5   |
| ---- | ----- | ----------- | ----- | ----- | ---- | ---- | ---- |
| 1    | p     | data2_admin | data2 | read  |      |      |      |
| 2    | p     | data2_admin | data2 | write |      |      |      |
| 3    | g     | alice       | admin |       |      |      |      |

**The meaning of each column**

- ``id``: Only exists in the database as the primary key. Not as part of the ``casbin policy``. The way it is generated depends on the specific adapter

- ``ptype``: It corresponds to ``p``, ``g``, ``g2``, etc.
- ``v0-v5``: The column names have no specific meaning, and correspond to the values in the ``policy csv`` from left to right. The number of columns depends on how many you define yourself. In theory, there can be an infinite number of columns. But generally only **6** columns are implemented in adapter. If it is not enough for you, please submit an issue to the corresponding adapter repository. 

## Adapter Details

More details about the use of adapter api and database table structure design,  Please go to:  [/docs/en/adapters](/docs/en/adapters)
