---
id: performance
title: Performance Optimization
---

When applied in a production environment with millions of users or permissions, you may encounter performance downgrade in Casbin enforcement, there are usually two causes:

#### High Volume Traffic

The number of coming requests per second is too large, e.g., 10,000 request/s for a single Casbin instance. In such case, a single Casbin instance is usually not enough to handle all the requests. There are 2 possible solutions:

1. Use multi-threading to enable multiple Casbin instances, so you can fully utilize all the cores in the machine. See details at: [Multi-threading](/docs/multi-threading).

2. Deploy Casbin instances to a cluster (multiple machines). Use Watcher to guarantee all Casbin instances are consistent. See details at: [Watchers](/docs/watchers).

:::note
You can use the above methods both at the same time, e.g., deploy Casbin to a 10-machine cluster. Each machine has 5 threads simultaneously to serve Casbin enforcement requests.
:::

#### High Number of Policy Rules

Millions of policy rules may be required in a cloud or multi-tenant environment. Each enforcement call or even loading the policy rules at the initial time is very slow. Such cases can usually be mitigated in several ways:

1. Your Casbin model or policy is not well-designed. A well-written model and policy will abstract out the duplicated logic for each user/tenant and reduce the number of rules to a very small level (< 100): e.g., you can share some default rules across all tenants and let users customize their rules later. Customized rules can override the default rules. If you still have question, please send GitHub issue to the Casbin repos.

2. Do sharding to let a Casbin enforcer only load a small set of policy rules, e.g., enforcer_0 only serves for tenant_0 to tenant_99, enforcer_1 only serves for tenant_100 to tenant_199. To load only a subset of all policy rules, see details at: [Policy Subset Loading](/docs/policy-subset-loading).

3. Grant permissions to RBAC roles instead of users directly. Casbin's RBAC is implemented by a role inheritance tree (as a cache). So given a user like Alice, Casbin only uses O(1) time to query the RBAC tree for role-user relationship and do enforcement. If your g rules don't change often, then the RBAC tree won't need to update. See details at this dicussion: https://github.com/casbin/casbin/issues/681#issuecomment-763801583

:::note
You can try the above methods all at the same time.
:::
