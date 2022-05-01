---
id: management-api
title: Management API
---

The primitive API that provides full support for Casbin policy management.

## Filtered API

Almost all filtered api has the same parameters ``(fieldIndex int, fieldValues ...string)``. `fieldIndex` is the index where matching start, `fieldValues` denotes the values result should have. Note that empty string in fieldValues could be any word.

Example:

```csv
p, alice, book, read
p, bob, book, read
p, bob, book, write
p, alice, pen, get
p, bob, pen ,get
```

```go
e.GetFilteredPolicy(1, "book") // will return: [[alice book read] [bob book read] [bob book write]]

e.GetFilteredPolicy(1, "book", "read") // will return: [[alice book read] [bob book read]]

e.GetFilteredPolicy(0, "alice", "", "read") // will return: [[alice book read]]

e.GetFilteredPolicy(0, "alice") // will return: [[alice book read] [alice pen get]]
```

## Reference

global variable `e` is Enforcer instance.

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
e, err := NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")
```

<!--Node.js-->
```typescript
const e = await newEnforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv')
```

<!--PHP-->
```php
$e = new Enforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv');
```

<!--Python-->
```python
e = casbin.Enforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")
```

<!--.NET-->
```csharp
var e = new Enforcer("path/to/model.conf", "path/to/policy.csv");
```

<!--Rust-->
```rust
let mut e = Enforce::new("examples/rbac_model.conf", "examples/rbac_policy.csv").await?;
```

<!--Java-->
```java
Enforcer e = new Enforcer("examples/rbac_model.conf", "examples/rbac_policy.csv");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `Enforce()`

Enforce decides whether a "subject" can access a "object" with the operation "action", input parameters are usually: (sub, obj, act).

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.Enforce(request)
```

<!--Node.js-->
```typescript
const ok = await e.enforce(request);
```

<!--PHP-->
```php
$ok = $e->enforcer($request);
```

<!--Python-->
```python
ok = e.enforcer($request);
```

<!--Java-->
```java
boolean ok = e.enforce(request);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `EnforceWithMatcher()`

EnforceWithMatcher use a custom matcher to decides whether a "subject" can access a "object" with the operation "action", input parameters are usually: (matcher, sub, obj, act), use model matcher by default when matcher is "".

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, err := e.EnforceWithMatcher(matcher, request)
```

<!--PHP-->
```php
$ok = $e->enforceWithMatcher($matcher, $request);
```

<!--Python-->
```python
ok = e.enforce_with_matcher(matcher, request);
```

<!--Java-->
```java
boolean ok = e.enforceWithMatcher(matcher, request);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `EnforceEx()`

EnforceEx explain enforcement by informing matched rules.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, reason, err := e.EnforceEx(request)
```

<!--Node.js-->
```typescript
const ok = await e.enforceEx(request);
```

<!--PHP-->
```php
list($ok, $reason) = $e->enforceEx($request);
```

<!--Python-->
```python
ok, reason = e.enforce_ex(request);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `EnforceExWithMatcher()`

EnforceExWithMatcher use a custom matcher and explain enforcement by informing matched rules.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
ok, reason, err := e.EnforceExWithMatcher(matcher, request)
```
<!--END_DOCUSAURUS_CODE_TABS-->

### `BatchEnforce()`

BatchEnforce enforces each request and returns result in a bool array

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
boolArray, err := e.BatchEnforce(requests)
```

<!--Node.js-->
```typescript
const boolArray = await e.batchEnforce(requests);
```

<!--Java-->
```java
List<Boolean> boolArray = e.batchEnforce(requests);
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

<!--Python-->
```python
all_subjects = e.get_all_subjects()
```

<!--.NET-->
```csharp
var allSubjects = e.GetAllSubjects();
```

<!--Rust-->
```rust
let all_subjects = e.get_all_subjects();
```

<!--Java-->
```java
List<String> allSubjects = e.getAllSubjects();
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

<!--Python-->
```python
all_named_subjects = e.get_all_named_subjects("p")
```

<!--.NET-->
```csharp
var allNamedSubjects = e.GetAllNamedSubjects("p");
```

<!--Rust-->
```rust
let all_named_subjects = e.get_all_named_subjects("p");
```

