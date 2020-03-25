---
id: management-api
title: Management API
---

The primitive API that provides full support for Casbin policy management.

## Reference

global variable `e` is Enforcer instance.

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e := NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")
```

<!--Node.js-->
```typescript
const e = await newEnforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv')
```

<!--PHP-->
```php
$e = new Enforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv');
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllSubjects()`

GetAllSubjects gets the list of subjects that show up in the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allSubjects := e.GetAllSubjects()
```

<!--Node.js-->
```typescript
const allSubjects = await e.getAllSubjects()
```

<!--PHP-->
```php
$allSubjects = $e->getAllSubjects();
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllNamedSubjects()`

GetAllNamedSubjects gets the list of subjects that show up in the current named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allNamedSubjects := e.GetAllNamedSubjects("p")
```

<!--Node.js-->
```typescript
const allNamedSubjects = await e.getAllNamedSubjects('p')
```

<!--PHP-->
```php
$allNamedSubjects = $e->getAllNamedSubjects("p");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllObjects()`

GetAllObjects gets the list of objects that show up in the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allObjects := e.GetAllObjects()
```

<!--Node.js-->
```typescript
const allObjects = await e.getAllObjects()
```

<!--PHP-->
```php
$allObjects = $e->getAllObjects();
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllNamedObjects()`

GetAllNamedObjects gets the list of objects that show up in the current named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allNamedObjects := e.GetAllNamedObjects("p")
```

<!--Node.js-->
```typescript
const allNamedObjects = await e.getAllNamedObjects('p')
```

<!--PHP-->
```php
$allNamedObjects = $e->getAllNamedObjects("p");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllActions()`

GetAllActions gets the list of actions that show up in the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allActions := e.GetAllActions()
```

<!--Node.js-->
```typescript
const allActions = await e.getAllActions()
```

<!--PHP-->
```php
$allActions = $e->getAllActions();
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllNamedActions()`

GetAllNamedActions gets the list of actions that show up in the current named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allNamedActions := e.GetAllNamedActions("p")
```

<!--Node.js-->
```typescript
const allNamedActions = await e.getAllNamedActions('p')
```

<!--PHP-->
```php
$allNamedActions = $e->getAllNamedActions("p");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllRoles()`

GetAllRoles gets the list of roles that show up in the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```
allRoles = e.GetAllRoles()

```

<!--Node.js-->
```typescript
const allRoles = await e.getAllRoles()
```

<!--PHP-->
```php
$allRoles = $e->getAllRoles();
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetAllNamedRoles()`

GetAllNamedRoles gets the list of roles that show up in the current named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
allNamedRoles := e.GetAllNamedRoles("g")

```

<!--Node.js-->
```typescript
const allNamedRoles = await e.getAllNamedRoles('g')
```

<!--PHP->
```php
$allNamedRoles = $e->getAllNamedRoles('g');
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetPolicy()`

GetPolicy gets all the authorization rules in the policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
policy = e.GetPolicy()
```

<!--Node.js-->
```typescript
const policy = await e.getPolicy()
```

<!--PHP-->
```php
$policy = $e->getPolicy();
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `GetFilteredPolicy()`

