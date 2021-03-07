---
id: rbac-96
title: Casbin RBAC and RBAC96
---

## Casbin RBAC and RBAC96

In this document, we'll compare Casbin RBAC with [RBAC96](https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf).

Casbin RBAC supports almost all the features of RBAC96, and added new features above that.

- RBAC0: fully supported
- RBAC1: fully supported
- RBAC2, 3: mutually exclusive handling is supported ([like this](https://casbin.org/docs/en/syntax-for-models#policy-effect)), but quantitative limits are not

## Difference between Casbin RBAC and RBAC96

1. In Casbin, the distinction between User and Role is not clear

   In Casbin, both the User and the Role are treated as strings. If you wrote a policy file like this:

   ```
   p, admin, book, read
   p, alice, book, read
   g, amber, admin
   ```

   and call method `GetAllSubjects()` like this (`e` is an instance of Casbin Enforcer):

   ```go
   e.GetAllSubjects()
   ```

   then you will get the return value below:

   ``` go
   [admin alice]
   ```

   Because in Casbin, Subjects included Users and Roles.

   However, if you call method `GetAllRoles()` like this:

   ``` go
   e.GetAllRoles()
   ```

   then you will get the return value below:

   ```
   [admin]
   ```

   And now you know there is a distinction between Users and Roles in Casbin, but is not as sharp as in RBAC96.

2. Casbin RBAC provides more permissions than RBAC96

   Only 7 permissions are defined in RBAC96: read, write, append, execute, credit, debit, inquiry.

   However, in Casbin, we treat permissions as strings. This way, you can create some permissions suit you better.

3. Casbin RBAC supports domains

   In Casbin, you can do authorizations by domains. This feature made your Access Control Model more flexible.