---
id: dispatchers
title: Dispatchers
---

Dispatcher provide a way to synchronize incremental changes of policy. It should be based on consistency algorithms such as raft to ensure the consistency of all enforcer instances. Through dispatcher users can easily establish distributed clusters.

The dispatcher's method is divided into two parts. The first is the method combined with casbin. These methods should be called inside casbin. Users can use the more complete api provided by casbin itself. 

The other part is the method defined by the dispatcher itself, including the dispatcher initialization method, and different functions provided by different algorithms, such as dynamic membership, config changes etc.

:::note
we hope dispatcher just ensure the consistency of Casbin enforcer at runtime. So if the policy is inconsistent when initialization, the dispatcher will not work properly. Users need to ensure that the state of all instances is consistent before using dispatcher. 
:::

A complete list of Casbin dispatchers is provided as below. Any 3rd-party contribution on a new dispatcher is welcomed, please inform us and we will put it in this list:)
<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Dispatcher | Type | Author | Description
----|------|----|----
[Etcd Raft Dispatcher](https://github.com/casbin/casbin-raft) | raft | Casbin | Dispatcher based on [etcd/raft](https://github.com/coreos/etcd/raft)


<!--END_DOCUSAURUS_CODE_TABS-->

### SyncedEnforcer

SyncedEnforcer wraps Enforcer and provides synchronized access. SyncedEnforcer can ensure the consistency of multiple Casbin instances in distributed situations.

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
    // Must guarantee that the initial state of all instances is the same, 
    e, _ := casbin.NewSyncedEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")

    // Need to provide the ID and URL of all nodes in the cluster. 
    peers := make(map[uint64]string)
    peers[1] = "127.0.0.1:8001"
    peers[2] = "127.0.0.1:8002"
    d := casbinraft.NewDispathcer(1, peers)

    e.SetDispathcer(d)
    e.EnableautoNotifyDispatcher(true)

    go d.Start()

    // Then you can continue to use the enforcer normally, and when the policy changes, dispathcer will automatically synchronize all clusters
    e.AddPolicy("alice", "data2", "read") 
```
<!--END_DOCUSAURUS_CODE_TABS-->

### DistributedEnforcer

DistributedEnforcer wraps SyncedEnforcer for dispatcher.

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
    e, _ := casbin.NewDistributedEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")
```
<!--END_DOCUSAURUS_CODE_TABS-->


