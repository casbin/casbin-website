---
id: get-started
title: Get Started
---

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```
go get github.com/casbin/casbin/v2
```

<!--Java-->
For Maven:

```
<dependency>
  <groupId>org.casbin</groupId>
  <artifactId>jcasbin</artifactId>
  <version>1.2.0</version>
</dependency>
```

<!--Node.js-->
```
# NPM
npm install casbin --save

# Yarn
yarn add casbin
```

<!--PHP-->
Require this package in the `composer.json` of your project. This will download the package:

```
composer require casbin/casbin
```

<!--Python-->
```
pip install casbin
```

<!--.NET-->
```
dotnet add package Casbin.NET
```

<!--Rust-->
```
cargo install cargo-edit
cargo add casbin

// If you use async-std as async executor
cargo add async-std

// If you use tokio as async executor
cargo add tokio // make sure you activate its `macros` feature
```

<!--Delphi-->
Casbin4D comes in a package (currently for Delphi 10.3 Rio) and you can install it in the IDE. However, there are no visual components which means that you can use the units independently of packages. Just import the units in your project (assuming you do not mind the number of them).

<!--END_DOCUSAURUS_CODE_TABS-->

## New a Casbin enforcer

The new a Casbin enforcer must provide a [Model](supported-models) and a [Adapter](adapters).

Casbin has a [FileAdapter](adapters#file-adapter-built-in), see [Adapter](adapters) from more Adapter.

- Use the Model file and default [FileAdapter](adapters#file-adapter-built-in): 

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
import "github.com/casbin/casbin/v2"

e, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")
```

<!--Java-->
```java
import org.casbin.jcasbin.main.Enforcer;

Enforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");
```

<!--Node.js-->
```js
import { newEnforcer } from 'casbin';

const e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');
```

<!--PHP-->
```php
require_once './vendor/autoload.php';

use Casbin\Enforcer;

$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");
```

<!--Python-->
```python
import casbin

e = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")
```

<!--.NET-->
```csharp
using NetCasbin; 

var e = new Enforcer("path/to/model.conf", "path/to/policy.csv");
```

<!--Delphi-->
```delphi
var
  casbin: ICasbin;
begin
  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');
  ...
end
```

<!--Rust-->
```rust
use casbin::prelude::*;

// If you use async_td as async executor
#[cfg(feature = "runtime-async-std")]
#[async_std::main]
async fn main() -> Result<()> {
    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;
    Ok(())
}

// If you use tokio as async executor
#[cfg(feature = "runtime-tokio")]
#[tokio::main]
async fn main() -> Result<()> {
    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;
    Ok(())
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

- Use the Model text with other Adapter: 

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
import (
	"log"

	"github.com/casbin/casbin/v2"
	"github.com/casbin/casbin/v2/model"
	xormadapter "github.com/casbin/xorm-adapter/v2"
	_ "github.com/go-sql-driver/mysql"
)

// Initialize a Xorm adapter with MySQL database.
a, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0.1:3306)/casbin")
if err != nil {
	log.Fatalf("error: adapter: %s", err)
}

m, err := model.NewModelFromString(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = r.sub == p.sub && r.obj == p.obj && r.act == p.act
`)
if err != nil {
	log.Fatalf("error: model: %s", err)
}

e, err := casbin.NewEnforcer(m, a)
if err != nil {
	log.Fatalf("error: enforcer: %s", err)
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Check permissions

Add an enforcement hook into your code right before the access happens:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
sub := "alice" // the user that wants to access a resource.
obj := "data1" // the resource that is going to be accessed.
act := "read" // the operation that the user performs on the resource.

ok, err := e.Enforce(sub, obj, act)

if err != nil {
    // handle err
}

if ok == true {
    // permit alice to read data1
} else {
    // deny the request, show an error
}
```

<!--Java-->
```java
String sub = "alice"; // the user that wants to access a resource.
String obj = "data1"; // the resource that is going to be accessed.
String act = "read"; // the operation that the user performs on the resource.

if (e.enforce(sub, obj, act) == true) {
    // permit alice to read data1
} else {
    // deny the request, show an error
}
```

<!--Node.js-->
```js
const sub = 'alice'; // the user that wants to access a resource.
const obj = 'data1'; // the resource that is going to be accessed.
const act = 'read'; // the operation that the user performs on the resource.

if ((await e.enforce(sub, obj, act)) === true) {
    // permit alice to read data1
} else {
    // deny the request, show an error
}
```

<!--PHP-->
```php
$sub = "alice"; // the user that wants to access a resource.
$obj = "data1"; // the resource that is going to be accessed.
$act = "read"; // the operation that the user performs on the resource.

if ($e->enforce($sub, $obj, $act) === true) {
    // permit alice to read data1
} else {
    // deny the request, show an error
}
```

<!--Python-->
```python
sub = "alice"  # the user that wants to access a resource.
obj = "data1"  # the resource that is going to be accessed.
act = "read"  # the operation that the user performs on the resource.

if e.enforce(sub, obj, act):
    # permit alice to read data1
    pass
else:
    # deny the request, show an error
    pass
```

<!--.NET-->
```csharp
var sub = "alice";  # the user that wants to access a resource.
var obj = "data1";  # the resource that is going to be accessed.
var act = "read";  # the operation that the user performs on the resource.

if (await e.EnforceAsync(sub, obj, act)) 
{
    // permit alice to read data1
}
else
{
    // deny the request, show an error
}
```

<!--Delphi-->
```delphi
if casbin.enforce(['alice,data1,read']) then
  // Alice is super happy as she can read data1
else
  // Alice is sad
```

<!--Rust-->
```rust
  let sub = "alice"; // the user that wants to access a resource.
  let obj = "data1"; // the resource that is going to be accessed.
  let act = "read"; // the operation that the user performs on the resource.

  if e.enforce((sub, obj, act)).await? {
      // permit alice to read data1
  } else {
      // error occurs
  }
```

<!--END_DOCUSAURUS_CODE_TABS-->

Casbin also provides API for permission management at run-time. For example, You can get all the roles assigned to a user as below:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
roles := e.GetRolesForUser("alice")
```

<!--Java-->
```java
Roles roles = e.getRolesForUser("alice");
```

<!--Node.js-->
```js
const roles = await e.getRolesForUser('alice');
```

<!--PHP-->
```php
$roles = $e->getRolesForUser("alice");
```

<!--Python-->
```python
roles = e.get_roles_for_user("alice")
```

<!--.NET-->
```csharp
var roles = e.GetRolesForUser("alice");
```

<!--Delphi-->
```delphi
```

<!--Rust-->
```rust
let roles = e.get_roles_for_user("alice");
```

<!--END_DOCUSAURUS_CODE_TABS-->

See [Management API](/docs/en/management-api) and [RBAC API](/docs/en/rbac-api) for more usage.

Please refer to the test cases for more usage.
