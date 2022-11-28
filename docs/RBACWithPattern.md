---
id: rbac-with-pattern
title: RBAC with Pattern
---

## Quick Start

- use pattern in ``g(_,_)``

  ```go
  e, _ := NewEnforcer("./example.conf", "./example.csv")
  e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)
  ```

- use pattern with domain

  ```go
  e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)
  ```
- use all pattern

  just combined use of two APIs

As shown above, after you create the ``enforcer`` instance, you need to activate pattern matching via ``AddNamedMatchingFunc`` and ``AddNamedMatchingFunc`` API,  which determine how the pattern matches.

:::note
If you use the online editor, it specifies the pattern matching function in the lower left corner.
![editor-tips](/img/editor-tips.png)
:::

## Use pattern matching in RBAC

Sometimes, you want some subjects, object or domains/tenants with the specific pattern to be automatically granted to a role. Pattern matching functions in RBAC can help you do that. A pattern matching function shares the same parameters and return value as the previous [matcher function](/docs/en/syntax-for-models#functions-in-matchers).

The pattern matching function supports each parameter of g.

We know that normally RBAC is expressed as ``g(r.sub, p.sub)`` in matcher. Then we will use policy like:

```
p, alice, book_group, read
g, /book/1, book_group
g, /book/2, book_group
```

So ``alice`` can read all books including ``book 1`` and ``book 2``. But there can be thousands of books and it's very tedious to add each book to the book role (or group) with one ``g`` policy rule.

But with pattern matching functions, you can write the policy with only one line:

```
g, /book/:id, book_group
```

Casbin will automatically match ``/book/1`` and ``/book/2`` into pattern ``/book/:id`` for you. You only need to register the function with the enforcer like:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->

```go
e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)
```

<!--Node.js-->

```typescript
await e.addNamedMatchingFunc('g', Util.keyMatch2Func);
```

<!--END_DOCUSAURUS_CODE_TABS-->

When Using a pattern matching function in domains/tenants, You need to register the function to enforcer and model. 

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->

```go
e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)
```

<!--Node.js-->

```typescript
await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);
```

<!--END_DOCUSAURUS_CODE_TABS-->

If you don't understand what `g(r.sub, p.sub, r.dom)` means, please read [rbac-with-domains](/docs/en/rbac-with-domains). In short, `g(r.sub, p.sub, r.dom)` will check whether the user `r.sub` has a role `p.sub` in the domain `r.dom`. So this is how the matcher work. You can see the full example [here](https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307). 

Apart from the pattern matching syntax above, we can also use pure domain pattern.

For example,  if we want ```sub``` to have access in different domains, ```domain1``` and ```domain2```, we can use the pure domain pattern:

```
p, admin, domain1, data1, read
p, admin, domain1, data1, write
p, admin, domain2, data2, read
p, admin, domain2, data2, write

g, alice, admin, *
g, bob, admin, domain2
```

In this example, we want ```alice``` to read and write ```data``` in domain1 and domain2, pattern matching ```*``` in ```g``` makes ```alice``` have the access to two domains.

By using pattern matching, especially in the scenarios which is more complicated and there are a lot of domains or objects we need to take into consideration, we can implement the ```policy_definition``` more elegant and effective.
