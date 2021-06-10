---
id: api-overview
title: API Overview
---

This overview only shows you how to use Casbin APIs and doesn't explain how Casbin is installed and how it works. You can find those tutorials here: [installation of Casbin](https://casbin.org/docs/en/get-started) and [how Casbin works](https://casbin.org/docs/en/how-it-works). So, when you start reading this tutorial, we assume that you have fully installed and imported Casbin into your code.

## Enforce API

Let's start at the Enforce APIs of Casbin. We will load a RBAC model from `model.conf`, and load policies from `policy.csv`. You can learn the Model syntax [here](https://casbin.org/docs/en/syntax-for-models), and we won't talk about it in this tutorial. We assume that you can understand the config files given below:

`model.conf`

```
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
```

`policy.csv`

```
p, admin, data1, read
p, admin, data1, write
p, admin, data2, read
p, admin, data2, write
p, alice, data1, read
p, bob, data2, write
g, amber, admin
g, abc, admin
```

After reading the config files, please read the following code.

```go
// load information from files
enforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")
if err != nil {
	log.Fatalf("error, detail: %s", err)
}
ok, err := enforcer.Enforce("alice", "data1", "read")
```

This code loads the access control model and policies from local files. Function `casbin.NewEnforcer()` will return an enforcer. It will recognize its 2 parameters as file paths, and load the files from there. Errors occurred in the process are stored in `err`. This code used the default adapter to load model and policies. And of course you can get the same result by using a third-party adapter.

Code `ok, err := enforcer.Enforce("alice", "data1", "read")`  is to confirm access permissions. If alice can access the data1 with the operation read, the returned value `ok` will be `true`, otherwise it'll be `false`. In this example, the value of `ok` is `true`. 

## EnforceEx API

Sometimes you may wonder which policy allowed the request, so we prepared the function `EnforceEx()`. You can use it like this: 

```go
ok, reason, err := enforcer.EnforceEx("amber", "data1", "read")
fmt.Println(ok, reason) // true [admin data1 read]
```

function `EnforceEx()` will return the exact policy string in the return value `reason`. In this example, `amber` is a role of `admin`, so policy `p, admin, data1, read` made this request `true`. The out put of this code is in the comment.

Casbin prepared a lot of APIs like this. Those APIs added some extra functions on the basic one. They are:

- `ok, err := enforcer.EnforceWithMatcher(matcher, request)`

  With a matcher.

- `ok, reason, err := enforcer.EnforceExWithMatcher(matcher, request)` 

  A combination of `EnforceWithMatcher()` and `EnforceEx()`.

- `boolArray, err := enforcer.BatchEnforce(requests)` 

  Do a list job, returns an array.

This is a simple use of Casbin. You can use Casbin to start an authorization server via these APIs. We will show you some other types of APIs in the next paragraphs.

## Management API

### Get API

These APIs are used to get exact objects in policies. This time we loaded an enforcer like the last example and get something from it.

Please read the following code:

```go
enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")
if err != nil {
	fmt.Printf("Error, details: %s\n", err)
}
allSubjects := enforcer.GetAllSubjects()
fmt.Println(allSubjects)
```

Same as the last example, the first 4 lines loaded some necessary information from local files. We won't talk about that here anymore.

Code `allSubjects := enforcer.GetAllSubjects()` got all the subjects in the policy file and returned them as an array. Then we printed that array. 

Normally, the output of the code should be:

```
[admin alice bob]
```

You can also change the function `GetAllSubjects() ` to `GetAllNamedSubjects()` ，to get the list of subjects that show up in the current named policy.

Similarly, we prepared `GetAll` functions for `Objects, Actions, Roles`. The only thing you need to do is to change the word `Subject` in the function name to what you want if you want to access those functions.

Besides, we have more getters for policies. The call method and return value are similar to those above.

- `policy = e.GetPolicy()` gets all the authorization rules in the policy.
- `filteredPolicy := e.GetFilteredPolicy(0, "alice")` gets all the authorization rules in the policy, field filters can be specified.
- `namedPolicy := e.GetNamedPolicy("p")` gets all the authorization rules in the named policy.
- `filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")` gets all the authorization rules in the named policy, field filters can be specified.
- `groupingPolicy := e.GetGroupingPolicy()` gets all the role inheritance rules in the policy.
- `filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")` gets all the role inheritance rules in the policy, field filters can be specified.
- `namedGroupingPolicy := e.GetNamedGroupingPolicy("g")` gets all the role inheritance rules in the policy.
- `namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")` gets all the role inheritance rules in the policy.

