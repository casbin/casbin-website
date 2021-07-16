---
id: supported-models
title: Supported Models
---

1. [**ACL (Access Control List)**](https://en.wikipedia.org/wiki/Access_control_list)
2. **ACL with [superuser](https://en.wikipedia.org/wiki/Superuser)**
3. **ACL without users**: especially useful for systems that don't have authentication or user log-ins.
3. **ACL without resources**: some scenarios may target for a type of resources instead of an individual resource by using permissions like ``write-article``, ``read-log``. It doesn't control the access to a specific article or log.
4. **[RBAC (Role-Based Access Control)](https://en.wikipedia.org/wiki/Role-based_access_control)**
5. **RBAC with resource roles**: both users and resources can have roles (or groups) at the same time.
6. **RBAC with domains/tenants**: users can have different role sets for different domains/tenants.
7. **[ABAC (Attribute-Based Access Control)](https://en.wikipedia.org/wiki/Attribute-Based_Access_Control)**: syntax sugar like ``resource.Owner`` can be used to get the attribute for a resource.
8. **[RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer)**: supports paths like ``/res/*``, ``/res/:id`` and HTTP methods like ``GET``, ``POST``, ``PUT``, ``DELETE``.
9. **Deny-override**: both allow and deny authorizations are supported, deny overrides the allow.
10. **Priority**: the policy rules can be prioritized like firewall rules.

## Examples

Model | Model file | Policy file
----|------|----
ACL | [basic_model.conf](https://github.com/casbin/casbin/blob/master/examples/basic_model.conf) | [basic_policy.csv](https://github.com/casbin/casbin/blob/master/examples/basic_policy.csv)
ACL with superuser | [basic_with_root_model.conf](https://github.com/casbin/casbin/blob/master/examples/basic_with_root_model.conf) | [basic_policy.csv](https://github.com/casbin/casbin/blob/master/examples/basic_policy.csv)
ACL without users | [basic_without_users_model.conf](https://github.com/casbin/casbin/blob/master/examples/basic_without_users_model.conf) | [basic_without_users_policy.csv](https://github.com/casbin/casbin/blob/master/examples/basic_without_users_policy.csv)
ACL without resources | [basic_without_resources_model.conf](https://github.com/casbin/casbin/blob/master/examples/basic_without_resources_model.conf) | [basic_without_resources_policy.csv](https://github.com/casbin/casbin/blob/master/examples/basic_without_resources_policy.csv)
RBAC | [rbac_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf)  | [rbac_policy.csv](https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv)
RBAC with resource roles | [rbac_with_resource_roles_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf)  | [rbac_with_resource_roles_policy.csv](https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_policy.csv)
RBAC with domains/tenants | [rbac_with_domains_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf)  | [rbac_with_domains_policy.csv](https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_policy.csv)
ABAC | [abac_model.conf](https://github.com/casbin/casbin/blob/master/examples/abac_model.conf)  | N/A
RESTful | [keymatch_model.conf](https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf)  | [keymatch_policy.csv](https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv)
Deny-override | [rbac_with_not_deny_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_not_deny_model.conf)  | [rbac_with_deny_policy.csv](https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_policy.csv)
Allow-and-deny | [rbac_with_deny_model.conf](https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_model.conf)  | [rbac_with_deny_policy.csv](https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_policy.csv)
Priority | [priority_model.conf](https://github.com/casbin/casbin/blob/master/examples/priority_model.conf)  | [priority_policy.csv](https://github.com/casbin/casbin/blob/master/examples/priority_policy.csv)
Explicit Priority | [priority_model_explicit](https://github.com/casbin/casbin/blob/master/examples/priority_model_explicit.conf) | [priority_policy_explicit.csv](https://github.com/casbin/casbin/blob/master/examples/priority_policy_explicit.csv)
Subject-Priority | [subject_priority_model.conf](https://github.com/casbin/casbin/blob/master/examples/subject_priority_model.conf) | [subject_priority_policyl.csv](https://github.com/casbin/casbin/blob/master/examples/subject_priority_policy.csv) 

