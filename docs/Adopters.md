---
id: adopters
title: Our Adopters
---

### Web frameworks

Name | Description
----|----
[Gin](https://github.com/gin-gonic/gin) | A HTTP web framework featuring a Martini-like API with much better performance, via plugin: [authz](https://github.com/gin-contrib/authz)
[Beego](https://github.com/astaxie/beego) | An open-source, high-performance web framework for Go, via built-in plugin: [plugins/authz](https://github.com/astaxie/beego/blob/master/plugins/authz)
[Caddy](https://github.com/mholt/caddy) | Fast, cross-platform HTTP/2 web server with automatic HTTPS, via plugin: [caddy-authz](https://github.com/casbin/caddy-authz)
[Go kit](https://github.com/go-kit/kit) | A toolkit for microservices, via built-in plugin: [plugins/authz](https://github.com/go-kit/kit/tree/master/auth/casbin)
[Revel](https://github.com/revel/revel) | A high productivity, full-stack web framework for the Go language, via plugin: [auth/casbin](https://github.com/revel/modules/tree/master/auth/casbin)
[Echo](https://github.com/labstack/echo) | High performance, minimalist Go web framework, via plugin: [echo-authz](https://github.com/labstack/echo-contrib/tree/master/casbin) (thanks to [@xqbumu](https://github.com/xqbumu))
[Iris](https://github.com/kataras/iris) | The fastest web framework for Go in (THIS) Earth. HTTP/2 Ready-To-GO, via plugin: [casbin](https://github.com/iris-contrib/middleware/tree/master/casbin) (thanks to [@hiveminded](https://github.com/hiveminded))
[Negroni](https://github.com/urfave/negroni) | Idiomatic HTTP Middleware for Golang, via plugin: [negroni-authz](https://github.com/casbin/negroni-authz)
[Chi](https://github.com/pressly/chi) | A lightweight, idiomatic and composable router for building HTTP services, via plugin: [chi-authz](https://github.com/casbin/chi-authz)
[Buffalo](https://github.com/gobuffalo/buffalo) | A Go web development eco-system, designed to make your life easier, via plugin: [buffalo-mw-rbac](https://github.com/kgosse/buffalo-mw-rbac) (thanks to [@kgosse](https://github.com/kgosse))
[Macaron](https://github.com/go-macaron/macaron) | A high productive and modular web framework in Go, via plugin: [authz](https://github.com/go-macaron/authz)
[DotWeb](https://github.com/devfeel/dotweb) | Simple and easy go web micro framework, via plugin: [authz](https://github.com/devfeel/middleware/tree/master/authz)
[Tango](https://github.com/lunny/tango) | Micro & pluggable web framework for Go, via plugin: [authz](https://github.com/tango-contrib/authz)
[Baa](https://github.com/go-baa/baa) | An express Go web framework with routing, middleware, dependency injection and http context, via plugin: [authz](https://github.com/baa-middleware/authz)

### Others

Name | Description
----|----
[VMware Harbor](https://github.com/goharbor/harbor) | VMware's open source trusted cloud native registry project that stores, signs, and scans content, via direct integration, see: [model (in code)](https://github.com/goharbor/harbor/blob/master/src/common/ram/casbin.go#L30-L51), [policy rules (in code)](https://github.com/goharbor/harbor/blob/master/src/common/ram/casbin.go#L53-L132)
[Intel RMD](https://github.com/intel/rmd) | Intel's resource management daemon, via direct integration, see: [model](https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/model.conf), [policy rules](https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/policy.csv)
[VMware Dispatch](https://github.com/vmware/dispatch) | A framework for deploying and managing serverless style applications, via direct integration, see: [model (in code)](https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers.go#L46-L55), [policy rules (in code)](https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers_test.go#L35-L45)
[Docker](https://github.com/docker/docker) | The world's leading software container platform, via plugin: [casbin-authz-plugin](https://github.com/casbin/casbin-authz-plugin) ([recommended by Docker](https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins))
[Gobis](https://github.com/orange-cloudfoundry/gobis) | [Orange](https://github.com/orange-cloudfoundry)'s lightweight API Gateway written in go, via plugin: [casbin](https://github.com/orange-cloudfoundry/gobis-middlewares/tree/master/casbin), see [model (in code)](https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/model.go#L52-L65), [policy rules (from request)](https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/adapter.go#L46-L64)
[Skydive](https://github.com/skydive-project/skydive) | An open source real-time network topology and protocols analyzer, via direct integration, see: [model (in code)](https://github.com/skydive-project/skydive/blob/master/config/config.go#L136-L140), [policy rules](https://github.com/skydive-project/skydive/blob/master/rbac/policy.csv)
[Zenpress](https://github.com/insionng/zenpress) | A CMS system written in Golang, via direct integration, see: [model](https://github.com/insionng/zenpress/blob/master/content/config/rbac_model.conf), [policy rules (in Gorm)](https://github.com/insionng/zenpress/blob/master/model/user.go#L53-L77)
[Argo CD](https://github.com/argoproj/argo-cd) | GitOps continuous delivery for Kubernetes, via direct integration, see: [model](https://github.com/argoproj/argo-cd/blob/master/util/rbac/model.conf), [policy rules](https://github.com/argoproj/argo-cd/blob/master/util/rbac/builtin-policy.csv)
[Muxi Cloud](https://github.com/muxiyun/Mae) | PaaS of Muxi Cloud, an easier way to manage Kubernetes cluster, via direct integration, see: [model](https://github.com/muxiyun/Mae/blob/master/conf/casbinmodel.conf), [policy rules (in code)](https://github.com/muxiyun/Mae/blob/master/pkg/casbin/initPolicy.go#L21-L95)
[EngineerCMS](https://github.com/3xxx/EngineerCMS) | A CMS to manage knowledge for engineers, via direct integration, see: [model](https://github.com/3xxx/EngineerCMS/blob/master/conf/rbac_model.conf), [policy rules (in SQLite)](https://github.com/3xxx/EngineerCMS/blob/master/database/engineer.db)
[Cyber Auth API](https://github.com/CyberlifeCN/cyber-auth-api) | A Golang authentication API project, via direct integration, see: [model](https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_model.conf), [policy rules](https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_policy.csv)
[IRIS Community](https://github.com/irisnet/iris-community) | Website for IRIS Community Activities, via direct integration, see: [model](https://github.com/irisnet/iris-community/blob/master/authz/authz_model.conf), [policy rules](https://github.com/irisnet/iris-community/blob/master/authz/authz_policy.csv)
[Metadata DB](https://github.com/Bnei-Baruch/mdb) | BB archive metadata database, via direct integration, see: [model](https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_model.conf), [policy rules](https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_policy.csv)