GetFilteredPolicy gets all the authorization rules in the policy, field filters can be specified.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
filteredPolicy := e.GetFilteredPolicy(0, "alice")
```

<!--Node.js-->
```typescript
const filteredPolicy = await e.getFilteredPolicy(0, 'alice')
```

<!--PHP-->
```php
$filteredPolicy = $e->getFilteredPolicy(0, "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetNamedPolicy()`

GetNamedPolicy gets all the authorization rules in the named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
namedPolicy := e.GetNamedPolicy("p")
```

<!--Node.js-->
```typescript
const namedPolicy = await e.getNamedPolicy('p')
```

<!--PHP-->
```php
$namedPolicy = $e->getNamedPolicy("p");
```

<!--END_DOCUSAURUS_CODE_TABS-->


### `GetFilteredNamedPolicy()`

GetFilteredNamedPolicy gets all the authorization rules in the named policy, field filters can be specified.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")
```

<!--Node.js-->
```typescript
const filteredNamedPolicy = await e.getFilteredNamedPolicy('p', 0, 'bob')
```

<!--PHP-->
```php
$filteredNamedPolicy = $e->getFilteredNamedPolicy("p", 0, "bob");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetGroupingPolicy()`

GetGroupingPolicy gets all the role inheritance rules in the policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
groupingPolicy := e.GetGroupingPolicy()
```

<!--Node.js-->
```typescript
const groupingPolicy = await e.getGroupingPolicy()
```

<!--PHP-->
```php
$groupingPolicy = $e->getGroupingPolicy();
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetFilteredGroupingPolicy()`

GetFilteredGroupingPolicy gets all the role inheritance rules in the policy, field filters can be specified.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")

```

<!--Node.js-->
```typescript
const filteredGroupingPolicy = await e.getFilteredGroupingPolicy(0, 'alice')
```

<!--Go-->
```go
$filteredGroupingPolicy = $e->getFilteredGroupingPolicy(0, "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetNamedGroupingPolicy()`

GetNamedGroupingPolicy gets all the role inheritance rules in the policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
namedGroupingPolicy := e.GetNamedGroupingPolicy("g")
```

<!--Node.js-->
```typescript
const namedGroupingPolicy = await e.getNamedGroupingPolicy('g')
```

<!--PHP-->
```php
$namedGroupingPolicy = $e->getNamedGroupingPolicy("g");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `GetFilteredNamedGroupingPolicy()`

GetFilteredNamedGroupingPolicy gets all the role inheritance rules in the policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")
```

<!--Node.js-->
```typescript
const namedGroupingPolicy = await e.getFilteredNamedGroupingPolicy('g', 0, 'alice')
```

<!--PHP-->
```php
$namedGroupingPolicy = $e->getFilteredNamedGroupingPolicy("g", 0, "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `HasPolicy()`

HasPolicy determines whether an authorization rule exists.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
hasPolicy := e.HasPolicy("data2_admin", "data2", "read")
```

<!--Node.js-->
```typescript
const hasPolicy = await e.hasPolicy('data2_admin', 'data2', 'read')
```

<!--PHP-->
```php
$hasPolicy = $e->hasPolicy('data2_admin', 'data2', 'read');
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `HasNamedPolicy()`

HasNamedPolicy determines whether a named authorization rule exists.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
hasNamedPolicy := e.HasNamedPolicy("p", "data2_admin", "data2", "read")
```

<!--Node.js-->
```typescript
const hasNamedPolicy = await e.hasNamedPolicy('p', 'data2_admin', 'data2', 'read')
```

<!--PHP-->
```php
$hasNamedPolicy = $e->hasNamedPolicy("p", "data2_admin", "data2", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddPolicy()`

AddPolicy adds an authorization rule to the current policy.
If the rule already exists, the function returns false and the rule will not be added.
Otherwise the function returns true by adding the new rule.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
added := e.AddPolicy("eve", "data3", "read")
```

<!--Node.js-->
```typescript
const p = ['eve', 'data3', 'read']
const added = await e.addPolicy(...p)
```

<!--PHP-->
```php
$added = $e->addPolicy('eve', 'data3', 'read');
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddPolicies()`

AddPolicies adds authorization rules to the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesAdded := e.AddPolicies(rules)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddNamedPolicy()`

AddNamedPolicy adds an authorization rule to the current named policy.
If the rule already exists, the function returns false and the rule will not be added.
Otherwise the function returns true by adding the new rule.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
added := e.AddNamedPolicy("p", "eve", "data3", "read")
```

<!--Node.js-->
```typescript
const p = ['eve', 'data3', 'read']
const added = await e.addNamedPolicy('p', ...p)
```

<!--PHP-->
```php
$added = $e->addNamedPolicy("p", "eve", "data3", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddNamedPolicies()`

AddNamedPolicies adds authorization rules to the current named policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesAdded := e.AddNamedPolicies("p", rules)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemovePolicy()`

RemovePolicy removes an authorization rule from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemovePolicy("alice", "data1", "read")
```

<!--Node.js-->
```typescript
const p = ['alice', 'data1', 'read']
const removed = await e.removePolicy(...p)
```

<!--PHP-->
```php
$removed = $e->removePolicy("alice", "data1", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemovePolicies()`

RemovePolicies removes authorization rules from the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesRemoved := e.RemovePolicies(rules)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveFilteredPolicy()`

RemoveFilteredPolicy removes an authorization rule from the current policy, field filters can be specified.
RemovePolicy removes an authorization rule from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveFilteredPolicy(0, "alice", "data1", "read")
```

<!--Node.js-->
```typescript
const p = ['alice', 'data1', 'read']
const removed = await e.removeFilteredPolicy(0, ...p)
```

<!--PHP-->
```php
$removed = $e->removeFilteredPolicy(0, "alice", "data1", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveNamedPolicy()`

RemoveNamedPolicy removes an authorization rule from the current named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveNamedPolicy("p", "alice", "data1", "read")
```

<!--Node.js-->
```typescript
const p = ['alice', 'data1', 'read']
const removed = await e.removeNamedPolicy('p', ...p)
```

<!--PHP-->
```php
$removed = $e->removeNamedPolicy("p", "alice", "data1", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveNamedPolicies()`

RemoveNamedPolicies removes authorization rules from the current named policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesRemoved := e.RemoveNamedPolicies("p", rules)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveFilteredNamedPolicy()`

RemoveFilteredNamedPolicy removes an authorization rule from the current named policy, field filters can be specified.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveFilteredNamedPolicy("p", 0, "alice", "data1", "read")
```

<!--Node.js-->
```typescript
const p = ['alice', 'data1', 'read']
const removed = await e.removeFilteredNamedPolicy('p', 0, ...p)
```

<!--PHP-->
```php
$removed = $e->removeFilteredNamedPolicy("p", 0, "alice", "data1", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `HasGroupingPolicy()`

HasGroupingPolicy determines whether a role inheritance rule exists.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
has := e.HasGroupingPolicy("alice", "data2_admin")
```

<!--Node.js-->
```typescript
const has = await e.hasGroupingPolicy('alice', 'data2_admin')
```

<!--PHP-->
```php
$has = $e->hasGroupingPolicy("alice", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `HasNamedGroupingPolicy()`

HasNamedGroupingPolicy determines whether a named role inheritance rule exists.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
has := e.HasNamedGroupingPolicy("g", "alice", "data2_admin")
```

<!--Node.js-->
```typescript
const has = await e.hasNamedGroupingPolicy('g', 'alice', 'data2_admin')
```

<!--PHP-->
```php
$has = $e->hasNamedGroupingPolicy("g", "alice", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddGroupingPolicy()`

AddGroupingPolicy adds a role inheritance rule to the current policy.
If the rule already exists, the function returns false and the rule will not be added.
Otherwise the function returns true by adding the new rule.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
added := e.AddGroupingPolicy("group1", "data2_admin")
```

<!--Node.js-->
```typescript
const added = await e.addGroupingPolicy('group1', 'data2_admin')
```

<!--PHP-->
```php
$added = $e->addGroupingPolicy("group1", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddGroupingPolicies()`

AddGroupingPolicies adds role inheritance rules to the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesAdded := e.AddGroupingPolicies(rules)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddNamedGroupingPolicy()`

AddNamedGroupingPolicy adds a named role inheritance rule to the current policy.
If the rule already exists, the function returns false and the rule will not be added.
Otherwise the function returns true by adding the new rule.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
added := e.AddNamedGroupingPolicy("g", "group1", "data2_admin")
```

<!--Node.js-->
```typescript
const added = await e.addNamedGroupingPolicy('g', 'group1', 'data2_admin')
```

<!--PHP-->
```php
$added = $e->addNamedGroupingPolicy("g", "group1", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddNamedGroupingPolicies()`

AddNamedGroupingPolicies adds named role inheritance rules to the current policy.
The operation is atomic in nature. 
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesAdded := e.AddNamedGroupingPolicies("g", rules)
```

### `RemoveGroupingPolicy()`

RemoveGroupingPolicy removes a role inheritance rule from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveGroupingPolicy("alice", "data2_admin")
```

<!--Node.js-->
```typescript
const removed = await e.removeGroupingPolicy('alice', 'data2_admin')
```

<!--PHP-->
```php
$removed = $e->removeGroupingPolicy("alice", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveGroupingPolicies()`

RemoveGroupingPolicies removes role inheritance rules from the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesRemoved := e.RemoveGroupingPolicies(rules)
```

### `RemoveFilteredGroupingPolicy()`

RemoveFilteredGroupingPolicy removes a role inheritance rule from the current policy, field filters can be specified.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveFilteredGroupingPolicy(0, "alice")
```

<!--Node.js-->
```typescript
const removed = await e.removeFilteredGroupingPolicy(0, 'alice')
```

<!--PHP-->
```php
$removed = $e->removeFilteredGroupingPolicy(0, "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveNamedGroupingPolicy()`

RemoveNamedGroupingPolicy removes a role inheritance rule from the current named policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveNamedGroupingPolicy("g", "alice")
```

<!--Node.js-->
```typescript
const removed = await e.removeNamedGroupingPolicy('g', 'alice')
```

<!--PHP-->
```php
$removed = $e->removeNamedGroupingPolicy("g", "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveNamedGroupingPolicies()`

RemoveNamedGroupingPolicies removes named role inheritance rules from the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all authorization the rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
rules := [][] string {
				[]string {"jack", "data4", "read"},
				[]string {"katy", "data4", "write"},
				[]string {"leyo", "data4", "read"},
				[]string {"ham", "data4", "write"},
		}

areRulesRemoved := e.RemoveNamedGroupingPolicies("g", rules)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveFilteredNamedGroupingPolicy()`

RemoveFilteredNamedGroupingPolicy removes a role inheritance rule from the current named policy, field filters can be specified.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
removed := e.RemoveFilteredNamedGroupingPolicy("g", 0, "alice")
```

<!--Node.js-->
```typescript
const removed = await e.removeFilteredNamedGroupingPolicy('g', 0, 'alice')
```

<!--PHP-->
```php
$removed = $e->removeFilteredNamedGroupingPolicy("g", 0, "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddFunction()`

AddFunction adds a customized function.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
func CustomFunction(key1 string, key2 string) bool {
	if key1 == "/alice_data2/myid/using/res_id" && key2 == "/alice_data/:resource" {
		return true
	} else if key1 == "/alice_data2/myid/using/res_id" && key2 == "/alice_data2/:id/using/:resId" {
		return true
	} else {
		return false
	}
}

func CustomFunctionWrapper(args ...interface{}) (interface{}, error) {
	key1 := args[0].(string)
	key2 := args[1].(string)

	return bool(CustomFunction(key1, key2)), nil
}

e.AddFunction("keyMatchCustom", CustomFunctionWrapper)
```

<!--Node.js-->
```text
Method is not implemented
```

<!--PHP-->
```php
func customFunction($key1, $key2) {
	if ($key1 == "/alice_data2/myid/using/res_id" && $key2 == "/alice_data/:resource") {
		return true;
	} elseif ($key1 == "/alice_data2/myid/using/res_id" && $key2 == "/alice_data2/:id/using/:resId") {
		return true;
	} else {
		return false;
	}
}

func customFunctionWrapper(...$args){
	$key1 := $args[0];
	$key2 := $args[1];

	return customFunction($key1, $key2);
}

$e->addFunction("keyMatchCustom", customFunctionWrapper);
```

<!--END_DOCUSAURUS_CODE_TABS-->
