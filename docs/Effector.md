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

In this example:  

* ```Effect``` is the final decision being merged by this function(Initialized as ```Indeterminate```).
* ```explainIndex``` is the index of ```eft``` which is ```Allow``` or ```Deny```.(Initialized as ```-1```)
* ```err``` is used to check if the effect is supported.
* ```expr``` is the policy effects stored as ```string```
* ```effects``` is the array of the Effect which can be ```Allow```, ```Indeterminate``` or ```Deny```
* ```matches``` is the array showing that if the result is matching the policy.
* ```policyIndex``` is the index of policy in the model.
* ```policyLength``` is the length of the policy.

The code above illustrates how can we pass the parameters to the `MergeEffects` function and the function will process the effects and matches based on the ```expr```  

To deploy an Effector, we can do this:

<!--DOCUSAURUS_CODE_TABS-->
<!--Go-->
```go
var e Effector
Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)
```
<!--END_DOCUSAURUS_CODE_TABS-->

The basic idea of the ```MergeEffects``` indicates that if the ```expr``` can match the results which means that the ```p_eft``` is ```allow```, then we can merge all effects at last. And if there are no deny rules are matched, then we allow.

:::note
If the ```expr``` can not match ```"priority(p_eft) || deny"``` and also the ```policyIndex``` is shorter than ```policyLength-1```, it will **short-circuit** some effects in the middle.
:::