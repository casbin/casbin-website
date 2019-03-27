---
id: watchers
title: Watchers
---

We support to use distributed messaging systems like [etcd](https://github.com/coreos/etcd) to keep consistence between multiple Casbin enforcer instances. So our users can concurrently use multiple Casbin enforcers to handle large number of permission checking requests.

Similar to policy storage adapters, we don't put watcher code in the main library. Any support for a new messaging system should be implemented as a watcher. A complete list of Casbin watchers is provided as below. Any 3rd-party contribution on a new watcher is welcomed, please inform us and I will put it in this list:)

Watcher | Type | Author | Description
----|------|----|----
[Etcd Watcher](https://github.com/casbin/etcd-watcher) | KV store | Casbin | Watcher for [etcd](https://github.com/coreos/etcd)
[NATS Watcher](https://github.com/Soluto/casbin-nats-watcher) | Messaging system | [Soluto](https://github.com/Soluto) | Watcher for [NATS](https://nats.io/)
[ZooKeeper Watcher](https://github.com/grepsr/casbin-zk-watcher) | KV store  | [Grepsr](https://github.com/grepsr) | Watcher for [Apache ZooKeeper](https://zookeeper.apache.org/)
[Redis Watcher](https://github.com/billcobbler/casbin-redis-watcher) | KV store  | [@billcobbler](https://github.com/billcobbler) | Watcher for [Redis](http://redis.io/)
[GCP Pub/Sub Watcher](https://github.com/livingpackets/cloudpubsub-watcher) | Messaging system  | [LivingPackets](https://github.com/livingpackets) | Watcher for [Google Cloud Platform PUB/SUB](https://cloud.google.com/pubsub/)