<!--Java-->
```java
List<String> allNamedSubjects = e.getAllNamedSubjects("p");
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

<!--Python-->
```python
all_objects = e.get_all_objects()
```

<!--.NET-->
```csharp
var allObjects = e.GetAllObjects();
```

<!--Rust-->
```rust
let all_objects = e.get_all_objects();
```

<!--Java-->
```java
List<String> allObjects = e.getAllObjects();
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

<!--Python-->
```python
all_named_objects = e.get_all_named_objects("p")
```

<!--.NET-->
```csharp
var allNamedObjects = e.GetAllNamedObjects("p");
```

<!--Rust-->
```rust
let all_named_objects = e.get_all_named_objects("p");
```

<!--Java-->
```java
List<String> allNamedObjects = e.getAllNamedObjects("p");
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

<!--Python-->
```python
all_actions = e.get_all_actions()
```

<!--.NET-->
```csharp
var allActions = e.GetAllActions();
```

<!--Rust-->
```rust
let all_actions = e.get_all_actions();
```

<!--Java-->
```java
List<String> allActions = e.getAllActions();
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

<!--Python-->
```python
all_named_actions = e.get_all_named_actions("p")
```

<!--.NET-->
```csharp
var allNamedActions = e.GetAllNamedActions("p");
```

<!--Rust-->
```rust
let all_named_actions = e.get_all_named_actions("p");
```

<!--Java-->
```java
List<String> allNamedActions = e.getAllNamedActions("p");
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

<!--Python-->
```python
all_roles = e.get_all_roles()
```

<!--.NET-->
```csharp
var allRoles = e.GetAllRoles();
```

<!--Rust-->
```rust
let all_roles = e.get_all_roles();
```

<!--Java-->
```java
List<String> allRoles = e.getAllRoles();
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

<!--PHP-->
```php
$allNamedRoles = $e->getAllNamedRoles('g');
```

<!--Python-->
```python
all_named_roles = e.get_all_named_roles("g")
```

<!--.NET-->
```csharp
var allNamedRoles = e.GetAllNamedRoles("g");
```

<!--Rust-->
```rust
let all_named_roles = e.get_all_named_roles("g");
```

<!--Java-->
```java
List<String> allNamedRoles = e.getAllNamedRoles("g");
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

<!--Python-->
```python
policy = e.get_policy()
```

<!--.NET-->
```csharp
var policy = e.GetPolicy();
```

<!--Rust-->
```rust
let policy = e.get_policy();
```

<!--Java-->
```java
List<List<String>> policy = e.getPolicy();
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

<!--Python-->
```python
filtered_policy = e.get_filtered_policy(0, "alice")
```

<!--.NET-->
```csharp
var filteredPolicy = e.GetFilteredPolicy(0, "alice");
```

<!--Rust-->
```rust
let filtered_policy = e.get_filtered_policy(0, vec!["alice".to_owned()]);
```

<!--Java-->
```java
List<List<String>> filteredPolicy = e.getFilteredPolicy(0, "alice");
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

<!--Python-->
```python
named_policy = e.get_named_policy("p")
```

<!--.NET-->
```csharp
var namedPolicy = e.GetNamedPolicy("p");
```

<!--Rust-->
```rust
let named_policy = e.get_named_policy("p");
```

<!--Java-->
```java
List<List<String>> namedPolicy = e.getNamedPolicy("p");
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

<!--Python-->
```python
filtered_named_policy = e.get_filtered_named_policy("p", 0, "alice")
```

<!--.NET-->
```csharp
var filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "alice");
```

<!--Rust-->
```rust
let filtered_named_policy = e.get_filtered_named_policy("p", 0, vec!["bob".to_owned()]);
```

<!--Java-->
```java
List<List<String>> filteredNamedPolicy = e.getFilteredNamedPolicy("p", 0, "bob");
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

<!--Python-->
```python
grouping_policy = e.get_grouping_policy()
```

<!--.NET-->
```csharp
var groupingPolicy = e.GetGroupingPolicy();
```

<!--Rust-->
```rust
let grouping_policy = e.get_grouping_policy();
```

<!--Java-->
```java
List<List<String>> groupingPolicy = e.getGroupingPolicy();
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

<!--PHP-->
```php
$filteredGroupingPolicy = $e->getFilteredGroupingPolicy(0, "alice");
```

