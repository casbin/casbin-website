---
id: enforcers
title: Enforcers
---

`Enforcer` is the main structure in Casbin. It acts as an interface for users to make operations on policy rules and models.

## Supported enforcers
A complete list of Casbin enforcers is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and we will put it in this list:)

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Enforcer | Author | Description
----|------|------
[Enforcer](https://github.com/casbin/casbin/blob/master/enforcer.go)  | Casbin | `Enforcer` is the basic structure for users to interact with Casbin policies and models. You can find more details of `Enforcer`'s API at [here](https://casbin.org/docs/en/management-api).
[CachedEnforcer](https://github.com/casbin/casbin/blob/master/enforcer_cached.go) | Casbin | `CachedEnforcer` is based on `Enforcer`. It supports to cache the evaluation result of a request in memory by a map and clear caches in a specified expire time. Moreover, it is guaranted to be thread-safe by a Read-Write lock. You can use `EnableCache` to enable to cache evaluation results (default is enabled). `CachedEnforcer`'s other API is the same as `Enforcer`'s.
[DistributedEnforcer](https://github.com/casbin/casbin/blob/master/enforcer_distributed.go) | Casbin | `DistributedEnforcer` supports multiple instances in distributed clusters. It wraps `SyncedEnforcer` for dispatcher. You can find more details about dispather at [here](https://casbin.org/docs/en/dispatchers#distributedenforcer).
[SyncedEnforcer](https://github.com/casbin/casbin/blob/master/enforcer_synced.go) | Casbin | `SyncedEnforer` is based on `Enforcer` and provides synchronized access. It is thread-safe.

<!--END_DOCUSAURUS_CODE_TABS-->
