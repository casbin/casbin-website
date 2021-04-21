---
id: effector
title: Effector
---
## Effector

Effect is the result for a policy rule.  

And the Effector is the interface for Casbin effectors.

### `MergeEffects()`

MergeEffects merges all matching results collected by the enforcer into a single decision.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)
```
<!--END_DOCUSAURUS_CODE_TABS-->

While the values for the policy effect is ```(Allow, Indeterminate, Deny)```

```MergeEffects``` can judge the policy effect, which is stored in ```expr```, and process all the matching results, accordingly return a single effect and its index and the error as ```(Effect, explainIndex, error)```