<!--Python-->
```python
filtered_grouping_policy = e.get_filtered_grouping_policy(0, "alice")
```

<!--.NET-->
```csharp
var filteredGroupingPolicy = e.GetFilteredGroupingPolicy(0, "alice");
```

<!--Rust-->
```rust
let filtered_grouping_policy = e.get_filtered_grouping_policy(0, vec!["alice".to_owned()]);
```

<!--Java-->
```java
List<List<String>> filteredGroupingPolicy = e.getFilteredGroupingPolicy(0, "alice");
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

<!--Python-->
```python
named_grouping_policy = e.get_named_grouping_policy("g")
```

<!--.NET-->
```csharp
var namedGroupingPolicy = e.GetNamedGroupingPolicy("g");
```

<!--Rust-->
```rust
let named_grouping_policy = e.get_named_grouping_policy("g");
```

<!--Java-->
```java
List<List<String>> namedGroupingPolicy = e.getNamedGroupingPolicy("g");
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

<!--Python-->
```python
named_grouping_policy = e.get_filtered_named_grouping_policy("g", 0, "alice")
```

<!--.NET-->
```csharp
var namedGroupingPolicy = e.GetFilteredNamedGroupingPolicy("g", 0, "alice");
```

<!--Rust-->
```rust
let named_grouping_policy = e.get_filtered_named_groupingPolicy("g", 0, vec!["alice".to_owned()]);
```

<!--Java-->
```java
List<List<String>> filteredNamedGroupingPolicy = e.getFilteredNamedGroupingPolicy("g", 0, "alice");
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

<!--Python-->
```python
has_policy = e.has_policy("data2_admin", "data2", "read")
```

<!--.NET-->
```csharp
var hasPolicy = e.HasPolicy("data2_admin", "data2", "read");
```

<!--Rust-->
```rust
let has_policy = e.has_policy(vec!["data2_admin".to_owned(), "data2".to_owned(), "read".to_owned()]);
```

<!--Java-->
```java
boolean hasPolicy = e.hasPolicy("data2_admin", "data2", "read");
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

<!--Python-->
```python
has_named_policy = e.has_named_policy("p", "data2_admin", "data2", "read")
```

<!--.NET-->
```csharp
var hasNamedPolicy = e.HasNamedPolicy("p", "data2_admin", "data2", "read");
```

<!--Rust-->
```rust
let has_named_policy = e.has_named_policy("p", vec!["data2_admin".to_owned(), "data2".to_owned(), "read".to_owned()]);
```

