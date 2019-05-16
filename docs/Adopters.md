---
id: adopters
title: Our Adopters
---

## Direct integration

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Name | Description | Model | Policy
----|----|----|----
[VMware Harbor](https://github.com/goharbor/harbor) | VMware's open source trusted cloud native registry project that stores, signs, and scans content. | [Code](https://github.com/goharbor/harbor/blob/master/src/common/ram/casbin.go#L30-L51) | [Code](https://github.com/goharbor/harbor/blob/master/src/common/ram/casbin.go#L53-L132)
[Intel RMD](https://github.com/intel/rmd) | Intel's resource management daemon. | [.conf](https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/model.conf) | [.csv](https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/policy.csv)
[VMware Dispatch](https://github.com/vmware/dispatch) | A framework for deploying and managing serverless style applications. | [Code](https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers.go#L46-L55) | [Code](https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers_test.go#L35-L45)
[Skydive](https://github.com/skydive-project/skydive) | An open source real-time network topology and protocols analyzer. | [Code](https://github.com/skydive-project/skydive/blob/master/config/config.go#L136-L140) | [.csv](https://github.com/skydive-project/skydive/blob/master/rbac/policy.csv)
[Zenpress](https://github.com/insionng/zenpress) | A CMS system written in Golang. | [.conf](https://github.com/insionng/zenpress/blob/master/content/config/rbac_model.conf) | [Gorm](https://github.com/insionng/zenpress/blob/master/model/user.go#L53-L77)
[Argo CD](https://github.com/argoproj/argo-cd) | GitOps continuous delivery for Kubernetes. | [.conf](https://github.com/argoproj/argo-cd/blob/master/util/rbac/model.conf) | [.csv](https://github.com/argoproj/argo-cd/blob/master/util/rbac/builtin-policy.csv)
[Muxi Cloud](https://github.com/muxiyun/Mae) | PaaS of Muxi Cloud, an easier way to manage Kubernetes cluster. | [.conf](https://github.com/muxiyun/Mae/blob/master/conf/casbinmodel.conf) | [Code](https://github.com/muxiyun/Mae/blob/master/pkg/casbin/initPolicy.go#L21-L95)
[EngineerCMS](https://github.com/3xxx/EngineerCMS) | A CMS to manage knowledge for engineers. | [.conf](https://github.com/3xxx/EngineerCMS/blob/master/conf/rbac_model.conf) | [SQLite](https://github.com/3xxx/EngineerCMS/blob/master/database/engineer.db)
[Cyber Auth API](https://github.com/CyberlifeCN/cyber-auth-api) | A Golang authentication API project. | [.conf](https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_model.conf) | [.csv](https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_policy.csv)
[IRIS Community](https://github.com/irisnet/iris-community) | Website for IRIS Community Activities. | [.conf](https://github.com/irisnet/iris-community/blob/master/authz/authz_model.conf) | [.csv](https://github.com/irisnet/iris-community/blob/master/authz/authz_policy.csv)
[Metadata DB](https://github.com/Bnei-Baruch/mdb) | BB archive metadata database. | [.conf](https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_model.conf) | [.csv](https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_policy.csv)
[Qilin API](https://github.com/ProtocolONE/qilin.api) | ProtocolONE's licenses managemen tool for game content. | [Code](https://github.com/ProtocolONE/rbac/blob/master/model.go) | [.csv](https://github.com/ProtocolONE/rbac/tree/master/conf)

<!--Java-->
Name | Description | Model | Policy
----|----|----|----
[lighty.io](https://github.com/PantheonTechnologies/lighty-core) | OpenDaylight's solution for SDN controller. | [README](https://github.com/PantheonTechnologies/lighty-core/blob/6f2ceaae6a68e08c96d14d2fa8ee060ad9f61606/lighty-examples/lighty-controller-springboot-netconf/README.md#security) |

<!--END_DOCUSAURUS_CODE_TABS-->


## Integration via plugin

Name | Description | Plugin | Model | Policy
----|----|----|----|----
[Docker](https://github.com/docker/docker) | The world's leading software container platform | [casbin-authz-plugin](https://github.com/casbin/casbin-authz-plugin) ([recommended by Docker](https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins)) | [.conf](https://github.com/casbin/casbin-authz-plugin/blob/master/examples/basic_model.conf) | [.csv](https://github.com/casbin/casbin-authz-plugin/blob/master/examples/basic_policy.csv)
[Gobis](https://github.com/orange-cloudfoundry/gobis) | [Orange](https://github.com/orange-cloudfoundry)'s lightweight API Gateway written in go | [casbin](https://github.com/orange-cloudfoundry/gobis-middlewares/tree/master/casbin) | [Code](https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/model.go#L52-L65) | [Request](https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/adapter.go#L46-L64)
