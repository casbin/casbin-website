---
id: role-managers
title: Role Managers
---

The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don't put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as below. Any 3rd-party contribution on a new role manager is welcomed, please inform us and I will put it in this list:)

Role manager | Author | Description
----|----|----
[Default Role Manager (built-in)](https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go) | Casbin | Supports role hierarchy stored in Casbin policy
[Session Role Manager](https://github.com/casbin/session-role-manager) | [EDOMO Systems](https://github.com/edomosystems) | Supports role hierarchy stored in Casbin policy, with time-range-based sessions
[Okta Role Manager](https://github.com/casbin/okta-role-manager) | Casbin | Supports role hierarchy stored in [Okta](https://www.okta.com/)
[Auth0 Role Manager](https://github.com/casbin/auth0-role-manager) | Casbin | Supports role hierarchy stored in [Auth0](https://auth0.com/)'s [Authorization Extension](https://auth0.com/docs/extensions/authorization-extension/v2)

For developers: all role managers must implement the [RoleManager](https://github.com/casbin/casbin/blob/master/rbac/role_manager.go) interface. [Session Role Manager](https://github.com/casbin/session-role-manager) can be used as a reference implementation.
