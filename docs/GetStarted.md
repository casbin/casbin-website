---
id: get-started
title: Get Started
---

New a Casbin enforcer with a model file and a policy file:

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

:::tip
You can also initialize an enforcer with policy in DB instead of file, see [Adapters](/docs/en/adapters) section for details.
:::

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
