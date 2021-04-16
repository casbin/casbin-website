---
id: superadmin
title: Super Admin
---

Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc. The detailed example is as follows:
```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"
```
It illustrates that as for the defined ```request_definition```, ```policy_definition```, ```policy_effect``` and ```matchers```, Casbin judges if the request can match the policy, or most importantly, if the ```sub``` is root. Once the judgment is correct, the authorization then is allowed, and the user has permission to do everything.  
Just like the root of Linux systems, after the users are authorized as root, then we have the permissions to access all the files and settings. So if we want ```sub``` to have the full access to the whole system, we can let it become the super admin, then the ```sub``` has the permission to do everything. 