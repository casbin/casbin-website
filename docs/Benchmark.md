---
id: benchmark
title: Benchmarks
---

The overhead of policy enforcement is benchmarked in [model_b_test.go](https://github.com/casbin/casbin/blob/master/model_b_test.go). The testbed is:

```
Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)
```

The benchmarking result of ``go test -bench=. -benchmem`` is as follows (op = an ``Enforce()`` call, ms = millisecond, KB = kilo bytes):

Test case | Rule size | Time overhead (ms/op) | Memory overhead (KB)
----|------|------|----
ACL | 2 rules (2 users) | 0.015493 | 5.649
RBAC | 5 rules (2 users, 1 role) | 0.021738 | 7.522
RBAC (small) | 1100 rules (1000 users, 100 roles) | 0.164309 | 80.620
RBAC (medium) | 11000 rules (10000 users, 1000 roles) | 2.258262 | 765.152
RBAC (large) | 110000 rules (100000 users, 10000 roles) | 23.916776 | 7,606
RBAC with resource roles | 6 rules (2 users, 2 roles) | 0.021146 | 7.906
RBAC with domains/tenants | 6 rules (2 users, 1 role, 2 domains) | 0.032696 | 10.755
ABAC | 0 rule (0 user) | 0.007510 | 2.328
RESTful | 5 rules (3 users) | 0.045398 | 91.774
Deny-override | 6 rules (2 users, 1 role) | 0.023281 | 8.370
Priority | 9 rules (2 users, 2 roles) | 0.016389 | 5.313
