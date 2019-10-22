---
id: adapters
title: Adapters
---

In Casbin, the policy storage is implemented as an adapter (aka middleware for Casbin). A Casbin user can use an adapter to load policy rules from a storage (aka ``LoadPolicy()``), or save policy rules to it (aka ``SavePolicy()``). To keep light-weight, we don't put adapter code in the main library.

## Supported adapters

A complete list of Casbin adapters is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and we will put it in this list:)

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Adapter | Type | Author | AutoSave | Description
----|------|----|----|----
[File Adapter (built-in)](https://casbin.org/docs/en/adapters#file-adapter-built-in) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[Filtered File Adapter (built-in)](https://casbin.org/docs/en/policy-subset-loading) | File | [@faceless-saint](https://github.com/faceless-saint) | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files with policy subset loading support
[Xorm Adapter](https://github.com/casbin/xorm-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, TiDB, SQLite, SQL Server, Oracle are supported by [Xorm](https://github.com/go-xorm/xorm/)
[Gorm Adapter](https://github.com/casbin/gorm-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, Sqlite3, SQL Server are supported by [Gorm](https://github.com/jinzhu/gorm/)
[Beego ORM Adapter](https://github.com/casbin/beego-orm-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, Sqlite3 are supported by [Beego ORM](https://beego.me/docs/mvc/model/overview.md)
[SQLX Adapter](https://github.com/memwey/casbin-sqlx-adapter) | ORM | [@memwey](https://github.com/memwey) | ✅ | MySQL, PostgreSQL, SQLite, Oracle are supported by [SQLX](https://github.com/jmoiron/sqlx)
[GF ORM Adapter](https://github.com/vance-liu/gdb-adapter) | ORM | [@vance-liu](https://github.com/vance-liu) | ✅ | MySQL, SQLite, PostgreSQL, Oracle, SQL Server are supported by [GF ORM](https://goframe.org/database/gdb/database)
[Go-pg Adapter](https://github.com/MonedaCacao/casbin-pg-adapter) | SQL | [MonedaCacao](https://github.com/MonedaCacao) | ✅ | For [PostgreSQL](https://www.postgresql.org/)
[PostgreSQL Adapter](https://github.com/going/casbin-postgres-adapter) | SQL | [Going](https://github.com/going) | ❌ | For [PostgreSQL](https://www.postgresql.org/)
[RQLite Adapter](https://github.com/edomosystems/rqlite-adapter) | SQL | [EDOMO Systems](https://github.com/edomosystems) | ✅ | For [RQLite](https://github.com/rqlite/rqlite/)
[MongoDB Adapter](https://github.com/casbin/mongodb-adapter) | NoSQL | Casbin | ✅ | For [MongoDB](https://www.mongodb.com)
[RethinkDB Adapter](https://github.com/adityapandey9/rethinkdb-adapter) | NoSQL | [@adityapandey9](https://github.com/adityapandey9) | ✅ | For [RethinkDB](https://rethinkdb.com/)
[Cassandra Adapter](https://github.com/casbin/cassandra-adapter) | NoSQL | Casbin | ❌ | For [Apache Cassandra DB](http://cassandra.apache.org)
[DynamoDB Adapter](https://github.com/HOOQTV/dynacasbin) | NoSQL | [HOOQ](https://github.com/HOOQTV) | ❌ | For [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
[Dynacasbin](https://github.com/NewbMiao/dynacasbin) | NoSQL | [NewbMiao](https://github.com/NewbMiao) | ✅ | For [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
[Amazon S3 Adapter](https://github.com/Soluto/casbin-minio-adapter) | Cloud | [Soluto](https://github.com/Soluto) | ❌ | For [Minio](https://github.com/minio/minio) and [Amazon S3](https://aws.amazon.com/s3/)
[Azure Cosmos DB Adapter](https://github.com/spacycoder/cosmos-casbin-adapter) | Cloud | [@spacycoder](https://github.com/spacycoder) | ✅ | For [Microsoft Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)
[GCP Datastore Adapter](https://github.com/livingpackets/datastore-adapter) | Cloud | [LivingPackets](https://github.com/livingpackets) | ❌ | For [Google Cloud Platform Datastore](https://cloud.google.com/datastore/)
[Consul Adapter](https://github.com/ankitm123/consul-adapter) | KV store | [@ankitm123](https://github.com/ankitm123) | ❌ | For [HashiCorp Consul](https://www.consul.io/)
[Redis Adapter](https://github.com/casbin/redis-adapter) | KV store | Casbin | ❌ | For [Redis](https://redis.io/)
[Etcd Adapter](https://github.com/sebastianliu/etcd-adapter) | KV store | Casbin | ❌ | For [etcd](https://github.com/coreos/etcd)
[Bolt Adapter](https://github.com/wirepair/bolt-adapter) | KV store | [@wirepair](https://github.com/wirepair) | ❌ | For [Bolt](https://github.com/boltdb/bolt)
[Protobuf Adapter](https://github.com/casbin/protobuf-adapter) | Stream | Casbin | ❌ | For [Google Protocol Buffers](https://developers.google.com/protocol-buffers/)
[JSON Adapter](https://github.com/casbin/json-adapter) | String | Casbin | ❌ | For [JSON](https://www.json.org/)
[String Adapter](https://github.com/qiangmzsx/string-adapter) | String | [@qiangmzsx](https://github.com/qiangmzsx) | ❌ | For String

<!--Java-->
Adapter | Type | Author | AutoSave | Description
----|------|----|----|----
[File Adapter (built-in)](https://casbin.org/docs/en/adapters#file-adapter-built-in) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[JDBC Adapter](https://github.com/jcasbin/jdbc-adapter) | JDBC | Casbin | ✅ | MySQL, Oracle, PostgreSQL, DB2, Sybase, SQL Server are supported by [JDBC](https://docs.oracle.com/cd/E19226-01/820-7688/gawms/index.html)

<!--Node.js-->
Adapter | Type | Author | AutoSave | Description
----|------|----|----|----
[File Adapter (built-in)](https://casbin.org/docs/en/adapters#file-adapter-built-in) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[Filtered File Adapter (built-in)](https://casbin.org/docs/en/policy-subset-loading) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files with policy subset loading support
[String Adapter (built-in)](https://github.com/casbin/node-casbin/blob/master/src/persist/stringAdapter.ts) | String | [@calebfaruki](https://github.com/calebfaruki) | ❌ | For String
[Sequelize Adapter](https://github.com/node-casbin/sequelize-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, SQLite, Microsoft SQL Server are supported by [Sequelize](https://github.com/sequelize/sequelize)
[TypeORM Adapter](https://github.com/node-casbin/typeorm-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL, MongoDB are supported by [TypeORM](https://github.com/typeorm/typeorm)
[Mongoose Adapter](https://github.com/elasticio/casbin-mongoose-adapter) | ORM | [elastic.io](https://github.com/elasticio) | ✅ | MongoDB is supported by [Mongoose](https://mongoosejs.com/)
[Knex Adapter](https://github.com/sarneeh/casbin-knex-adapter) | ORM | [@sarneeh](https://github.com/sarneeh) | ✅ | MSSQL, MySQL, PostgreSQL, SQLite3, Oracle are supported by [Knex.js](https://knexjs.org/)
[Couchbase Adapter](https://github.com/sarneeh/casbin-knex-adapter) | NoSQL | [@MarkMYoung](https://github.com/MarkMYoung) | ✅ | For [Couchbase](https://www.couchbase.com/)
[Redis Adapter](https://github.com/NandaKishorJeripothula/node-casbin-redis-adapter) | KV store | [@NandaKishorJeripothula](https://github.com/NandaKishorJeripothula) | ❌ | For [Redis](https://redis.io/)

<!--PHP-->
Adapter | Type | Author | AutoSave | Description
----|------|----|----|----
[File Adapter (built-in)](https://casbin.org/docs/en/adapters#file-adapter-built-in) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[Database Adapter](https://github.com/php-casbin/database-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, SQLite, Microsoft SQL Server are supported by [techone/database](https://github.com/techoner/database)
[Zend Db Adapter](https://github.com/php-casbin/zend-db-adapter) | ORM | Casbin | ✅ | MySQL, PostgreSQL, SQLite, Oracle, IBM DB2, Microsoft SQL Server, Other PDO Driver are supported by [zend-db](https://docs.zendframework.com/zend-db/)
[Doctrine DBAL Adapter(Recommend)](https://github.com/php-casbin/dbal-adapter) | ORM | Casbin | ✅ | Powerful PHP database abstraction layer ([DBAL](https://github.com/doctrine/dbal)) with many features for database schema introspection and management.
[Medoo Adapter](https://github.com/php-casbin/medoo-adapter) | ORM | Casbin | ✅ | [Medoo](https://github.com/catfan/Medoo) is a lightweight PHP Database Framework to Accelerate Development, supports all SQL databases, including `MySQL`, `MSSQL`, `SQLite`, `MariaDB`, `PostgreSQL`, `Sybase`, `Oracle` and more.

<!--Python-->
Adapter | Type | Author | AutoSave | Description
----|------|----|----|----
[File Adapter (built-in)](https://casbin.org/docs/en/adapters#file-adapter-built-in) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[SQLAlchemy Adapter](https://github.com/pycasbin/sqlalchemy-adapter) | ORM | Casbin | ✅ | PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, Firebird, Sybase are supported by [SQLAlchemy](https://www.sqlalchemy.org/)
[Peewee Adapter](https://github.com/shblhy/peewee-adapter) | ORM | [@shblhy](https://github.com/shblhy) | ✅ | PostgreSQL, MySQL, SQLite are supported by [Peewee](http://docs.peewee-orm.com/)
[MongoEngine Adapter](https://github.com/zhangbailong945/mongoengine_adapter) | ORM | [@zhangbailong945](https://github.com/zhangbailong945) | ❌ | MongoDB is supported by [MongoEngine](http://mongoengine.org/)

<!--.NET-->
Adapter | Type | Author | AutoSave | Description
----|------|----|----|----
[File Adapter (built-in)](https://casbin.org/docs/en/adapters#file-adapter-built-in) | File | Casbin | ❌ | For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[EFCore Adapter](https://github.com/casbin-net/EFCore-Adapter) | ORM | Casbin | ❌ | MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle, DB2, etc. are supported by [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)

<!--END_DOCUSAURUS_CODE_TABS-->

:::note
1. If ``casbin.NewEnforcer()`` is called with an explicit or implicit adapter, the policy will be loaded automatically.
2. You can call ``e.LoadPolicy()`` to reload the policy rules from the storage.
3. If the adapter does not support the ``Auto-Save`` feature, The policy rules cannot be automatically saved back to the storage when you add or remove policies. You have to call ``SavePolicy()`` manually to save all policy rules.
:::

## Examples

Here we provide several examples:

### File adapter (built-in)

Below shows how to initialize an enforcer from the built-in file adapter:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
import "github.com/casbin/casbin"

e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")
```

<!--PHP-->
```php
use Casbin\Enforcer;

$e = new Enforcer('examples/basic_model.conf', 'examples/basic_policy.csv');
```

<!--END_DOCUSAURUS_CODE_TABS-->

This is the same with:

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
import (
    "github.com/casbin/casbin"
    "github.com/casbin/casbin/file-adapter"
)

a := fileadapter.NewAdapter("examples/basic_policy.csv")
e := casbin.NewEnforcer("examples/basic_model.conf", a)
```

<!--PHP-->
```php
use Casbin\Enforcer;
use Casbin\Persist\Adapters\FileAdapter;

$a = new FileAdapter('examples/basic_policy.csv');
$e = new Enforcer('examples/basic_model.conf', $a);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### [MySQL adapter](https://github.com/casbin/mysql-adapter)

Below shows how to initialize an enforcer from MySQL database. it connects to a MySQL DB on 127.0.0.1:3306 with root and blank password.


<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
```go
import (
    "github.com/casbin/casbin"
    "github.com/casbin/mysql-adapter"
)

a := mysqladapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/")
e := casbin.NewEnforcer("examples/basic_model.conf", a)
```

<!--PHP-->
```php
// https://github.com/php-casbin/dbal-adapter

use Casbin\Enforcer;
use CasbinAdapter\DBAL\Adapter as DatabaseAdapter;

$config = [
    // Either 'driver' with one of the following values:
    // pdo_mysql,pdo_sqlite,pdo_pgsql,pdo_oci (unstable),pdo_sqlsrv,pdo_sqlsrv,
    // mysqli,sqlanywhere,sqlsrv,ibm_db2 (unstable),drizzle_pdo_mysql
    'driver'     => 'pdo_mysql', 
    'host' => '127.0.0.1',
    'dbname' => 'test',
    'user' => 'root',
    'password' => '',
    'port' => '3306',
];

$a = DatabaseAdapter::newAdapter($config);
$e = new Enforcer('examples/basic_model.conf', $a);
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Use your own storage adapter

You can use your own adapter like below:

```go
import (
    "github.com/casbin/casbin"
    "github.com/your-username/your-repo"
)

a := yourpackage.NewAdapter(params)
e := casbin.NewEnforcer("examples/basic_model.conf", a)
```

## Load/Save at run-time

You may also want to reload the model, reload the policy or save the policy after initialization:

```go
// Reload the model from the model CONF file.
e.LoadModel()

// Reload the policy from file/database.
e.LoadPolicy()

// Save the current policy (usually after changed with Casbin API) back to file/database.
e.SavePolicy()
```

## AutoSave

There is a feature called ``Auto-Save`` for adapters. When an adapter supports ``Auto-Save``, it means it can support adding a single policy rule to the storage, or removing a single policy rule from the storage. This is unlike ``SavePolicy()``, because the latter will delete all policy rules in the storage and save all policy rules from Casbin enforcer to the storage. So it may suffer performance issue when the number of policy rules is large.

When the adapter supports ``Auto-Save``, you can switch this option via ``Enforcer.EnableAutoSave()`` function. The option is enabled by default (if the adapter supports it).

:::note
1. The ``Auto-Save`` feature is optional. An adapter can choose to implement it or not.
2. ``Auto-Save`` only works for a Casbin enforcer when the adapter the enforcer uses supports it.
3. See the ``AutoSave`` column in the above adapter list to see if ``Auto-Save`` is supported by an adapter.
:::

Here's an example about how to use ``Auto-Save``:

```go
import (
    "github.com/casbin/casbin"
    "github.com/casbin/xorm-adapter"
    _ "github.com/go-sql-driver/mysql"
)

// By default, the AutoSave option is enabled for an enforcer.
a := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0.1:3306)/")
e := casbin.NewEnforcer("examples/basic_model.conf", a)

// Disable the AutoSave option.
e.EnableAutoSave(false)

// Because AutoSave is disabled, the policy change only affects the policy in Casbin enforcer,
// it doesn't affect the policy in the storage.
e.AddPolicy(...)
e.RemovePolicy(...)

// Enable the AutoSave option.
e.EnableAutoSave(true)

// Because AutoSave is enabled, the policy change not only affects the policy in Casbin enforcer,
// but also affects the policy in the storage.
e.AddPolicy(...)
e.RemovePolicy(...)
```

For more examples, please see: https://github.com/casbin/xorm-adapter/blob/master/adapter_test.go

### How to write an adapter

All adapters should implement the [Adapter](https://github.com/casbin/casbin/blob/master/persist/adapter.go) interface by providing at least two mandatory methods:``LoadPolicy(model model.Model) error`` and ``SavePolicy(model model.Model) error``.

The other three functions are optional. They should be implemented if the adapter supports the ``Auto-Save`` feature.

Method | Type | Description
----|------|----
LoadPolicy() | mandatory | Load all policy rules from the storage
SavePolicy() | mandatory | Save all policy rules to the storage
AddPolicy() | optional | Add a policy rule to the storage
RemovePolicy() | optional | Remove a policy rule from the storage
RemoveFilteredPolicy() | optional | Remove policy rules that match the filter from the storage

:::note
If an adapter doesn't support ``Auto-Save``, it should provide an empty implementation for the three optional functions. Here's an example for Golang:
:::

```go
// AddPolicy adds a policy rule to the storage.
func (a *Adapter) AddPolicy(sec string, ptype string, rule []string) error {
	return errors.New("not implemented")
}

// RemovePolicy removes a policy rule from the storage.
func (a *Adapter) RemovePolicy(sec string, ptype string, rule []string) error {
	return errors.New("not implemented")
}

// RemoveFilteredPolicy removes policy rules that match the filter from the storage.
func (a *Adapter) RemoveFilteredPolicy(sec string, ptype string, fieldIndex int, fieldValues ...string) error {
	return errors.New("not implemented")
}
```

Casbin enforcer will ignore the ``not implemented`` error when calling these three optional functions.

### Who is responsible to create the DB?

As a convention, the adapter should be able to automatically create a database named ``casbin``  if it doesn't exist and use it for policy storage. Please use the Xorm adapter as a reference implementation: https://github.com/casbin/xorm-adapter
