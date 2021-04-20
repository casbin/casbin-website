---
id: effector-api
title: Effector API
---
## Effector API

Effect is the result for a policy rule.  

And the Effector is the interface for Casbin effectors.

### `MergeEffects()`

MergeEffects merges all matching results collected by the enforcer into a single decision.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e.MergeEffects(e, 6, err)
```
<!--END_DOCUSAURUS_CODE_TABS-->
