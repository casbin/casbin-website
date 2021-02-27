---
id: policy-subset-loading
title: Policy Subset Loading
---

Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.

To use filtered policies with a supported adapter, simply call the `LoadFilteredPolicy` method. The valid format for the filter parameter depends on the adapter used. To prevent accidental data loss, the `SavePolicy` method is disabled when a filtered policy is loaded.

For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. Any policy lines for domains other than `"domain1"` are omitted from the loaded policy:

```go
import "github.com/casbin/casbin"

enforcer := casbin.NewEnforcer()

adapter := fileadapter.NewFilteredAdapter("examples/rbac_with_domains_policy.csv")
enforcer.InitWithAdapter("examples/rbac_with_domains_model.conf", adapter)

filter := &fileadapter.Filter{
    P: []string{"", "domain1"},
    G: []string{"", "", "domain1"},
}
enforcer.LoadFilteredPolicy(filter)

// The loaded policy now only contains the entries pertaining to "domain1".
```

There's another method support subset loading feature: `LoadIncrementalFilteredPolicy`. `LoadIncrementalFilteredPolicy` is similar to LoadFilteredPolicy, but it does not clear previous loaded policy, only append.
