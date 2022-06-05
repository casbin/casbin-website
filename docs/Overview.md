---
id: overview
title: Overview
---

Casbin is a powerful and efficient open-source access control library that supports various 
[access control models](https://en.wikipedia.org/wiki/Access_control#Access_control_models)
for enforcing authorization across the board.

Enforcing a set of rules is as simple as listing down subjects, objects and the
desired allowed action (or any other format as per your needs) in a *_policy_* file.
This is synonymous across all flows Casbin is used in. The developer/administrator has the 
complete control over the layout, execution and conditions for authorization 
which is set via the *_model_* file. Casbin provides an *_Enforcer_* for 
validating an incoming request based on the policy and model files given to the Enforcer.

## Languages supported by Casbin:

[![golang](https://casbin.org/img/langs/golang.png)](https://github.com/casbin/casbin) | [![java](https://casbin.org/img/langs/java.png)](https://github.com/casbin/jcasbin) | [![nodejs](https://casbin.org/img/langs/nodejs.png)](https://github.com/casbin/node-casbin) | [![php](https://casbin.org/img/langs/php.png)](https://github.com/php-casbin/php-casbin)
----|----|----|----
[Casbin](https://github.com/casbin/casbin) | [jCasbin](https://github.com/casbin/jcasbin) | [node-Casbin](https://github.com/casbin/node-casbin) | [PHP-Casbin](https://github.com/php-casbin/php-casbin)
production-ready | production-ready | production-ready | production-ready

[![python](https://casbin.org/img/langs/python.png)](https://github.com/casbin/pycasbin) | [![dotnet](https://casbin.org/img/langs/dotnet.png)](https://github.com/casbin/Casbin.NET) | [![c++](https://casbin.org/img/langs/cpp.png)](https://github.com/casbin/casbin-cpp) | [![rust](https://casbin.org/img/langs/rust.png)](https://github.com/casbin/casbin-rs)
----|----|----|----
[PyCasbin](https://github.com/casbin/pycasbin) | [Casbin.NET](https://github.com/casbin/Casbin.NET) | [Casbin-CPP](https://github.com/casbin/casbin-cpp) | [Casbin-RS](https://github.com/casbin/casbin-rs)
production-ready | production-ready | production-ready | production-ready

### Feature set for different languages

We are always working our best to make Casbin have the same set of features for all 
languages. But the reality is not that beautiful.

Feature                 | Go   | Java | Node.js | PHP  | Python | C#   | Delphi | Rust | C++ | Lua  |Dart  | Elixir
:---                    | :--: | :--: | :--:    | :--: | :--:   | :--: | :--:   | :--: | :--:| :--: | :--: | :--: 
Enforcement             | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ✅    | ✅
RBAC                    | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ✅    | ✅
ABAC                    | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ✅    | ✅
Scaling ABAC (`eval()`) | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ❌     | ✅    | ✅  | ✅   | ✅    | ✅
Adapter                 | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ✅    | ❌
Management API          | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ✅    | ✅
RBAC API                | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ✅    | ✅
Batch API               | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ❌     | ✅    | ✅  | ✅   | ❌    | ❌
Filtered Adapter        | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ❌     | ✅    | ✅  | ✅   | ❌    | ❌
Watcher                 | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ✅     | ✅    | ✅  | ✅   | ❌    | ❌
Role Manager            | ✅   | ✅    | ✅      | ✅   | ✅      | ✅   | ❌     | ✅    | ✅  | ✅   | ✅    | ❌
Multi-Threading         | ✅   | ✅    | ✅      | ❌   | ✅      | ✅   | ❌     | ✅    | ❌  | ❌   | ❌    | ❌
'in' of matcher         | ✅   | ✅    | ❌      | ✅   | ✅      | ❌   | ✅     | ❌    | ❌  | ❌   | ✅    | ✅

**Note**- ✅ for Watcher or Role Manager 
only means having the interface in the core library. It is not indicative of whether 
there is a watcher or role manager implementation available.

## What is Casbin?

What Casbin does:

1. enforce the policy in the classic ``{subject, object, action}`` form or a customized form as you defined, both allow and deny authorizations are supported.
2. handle the storage of the access control model and its policy.
3. manage the role-user mappings and role-role mappings (aka role hierarchy in RBAC).
4. support built-in superuser like ``root`` or ``administrator``. A superuser can do anything without explicit permissions.
5. multiple built-in operators to support the rule matching. For example, ``keyMatch`` can map a resource key ``/foo/bar`` to the pattern ``/foo*``.

What Casbin does NOT do:

1. authentication (aka verify ``username`` and ``password`` when a user logs in)
2. manage the list of users or roles. I believe it's more convenient for the project itself to manage these entities. Users usually have their passwords, and Casbin is not designed as a password container. However, Casbin stores the user-role mapping for the RBAC scenario.
