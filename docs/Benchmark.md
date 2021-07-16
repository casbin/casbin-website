---
id: benchmark
title: Benchmarks
---

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->

<br/>
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

<!--CPP-->

<br/>

The overhead of policy enforcement of [Casbin CPP](https://github.com/casbin/casbin-cpp) is benchmarked in 
[`tests/benchmarks`](https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks) directory with the help of 
[Google's benchmarking tool](https://github.com/google/benchmark). The testbed for these benchmarks is:
```
Apple M1 (2020) SOC @ 3.2 GHz, 8 cores, 16 threads
```

Here is the benchmarking result of executing `casbin_benchmark` target built in `Release` configuration (op = an `enforce()` call, ns = nanoseconds):

Test case | Rule size | Time overhead (ns/op)
----|------|------
ACL | 2 rules (2 users) | 95.6
RBAC | 5 rules (2 users, 1 role) | 95.6
RBAC (small) | 1100 rules (1000 users, 100 roles) | 110
RBAC (medium) | 11000 rules (10000 users, 1000 roles) | 119
RBAC (large) | 110000 rules (100000 users, 10000 roles) | 90.3217
RBAC with resource roles | 6 rules (2 users, 2 roles) | 96.0
RBAC with domains/tenants | 6 rules (2 users, 1 role, 2 domains) | 134
ABAC | 0 rule (0 user) | NA
RESTful | 5 rules (3 users) | NA
Deny-override | 6 rules (2 users, 1 role) | 96.2
Priority | 9 rules (2 users, 2 roles) | 96.1

<!--Lua (JIT)-->

<br/>
[Lua Casbin's](https://github.com/casbin/lua-casbin) overhead of policy enforcement is benchmarked in [bench.lua](https://github.com/casbin/lua-casbin/blob/master/bench.lua). The testbed was a Ubuntu VM with the CPU:
```
AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads
```

The benchmarking result of ``luajit bench.lua`` is as follows (op = an ``enforce()`` call, ms = millisecond):

Test case | Rule size | Time overhead (ms/op)
----|------|------
ACL | 2 rules (2 users) | 0.0533
RBAC | 5 rules (2 users, 1 role) | 0.0972
RBAC (small) | 1100 rules (1000 users, 100 roles) | 0.8598
RBAC (medium) | 11000 rules (10000 users, 1000 roles) | 8.6848
RBAC (large) | 110000 rules (100000 users, 10000 roles) | 90.3217
RBAC with resource roles | 6 rules (2 users, 2 roles) | 0.1124
RBAC with domains/tenants | 6 rules (2 users, 1 role, 2 domains) | 0.1978
ABAC | 0 rule (0 user) | 0.0305
RESTful | 5 rules (3 users) | 0.1085
Deny-override | 6 rules (2 users, 1 role) | 0.1934
Priority | 9 rules (2 users, 2 roles) | 0.1437

<!--END_DOCUSAURUS_CODE_TABS-->
