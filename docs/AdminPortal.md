---
id: admin-portal
title: Admin Portal
---

We provide a [web-based portal called Casdoor](https://github.com/casbin/casdoor) for model management and policy management:

![model editor](https://hsluoyz.github.io/casbin/ui_model_editor.png)

![policy editor](https://hsluoyz.github.io/casbin/ui_policy_editor.png)

There are also 3rd-party admin portal projects that use Casbin as authorization engine. You can get started to build your own Casbin service based on these projects.

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Project | Author | Frontend | Backend | Description
----|----|----|----|----
[Casdoor](https://github.com/casbin/casdoor) | Casbin | React + Ant Design | Beego | Based on Beego + XORM + React
[gin-vue-admin](https://github.com/piexlmax/gin-vue-admin) | [@piexlmax](https://github.com/piexlmax) | Vue + Element UI | Gin | Based on Gin + GORM + Vue
[gin-admin](https://github.com/LyricTian/gin-admin) | [@LyricTian](https://github.com/LyricTian) | React + Ant Design | Gin | RBAC scaffolding based on Gin + GORM + Casbin + Ant Design React
[go-admin](https://github.com/hequan2017/go-admin) | [@hequan2017](https://github.com/hequan2017) | None | Gin | Go RESTful API gateway based on Gin + GORM + JWT + RBAC (Casbin)
[zeus-admin](https://github.com/bullteam/zeus-admin) | [bullteam](https://github.com/bullteam) | Vue + Element UI | Gin | Unified Permission management platform based on JWT + Casbin
[IrisAdminApi](https://github.com/snowlyg/IrisAdminApi) | [@snowlyg](https://github.com/snowlyg) | Vue + Element UI | Iris | Backend API based on Iris + Casbin
[Gfast](https://github.com/tiger1103/gfast) | [@tiger1103](https://github.com/tiger1103) | Vue + Element UI | Go Frame | Admin portal based on GF (Go Frame)

<!--Node.js-->
Project | Author | Frontend | Backend | Description
----|----|----|----|----
[Casbin-Role-Mgt-Dashboard-RBAC](https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC) | [@alikhan866](https://github.com/alikhan866) | React + Material UI | Express | Beginner friendly RBAC management with Enforcer integration to check enforcement result on the go

<!--Python-->
Project | Author | Frontend | Backend | Description
----|----|----|----|----
[openstack-policy-editor](https://github.com/casbin/openstack-policy-editor) | Casbin | Bootstrap | Django | The Web UI for Casbin

<!--PHP-->
Project | Author | Frontend | Backend | Description
----|----|----|----|----
[Tadmin](https://github.com/techoner/tadmin) | [@techoner](https://github.com/techoner) | AmazeUI | ThinkPHP | Non-intrusive backend framework based on ThinkPHP 5.1+
[video.tinywan.com](https://github.com/Tinywan/video.tinywan.com) | [@Tinywanner](https://github.com/Tinywan) | LayUI | ThinkPHP | RESTful API gateway based on ThinkPHP5 + ORM + JWT + RBAC (Casbin)
[laravel-casbin-admin](https://github.com/pl1998/laravel-casbin-admin) | [@pl1998](https://github.com/pl1998) | Vue + Element UI | Laravel | RBAC permission management system based on vue-element-admin and Laravel
larke-admin ([Frontend](https://github.com/deatil/larke-admin-frontend), [Backend](https://github.com/deatil/larke-admin)) | [@deatil](https://github.com/deatil) | Vue 2 + Element UI | Laravel 8 | Admin portal based on Laravel 8, JWT and RBAC

<!--END_DOCUSAURUS_CODE_TABS-->