### Add, Delete, Update API

Casbin prepared a lot of APIs for policies. These APIs allow you to add, delete or edit policies dynamically at runtime.

This code shows you how to add, remove and update your policies, and told you how to confirm that a policy exists:

```go
// load information from files
enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")
if err != nil {
   fmt.Printf("Error, details: %s\n", err)
}

// add a policy, then use HasPolicy() to confirm that
enforcer.AddPolicy("added_user", "data1", "read")
hasPolicy := enforcer.HasPolicy("added_user", "data1", "read")
fmt.Println(hasPolicy) // true, we added that policy successfully

// remove a policy, then use HasPolicy() to confirm that
enforcer.RemovePolicy("alice", "data1", "read")
hasPolicy = enforcer.HasPolicy("alice", "data1", "read")
fmt.Println(hasPolicy) // false, we deleted that policy successfully

// update a policy, then use HasPolicy() to confirm that
enforcer.UpdatePolicy([]string{"added_user", "data1", "read"}, []string{"added_user", "data1", "write"})
hasPolicy = enforcer.HasPolicy("added_user", "data1", "read")
fmt.Println(hasPolicy) // false, the origin policy has lapsed
hasPolicy = enforcer.HasPolicy("added_user", "data1", "write")
fmt.Println(hasPolicy) // true, the new policy is in use
```

Using these four kinds of APIs can edit your policies. Like these, we prepared same kinds of APIs to `FilteredPolicy, NamedPolicy, FilteredNamedPolicy, GroupingPolicy, NamedGroupingPolicy, FilteredGroupingPolicy, FilteredNamedGroupingPolicy`. To use them, you only need to replace word `Policy` in the function name to the words above.

Besides, if you change parameters to arrays, you can batch edit you policies.

For example, to functions like this:

```go
enforcer.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})
```

if we change `Policy` to `Policies`, and edit the parameter to:

```go
enforcer.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})
```

then we can batch edit these policies.

Same operations also useful to `GroupingPolicy, NamedGroupingPolicy`.

## RBAC API

Casbin provided come APIs for you to modify the RBAC model and policies. If you are familiar with RBAC, you can use these APIs easily.

Here we only show you how to use RBAC APIs of Casbin and won't talk about RBAC itself. You can get more details [here](https://casbin.org/docs/en/rbac).

We use this code to load model and policies just like before.

```go
enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")
if err != nil {
	fmt.Printf("Error, details: %s\n", err)
}
```

then, use a instance of Enforcer `enforcer` to access these APIs.

```go
roles, err := enforcer.GetRolesForUser("amber")
fmt.Println(roles) // [admin]
users, err := enforcer.GetUsersForRole("admin")
fmt.Println(users) // [amber abc]
```

`GetRolesForUser()` returned an array that contained all roles contained amber. In this example, amber has only one role admin, so array `roles` is `[admin]`. And similarly, you can use `GetUsersForRole()` to get users belongs to the role. The return value of this function is also an array.

```go
enforcer.HasRoleForUser("amber", "admin") // true
```

You can use `HasRoleForUser()` to confirm whether the user belongs to the role. In this example, amber is a member of admin, so the return value of the function is `true`.

```go
fmt.Println(enforcer.Enforce("bob", "data2", "write")) // true
enforcer.DeletePermission("data2", "write")
fmt.Println(enforcer.Enforce("bob", "data2", "write")) // false
```

You can use `DeletePermission()` to delete a permission.

```go
fmt.Println(enforcer.Enforce("alice", "data1", "read")) // true
enforcer.DeletePermissionForUser("alice", "data1", "read")
fmt.Println(enforcer.Enforce("alice", "data1", "read")) // false
```

And use `DeletePermissionForUser()` to delete a permission for a user.

Casbin have a lot of APIs like this. Their call methods and return values have the same style as the above APIs. You can find these APIs in [next documents](https://casbin.org/docs/en/rbac-api).
