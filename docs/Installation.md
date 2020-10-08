---
id: installation
title: Installation
---

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
