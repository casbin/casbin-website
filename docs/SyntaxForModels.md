---
id: syntax-for-models
title: Syntax for Models
---

- A model CONF should have at least four sections: ``[request_definition], [policy_definition], [policy_effect], [matchers]``.

- If a model uses RBAC, it should also add the ``[role_definition]`` section.

- A model CONF can contain comments. The comments start with ``#``, and ``#`` will comment the rest of the line.

## Request definition

``[request_definition]`` is the definition for the access request. It defines the arguments in ``e.Enforce(...)`` function.

```ini
[request_definition]
r = sub, obj, act
```

``sub, obj, act`` represents the classic triple: accessing entity (Subject), accessed resource (Object) and the access method (Action). However, you can customize your own request form, like ``sub, act`` if you don't need to specify an particular resource, or ``sub, sub2, obj, act`` if you somehow have two accessing entities.

## Policy definition

``[policy_definition]`` is the definition for the policy. It defines the meaning of the policy. For example, we have the following model:

```ini
[policy_definition]
p = sub, obj, act
p2 = sub, act
```

And we have the following policy (if in a policy file)

```
p, alice, data1, read
p2, bob, write-all-objects
```

Each line in a policy is called a policy rule. Each policy rule starts with a ``policy type``, e.g., `p`, `p2`. It is used to match the policy definition if there are multiple definitions. The above policy shows the following binding. The binding can be used in the matcher.

```
(alice, data1, read) -> (p.sub, p.obj, p.act)
(bob, write-all-objects) -> (p2.sub, p2.act)
```

:::note
Currently only single policy definition ``p`` is supported. ``p2`` is yet not supported. Because for common cases, our user doesn't have the need to use multiple policy definitions. If your requirement has to use additional policy definitions, please send an issue about it.
:::

:::tip
The elements in a policy rule are always regarded as``string``. If you have any question about this, please see the discussion at: https://github.com/casbin/casbin/issues/113
:::

## Policy effect

``[policy_effect]`` is the definition for the policy effect. It defines whether the access request should be approved if multiple policy rules match the request. For example, one rule permits and the other denies.
    
```ini
[policy_effect]
e = some(where (p.eft == allow))
```

The above policy effect means if there's any matched policy rule of ``allow``, the final effect is ``allow`` (aka allow-override). ``p.eft`` is the effect for a policy, it can be ``allow`` or ``deny``. It's optional and the default value is ``allow``. So as we didn't specify it above, it uses the default value.

Another example for policy effect is:

```ini
[policy_effect]
e = !some(where (p.eft == deny))
```

It means if there's no matched policy rules of``deny``, the final effect is ``allow`` (aka deny-override). ``some`` means: if there exists one matched policy rule. ``any`` means: all matched policy rules (not used here). The policy effect can even be connected with logic expressions:

```ini
[policy_effect]
e = some(where (p.eft == allow)) && !some(where (p.eft == deny))
```

It means at least one matched policy rule of``allow``, and there is no matched policy rule of``deny``. So in this way, both the allow and deny authorizations are supported, and the deny overrides.

:::note
Although we designed the syntax of policy effect as above, the current implementations only use hard-coded policy effect, as we found there's no much need for that sort of flexibility. So for now, you must use one of the built-in policy effects instead of customizing your own one.
:::

The supported built-in policy effects are:

Policy effect | Meaning | Example
----|------|----
some(where (p.eft == allow)) | allow-override | [ACL, RBAC, etc.](/docs/en/supported-models#examples)
!some(where (p.eft == deny)) | deny-override | [Deny-override](/docs/en/supported-models#examples)
some(where (p.eft == allow)) && !some(where (p.eft == deny)) | allow-and-deny | [Allow-and-deny](/docs/en/supported-models#examples)
priority(p.eft) &#124;&#124; deny | priority | [Priority](/docs/en/supported-models#examples)

## Matchers

``[matchers]`` is the definition for policy matchers. The matchers are expressions. It defines how the policy rules are evaluated against the request.

```ini
[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act
```

The above matcher is the simplest, it means that the subject, object and action in a request should match the ones in a policy rule.

You can use arithmetic like ``+, -, *, /`` and logical operators like ``&&, ||, !`` in matchers.

:::note
Although it seems like there will be multiple matchers such as ``m1``, ``m2`` like other primitives, currently, we only support one matcher ``m``. You can always use the above logical operators to implement complicated logic judgment in one matcher. So we believe there is no need to support multiple matchers for now. Let me know if you have other opinions.
:::

### Speical Grammer

You could also use ``in``, the only operator with a text name. This operator checks the right-hand side array to see if it contains a value that is equal to the left-side value. Equality is determined by the use of the == operator, and this library doesn't check types between the values. Any two values, when cast to interface{}, and can still be checked for equality with == will act as expected. Note that you can use a parameter for the array, but it must be an ``[]interface{}``.

Also refer to [rbac_model_matcher_using_in_op](https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/rbac_model_matcher_using_in_op.conf), [keyget2_model](https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget2_model.conf) and [keyget_model](https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget_model.conf)

Example:
```ini
[request_definition]
r = sub, obj
...
[matchers]
m = r.sub.Name in (r.obj.Admins)
```

```go
e.Enforce(Sub{Name: "alice"}, Obj{Name: "a book", Admins: []interface{}{"alice", "bob"}})
```

### Expression evaluator

The matcher evaluation in Casbin is implemented by expression evaluators in each language. Casbin integrates their powers to provide the unified PERM language. Besides all the model syntax provided here, those expression evaluators may provide extra functionality, which may be not supported by another language or implementation. Use it at your own risk.

The expression evaluators used by each Casbin implementation are:

Implementation | Language | Expression evaluator
----|----|----
Casbin | Golang | https://github.com/Knetic/govaluate
jCasbin | Java | https://github.com/killme2008/aviator
Node-Casbin | Node.js | https://github.com/donmccurdy/expression-eval
PHP-Casbin | PHP | https://github.com/symfony/expression-language
PyCasbin | Python | https://github.com/danthedeckie/simpleeval
Casbin.NET | C# | https://github.com/davideicardi/DynamicExpresso
Casbin4D | Delphi | https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser
casbin-rs | Rust | https://github.com/jonathandturner/rhai

:::note
If you encounter performance issue about Casbin, it's probably caused by the low efficiency of the expression evaluator. You can both send issue to Casbin or the expression evaluator directly for advice to speed up. See [Benchmarks](/docs/en/benchmark) section for details.
:::
