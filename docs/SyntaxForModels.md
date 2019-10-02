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

**Note**: Currently only single policy definition ``p`` is supported. ``p2`` is yet not supported. Because for common cases, our user doesn't have the need to use multiple policy definitions. If your requirement has to use additional policy definitions, please send an issue about it.

**Note 2**: The elements in a policy rule are always regarded as``string``. If you have any question about this, please see the discussion at: https://github.com/casbin/casbin/issues/113

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

Note: although we designed the syntax of policy effect as above, the current implementations only use hard-coded policy effect, as we found there's no much need for that sort of flexibility. So for now, you must use one of the built-in policy effects instead of customizing your own one.

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

**Note**: Although it seems like there will be multiple matchers such as ``m1``, ``m2`` like other primitives, currently, we only support one matcher ``m``. You can always use the above logical operators to implement complicated logic judgment in one matcher. So we believe there is no need to support multiple matchers for now. Let me know if you have other opinions.
