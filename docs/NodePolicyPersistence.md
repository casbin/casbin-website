---
id: node-policy-persistence
title: Node
---

In node-casbin, the policy storage is implemented as an adapter (aka middleware for node-casbin). To keep light-weight, we don't put adapter code in the main library (except the default file adapter). A complete list of node-casbin adapters is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:)

Adapter | Type | Author | Description
----|------|----|----
[File Adapter (built-in)](https://github.com/casbin/casbin/wiki/Policy-persistence#file-adapter) | File | node-casbin | Persistence for [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files
[Sequelize Adapter](https://github.com/node-casbin/sequelize-adapter) | ORM | Casbin | MySQL, PostgreSQL, SQLite, Microsoft SQL Server are supported by [Sequelize](https://github.com/sequelize/sequelize)

For details of adapters, please refer to the documentation: https://github.com/casbin/casbin/wiki/Policy-persistence
