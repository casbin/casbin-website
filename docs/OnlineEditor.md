---
id: online-editor
title: Online Editor
---

You can also use the online editor (https://casbin.org/en/editor/) to write your Casbin model and policy in your web browser. It provides functionality such as ``syntax highlighting`` and ``code completion``, just like an IDE for a programming language.

## Use Pattern
If you use ``RBAC with pattern`` or ``RBAC with all pattern``, it specifies the pattern matching function in the lower left corner.
![editor-tips](https://casbin.org/img/editor-tips.png). If you want to write the equivalent code, you need to specify the pattern matching function through the relevant api. See [RBAC with Pattern](/docs/en/rbac-with-pattern)

:::note
The editor is based on [node-casbin](https://github.com/casbin/node-casbin). Due to the synchronization delay between different language of casbin, the authentication result of the ``editor`` may be different from the authentication result of the casbin you are using. If so, please submit issues to the casbin repository you are using.
:::