<!--Java-->
```java
boolean hasNamedPolicy = e.hasNamedPolicy("p", "data2_admin", "data2", "read");
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
added := e.AddPolicy('eve', 'data3', 'read')
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

<!--Python-->
```python
added = e.add_policy("eve", "data3", "read")
```

<!--.NET-->
```csharp
var added = e.AddPolicy("eve", "data3", "read");
or
var added = await e.AddPolicyAsync("eve", "data3", "read");
```

<!--Rust-->
```rust
let added = e.add_policy(vec!["eve".to_owned(), "data3".to_owned(), "read".to_owned()]);
```

<!--Java-->
```java
boolean added = e.addPolicy("eve", "data3", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddPolicies()`

AddPolicies adds authorization rules to the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

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

<!--Node.js-->
```typescript
const rules = [
    ['jack', 'data4', 'read'],
    ['katy', 'data4', 'write'],
    ['leyo', 'data4', 'read'],
    ['ham', 'data4', 'write']
];

const areRulesAdded = await e.addPolicies(rules);
```

<!--Python-->
```python
rules = [
    ["jack", "data4", "read"], ["katy", "data4", "write"],
    ["leyo", "data4", "read"], ["ham", "data4", "write"]
]
are_rules_added = e.add_policies(rules)
```

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["katy".to_owned(), "data4".to_owned(), "write".to_owned()],
	vec!["leyo".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["ham".to_owned(), "data4".to_owned(), "write".to_owned()],
];

let are_rules_added = e.add_policies(rules).await?
```

<!--Java-->
```java
String[][] rules = {
	{"jack", "data4", "read"},
	{"katy", "data4", "write"},
	{"leyo", "data4", "read"},
	{"ham", "data4", "write"},
};

boolean areRulesAdded = e.addPolicies(rules);
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

<!--Python-->
```python
added = e.add_named_policy("p", "eve", "data3", "read")
```

<!--.NET-->
```csharp
var added = e.AddNamedPolicy("p", "eve", "data3", "read");
or
var added = await e.AddNamedPolicyAsync("p", "eve", "data3", "read");
```

<!--Rust-->
```rust
let added = e.add_named_policy("p", vec!["eve".to_owned(), "data3".to_owned(), "read".to_owned()]).await?;
```

<!--Java-->
```java
boolean added = e.addNamedPolicy("p", "eve", "data3", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddNamedPolicies()`

AddNamedPolicies adds authorization rules to the current named policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

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

<!--Node.js-->
```typescript
const rules = [
    ['jack', 'data4', 'read'],
    ['katy', 'data4', 'write'],
    ['leyo', 'data4', 'read'],
    ['ham', 'data4', 'write']
];

const areRulesAdded = await e.addNamedPolicies('p', rules);
```

<!--Python-->
```python
rules = [
    ["jack", "data4", "read"], ["katy", "data4", "write"],
    ["leyo", "data4", "read"], ["ham", "data4", "write"]
]
are_rules_added = e.add_named_policies("p", rules)
```

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["katy".to_owned(), "data4".to_owned(), "write".to_owned()],
	vec!["leyo".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["ham".to_owned(), "data4".to_owned(), "write".to_owned()],
];

let are_rules_added := e.add_named_policies("p", rules).await?;
```

<!--Java-->
```java
List<List<String>> rules = Arrays.asList(
	Arrays.asList("jack", "data4", "read"),
	Arrays.asList("katy", "data4", "write"),
	Arrays.asList("leyo", "data4", "read"),
	Arrays.asList("ham", "data4", "write")
);
boolean areRulesAdded = e.addNamedPolicies("p", rules);
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

<!--Python-->
```python
removed = e.remove_policy("alice", "data1", "read")
```

<!--.NET-->
```csharp
var removed = e.RemovePolicy("alice", "data1", "read");
or
var removed = await e.RemovePolicyAsync("alice", "data1", "read");
```

<!--Rust-->
```rust
let removed = e.remove_policy(vec!["alice".to_owned(), "data1".to_owned(), "read".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removePolicy("alice", "data1", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemovePolicies()`

RemovePolicies removes authorization rules from the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

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

<!--Node.js-->
```typescript
const rules = [
    ['jack', 'data4', 'read'],
    ['katy', 'data4', 'write'],
    ['leyo', 'data4', 'read'],
    ['ham', 'data4', 'write']
];

const areRulesRemoved = await e.removePolicies(rules);
```

<!--Python-->
```python
rules = [
    ["jack", "data4", "read"], ["katy", "data4", "write"],
    ["leyo", "data4", "read"], ["ham", "data4", "write"]
]
are_rules_removed = e.remove_policies(rules)
```

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["katy".to_owned(), "data4".to_owned(), "write".to_owned()],
	vec!["leyo".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["ham".to_owned(), "data4".to_owned(), "write".to_owned()],
];

let are_rules_removed = e.remove_policies(rules).await?;
```

<!--Java-->
```java
String[][] rules = {
	{"jack", "data4", "read"},
	{"katy", "data4", "write"},
	{"leyo", "data4", "read"},
	{"ham", "data4", "write"},
};
boolean areRulesRemoved = e.removePolicies(rules);
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

<!--Python-->
```python
removed = e.remove_filtered_policy(0, "alice", "data1", "read")
```

<!--.NET-->
```csharp
var removed = e.RemoveFilteredPolicy("alice", "data1", "read");
or
var removed = await e.RemoveFilteredPolicyAsync("alice", "data1", "read");
```

<!--Rust-->
```rust
let removed = e.remove_filtered_policy(0, vec!["alice".to_owned(), "data1".to_owned(), "read".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeFilteredPolicy(0, "alice", "data1", "read");
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

<!--Python-->
```python
removed = e.remove_named_policy("p", "alice", "data1", "read")
```

<!--.NET-->
```csharp
var removed = e.RemoveNamedPolicy("p", "alice", "data1", "read");
or
var removed = await e.RemoveNamedPolicyAsync("p", "alice", "data1", "read");
```

<!--Rust-->
```rust
let removed = e.remove_named_policy("p", vec!["alice".to_owned(), "data1".to_owned(), "read".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeNamedPolicy("p", "alice", "data1", "read");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveNamedPolicies()`

RemoveNamedPolicies removes authorization rules from the current named policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

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

<!--Node.js-->
```typescript
const rules = [
    ['jack', 'data4', 'read'],
    ['katy', 'data4', 'write'],
    ['leyo', 'data4', 'read'],
    ['ham', 'data4', 'write']
];

const areRulesRemoved = await e.removeNamedPolicies('p', rules);
```

<!--Python-->
```python
rules = [
    ["jack", "data4", "read"],
    ["katy", "data4", "write"],
    ["leyo", "data4", "read"],
    ["ham", "data4", "write"]
]
are_rules_removed = e.remove_named_policies("p", rules)
```

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["katy".to_owned(), "data4".to_owned(), "write".to_owned()],
	vec!["leyo".to_owned(), "data4".to_owned(), "read".to_owned()],
	vec!["ham".to_owned(), "data4".to_owned(), "write".to_owned()],
];

let areRulesRemoved = e.remove_named_policies("p", rules).await?;
```

<!--Java-->
```java
List<List<String>> rules = Arrays.asList(
	Arrays.asList("jack", "data4", "read"),
	Arrays.asList("katy", "data4", "write"),
	Arrays.asList("leyo", "data4", "read"),
	Arrays.asList("ham", "data4", "write")
);
boolean areRulesRemoved = e.removeNamedPolicies("p", rules);
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

<!--Python-->
```python
removed = e.remove_filtered_named_policy("p", 0, "alice", "data1", "read")
```

<!--.NET-->
```csharp
var removed = e.RemoveFilteredNamedPolicy("p", 0, "alice", "data1", "read");
or
var removed = e.RemoveFilteredNamedPolicyAync("p", 0, "alice", "data1", "read");
```

<!--Rust-->
```rust
let removed = e.remove_filtered_named_policy("p", 0, vec!["alice".to_owned(), "data1".to_owned(), "read".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeFilteredNamedPolicy("p", 0, "alice", "data1", "read");
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

<!--Python-->
```python
has = e.has_grouping_policy("alice", "data2_admin")
```

<!--.NET-->
```csharp
var has = e.HasGroupingPolicy("alice", "data2_admin");
```

<!--Rust-->
```rust
let has = e.has_grouping_policy(vec!["alice".to_owned(), "data2_admin".to_owned()]);
```

<!--Java-->
```java
boolean has = e.hasGroupingPolicy("alice", "data2_admin");
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

<!--Python-->
```python
has = e.has_named_grouping_policy("g", "alice", "data2_admin")
```

<!--.NET-->
```csharp
var has = e.HasNamedGroupingPolicy("g", "alice", "data2_admin");
```

<!--Rust-->
```rust
let has = e.has_named_grouping_policy("g", vec!["alice".to_owned(), "data2_admin".to_owned()]);
```

<!--Java-->
```java
boolean has = e.hasNamedGroupingPolicy("g", "alice", "data2_admin");
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

<!--Python-->
```python
added = e.add_grouping_policy("group1", "data2_admin")
```

<!--.NET-->
```csharp
var added = e.AddGroupingPolicy("group1", "data2_admin");
or
var added = await e.AddGroupingPolicyAsync("group1", "data2_admin");
```

<!--Rust-->
```rust
let added = e.add_grouping_policy(vec!["group1".to_owned(), "data2_admin".to_owned()]).await?;
```

<!--Java-->
```java
boolean added = e.addGroupingPolicy("group1", "data2_admin");
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

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["katy".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["leyo".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["ham".to_owned(), "group1".to_owned(), "domain1".to_owned()],
];

let areRulesAdded = e.add_grouping_policies(rules).await?;
```
<!--Node.js-->
```typescript
const groupingRules = [
    ['ham', 'data4_admin'],
    ['jack', 'data5_admin']
  ];

const areRulesAdded = await e.addGroupingPolicies(groupingRules);
```

<!--Java-->
```java
String[][] groupingRules = {
	{"ham", "data4_admin"},
	{"jack", "data5_admin"}
};
boolean areRulesAdded = e.addGroupingPolicies(groupingRules);
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

<!--.NET-->
```csharp
var added = e.AddNamedGroupingPolicy("g", "group1", "data2_admin");
or
var added = await e.AddNamedGroupingPolicyAsync("g", "group1", "data2_admin");
```

<!--Rust-->
```rust
let added = e.add_named_grouping_policy("g", vec!["group1".to_owned(), "data2_admin".to_owned()]).await?;
```

<!--Java-->
```java
boolean added = e.addNamedGroupingPolicy("g", "group1", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `AddNamedGroupingPolicies()`

AddNamedGroupingPolicies adds named role inheritance rules to the current policy.
The operation is atomic in nature. 
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is added to the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is added to the current policy.

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

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["katy".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["leyo".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["ham".to_owned(), "group1".to_owned(), "domain1".to_owned()],
];

let are_rules_added = e.add_named_grouping_policies("g", rules).await?;
```

<!--Node.js-->
```typescript
const groupingRules = [
    ['ham', 'data4_admin'],
    ['jack', 'data5_admin']
  ];

const areRulesAdded = await e.addNamedGroupingPolicies('g', groupingRules);
```

<!--Java-->
```java
String[][] groupingRules = {
	{"ham", "data4_admin"},
	{"jack", "data5_admin"}
};
boolean areRulesAdded = e.addNamedGroupingPolicies("g", groupingRules);
```

<!--END_DOCUSAURUS_CODE_TABS-->

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

<!--.NET-->
```csharp
var removed = e.RemoveGroupingPolicy("alice", "data2_admin");
or
var removed = await e.RemoveGroupingPolicyAsync("alice", "data2_admin");
```

<!--Rust-->
```rust
let removed = e.remove_grouping_policy(vec!["alice".to_owned(), "data2_admin".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeGroupingPolicy("alice", "data2_admin");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveGroupingPolicies()`

RemoveGroupingPolicies removes role inheritance rules from the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

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

<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["katy".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["leyo".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["ham".to_owned(), "group1".to_owned(), "domain1".to_owned()],
];

let are_rules_removed = e.remove_grouping_policies(rules).await?;
```

<!--Node.js-->
```typescript
const groupingRules = [
    ['ham', 'data4_admin'],
    ['jack', 'data5_admin']
  ];

const areRulesRemoved = await e.removeGroupingPolicies(groupingRules);
```

<!--Java-->
```java
String[][] groupingRules = {
	{"ham", "data4_admin"},
	{"jack", "data5_admin"}
};
boolean areRulesRemoved = e.removeGroupingPolicies(groupingRules);
```

<!--END_DOCUSAURUS_CODE_TABS-->

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

<!--.NET-->
```csharp
var removed = e.RemoveFilteredGroupingPolicy(0, "alice");
or
var removed = await e.RemoveFilteredGroupingPolicyAsync(0, "alice");
```

<!--Rust-->
```rust
let removed = e.remove_filtered_grouping_policy(0, vec!["alice".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeFilteredGroupingPolicy(0, "alice");
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

<!--.NET-->
```csharp
var removed = e.RemoveNamedGroupingPolicy("g", "alice");
or 
var removed = await e.RemoveNamedGroupingPolicyAsync("g", "alice");
```

<!--Rust-->
```rust
let removed = e.remove_named_grouping_policy("g", vec!["alice".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeNamedGroupingPolicy("g", "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `RemoveNamedGroupingPolicies()`

RemoveNamedGroupingPolicies removes named role inheritance rules from the current policy.
The operation is atomic in nature.
Hence, if authorization rules consists of rules which are not consistent with the current policy, the function returns false and no policy rule is removed from the current policy.
If all the authorization rules are consistent with the policy rules, the function returns true and each policy rule is removed from the current policy.

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


<!--Rust-->
```rust
let rules = vec![
	vec!["jack".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["katy".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["leyo".to_owned(), "group1".to_owned(), "domain1".to_owned()],
	vec!["ham".to_owned(), "group1".to_owned(), "domain1".to_owned()],
];

let are_rules_removed = e.remove_named_grouping_policies("g", rules).await?;
```

<!--Node.js-->
```typescript
const groupingRules = [
    ['ham', 'data4_admin'],
    ['jack', 'data5_admin']
  ];

const areRulesRemoved = await e.removeNamedGroupingPolicies('g', groupingRules);
```

<!--Java-->
```java
String[][] groupingRules = {
	{"ham", "data4_admin"},
	{"jack", "data5_admin"}
};
boolean areRulesRemoved = e.removeNamedGroupingPolicies("g", groupingRules);
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

<!--.NET-->
```csharp
var removed = e.RemoveFilteredNamedGroupingPolicy("g", 0, "alice");
or
var removed = await e.RemoveFilteredNamedGroupingPolicyAsync("g", 0, "alice");
```

<!--Rust-->
```rust
let removed = e.remove_filtered_named_groupingPolicy("g", 0, vec!["alice".to_owned()]).await?;
```

<!--Java-->
```java
boolean removed = e.removeFilteredNamedGroupingPolicy("g", 0, "alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `UpdatePolicy()`

UpdatePolicy update a old policy to new policy.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
updated, err := e.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})
```

<!-- Node.js -->
```typescript
const update = await e.updatePolicy(["eve", "data3", "read"], ["eve", "data3", "write"]);
```

<!--Java-->
```java
boolean updated = e.updatePolicy(Arrays.asList("eve", "data3", "read"), Arrays.asList("eve", "data3", "write"));
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `UpdatePolicies()`

UpdatePolicies updates all old policies to new policies.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
updated, err := e.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})
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


<!--Rust-->
```rust
fn custom_function(key1: STring, key2: String) {
	key1 == "/alice_data2/myid/using/res_id" && key2 == "/alice_data/:resource" || key1 == "/alice_data2/myid/using/res_id" && key2 == "/alice_data2/:id/using/:resId"
}


e.add_function("keyMatchCustom", custom_function);
```

<!--Java-->
```java
public static class CustomFunc extends CustomFunction {
	@Override
	public AviatorObject call(Map<String, Object> env, AviatorObject arg1, AviatorObject arg2) {
		String key1 = FunctionUtils.getStringValue(arg1, env);
		String key2 = FunctionUtils.getStringValue(arg2, env);
		if (key1.equals("/alice_data2/myid/using/res_id") && key2.equals("/alice_data/:resource")) {
			return AviatorBoolean.valueOf(true);
		} else if (key1.equals("/alice_data2/myid/using/res_id") && key2.equals("/alice_data2/:id/using/:resId")) {
			return AviatorBoolean.valueOf(true);
		} else {
			return AviatorBoolean.valueOf(false);
		}
	}

	@Override
	public String getName() {
		return "keyMatchCustom";
	}
}

FunctionTest.CustomFunc customFunc = new FunctionTest.CustomFunc();
e.addFunction(customFunc.getName(), customFunc);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `LoadFilteredPolicy()`

LoadFilteredPolicy loads filtered policies from file/database.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
err := e.LoadFilteredPolicy()
```

<!--Node.js-->
```typescript
const ok = await e.loadFilteredPolicy();
```

<!--Java-->
```java
e.loadFilteredPolicy(new String[] { "", "domain1" });
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `LoadIncrementalFilteredPolicy()`

LoadIncrementalFilteredPolicy append a filtered policy from file/database.

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
err := e.LoadIncrementalFilteredPolicy()
```

<!--Node.js-->
```typescript
const ok = await e.loadIncrementalFilteredPolicy();
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `UpdateGroupingPolicy()`

UpdateGroupingPolicy updates oldRule to newRulein `g` section

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
succeed, err : = e.UpdateGroupingPolicy([]string{"data3_admin", "data4_admin"}, []string{"admin", "data4_admin"})
```

<!--Java-->
```Java
boolean succeed = e.updateGroupingPolicy(Arrays.asList("data3_admin", "data4_admin"), Arrays.asList("admin", "data4_admin"));
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `UpdateNamedGroupingPolicy()`

UpdateNamedGroupingPolicy updates oldRule named `ptype` to newRulein `g` section

For example:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
succeed, err : = e.UpdateGroupingPolicy("g1",[]string{"data3_admin", "data4_admin"}, []string{"admin", "data4_admin"})
```

<!--Java-->
```Java
boolean succeed = e.updateNamedGroupingPolicy("g1", Arrays.asList("data3_admin", "data4_admin"), Arrays.asList("admin", "data4_admin"));
```

<!--END_DOCUSAURUS_CODE_TABS-->
