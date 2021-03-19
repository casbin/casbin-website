---
id: tutorials
title: Tutorials
---

Before reading, please note that some tutorials are for the Casbin's model and work for all Casbin implementations in different languages. Some other tutorials are language-specific.

### Our Papers

- [PML: An Interpreter-Based Access Control Policy Language for Web Services](https://arxiv.org/abs/1903.09756)

This paper digs deeply into the design details about Casbin. Please cite the following BibTex if you use Casbin/PML as a reference in your paper:

```bibtex
@article{luo2019pml,
  title={PML: An Interpreter-Based Access Control Policy Language for Web Services},
  author={Luo, Yang and Shen, Qingni and Wu, Zhonghai},
  journal={arXiv preprint arXiv:1903.09756},
  year={2019}
}
```

- [Access Control Policy Specification Language Based on Metamodel (in Chinese)](http://www.jos.org.cn/1000-9825/5624.htm)

This is another longer-version paper published in Journal of Software. The citation for different formats (Refworks, EndNote, etc.) can be found at: [(another version) Access Control Policy Specification Language Based on Metamodel (in Chinese)](https://kns.cnki.net/kcms/detail/Detail.aspx?dbname=CJFDLAST2020&filename=RJXB202002012&v=)

### Videos

- [A Secure Vault - implementing authorization middleware with Casbin - JuniorDevSG](https://www.youtube.com/watch?v=OTT84oplR9o)
- [Sharing user permissions in a micro-service architecture based on Casbin (in Russian)](https://www.youtube.com/watch?v=Z5dUxH4PqYM)
- [Nest.js - Casbin RESTful RBAC authorization midleware](https://www.youtube.com/watch?v=mWlPNrCgVdE)
- [Gin Tutorial Chapter 10: Learn Casbin basic models in 30 minutes](https://www.bilibili.com/video/BV1qz4y167XP)
- [Gin Tutorial Chapter 11: Coding, API and custom function in Casbin](https://www.bilibili.com/video/BV13r4y1M7AC)
- [Gin + Casbin: Learning Permissions in Action (in Chinese)](https://www.jtthink.com/course/132)
- [jCasbin Basics: A simple RBAC example (in Chinese)](https://www.jtthink.com/course/play/2706)
- [Golang's RBAC based on Casbin (in Chinese)](https://www.bilibili.com/video/BV1Kf4y1U7iJ)
- [Learning Gin + Casbin (1): Opening & Overview (in Chinese)](https://www.bilibili.com/video/BV1bp4y1a7je)
- [ThinkPHP 5.1 + Casbin: Introduction (in Chinese)](https://www.bilibili.com/video/BV1kz4y1Z7vd)
- [ThinkPHP 5.1 + Casbin: RBAC authorization (in Chinese)](https://www.bilibili.com/video/BV1A541187M4)
- [ThinkPHP 5.1 + Casbin: RESTful & Middleware (in Chinese)](https://www.bilibili.com/video/BV1uk4y117up)
- [Quick Start for PHP-Casbin (in Chinese)](https://www.bilibili.com/video/BV1dK4y1L7xy)

### PERM Meta-Model (Policy, Effect, Request, Matchers)

- [Modeling Authorization with PERM in Casbin](https://www.narendraj9.dev/posts/generalized-authz.html)
- [Designing a Flexible Permissions System with Casbin](https://medium.com/silo-blog/designing-a-flexible-permissions-system-with-casbin-f5d97fef17b8)
- [Access control with PERM and Casbin (in Persian)](https://vrgl.ir/npwoy)
- [RBAC? ABAC? .. PERM! New Way of Authorization for Cloud-Based Web Services and Apps (in Russian)](https://habr.com/ru/post/539778/)
- [Practice & Examples of Flexible Authorization Using Casbin & PERM (in Russian)](https://habr.com/ru/post/540454/)
- [Permission management with Casbin (in Chinese)](http://www.cnblogs.com/wang_yb/archive/2018/11/20/9987397.html)
- [Analysis of Casbin (in Chinese)](https://www.cnblogs.com/xiaohunshi/p/10372881.html)
- [Design of System Permissions (in Chinese)](https://github.com/xizhibei/blog/issues/101)
- [Casbin: A Permission Engine (in Chinese)](https://github.com/xizhibei/blog/issues/102)
- [Implementing ABAC with Casbin (in Chinese)](https://www.cnblogs.com/studyzy/p/11380736.html)
- [Source code analysis of Casbin (in Chinese)](https://www.cnblogs.com/yjf512/p/12200206.html)
- [Permission evaluation with Casbin (in Chinese)](https://cloud.tencent.com/developer/article/1534674)
- [Casbin: Library of the day for Go (in Chinese)](https://juejin.im/post/5ee6c93ce51d45787d3484a1)

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->

### HTTP & RESTful

- [Basic Role-Based HTTP Authorization in Go with Casbin](https://zupzup.org/casbin-http-role-auth) (or [Chinese translation](https://studygolang.com/articles/12323))

### Beego

- [Using Casbin with Beego: 1. Get started and test (in Chinese)](https://blog.csdn.net/hotqin888/article/details/78460385)
- [Using Casbin with Beego: 2. Policy storage (in Chinese)](https://blog.csdn.net/hotqin888/article/details/78571240)
- [Using Casbin with Beego: 3. Policy query (in Chinese)](https://blog.csdn.net/hotqin888/article/details/78992250)
- [Using Casbin with Beego: 4. Policy update (in Chinese)](https://blog.csdn.net/hotqin888/article/details/80032538)
- [Using Casbin with Beego: 5. Policy update (continued) (in Chinese)](https://blog.csdn.net/hotqin888/article/details/80092285)

### Gin

- [Tutorial: Integrate Gin with Cabsin](https://dev.to/maxwellhertz/tutorial-integrate-gin-with-cabsin-56m0)
- [Policy enforcements on K8s with Pipeline](https://banzaicloud.com/blog/policy-enforcement-k8s/)
- [Authentication and authorization in Gin application with JWT and Casbin](https://medium.com/@tienbm90/authentication-and-authorization-in-gin-application-with-jwt-and-casbin-a56bbbdec90b)
- [Backend API with Go: 1. Authentication based on JWT (in Chinese)](https://studygolang.com/topics/6998)
- [Backend API with Go: 2. Authorization based on Casbin (in Chinese)](https://studygolang.com/topics/6999)
- [Using Go's authorization library Casbin with Gin and GORM (in Japanese)](https://www.zaneli.com/blog/20181203)

### Echo

- [Web authorization with Casbin](http://klotzandrew.com/blog/authorization-with-casbin)

### Iris

- [Iris + Casbin: Practice for permission management (in Chinese)](https://zxc0328.github.io/2018/05/14/casbin-iris/)
- [Role-based access control for HTTP based on Casbin (in Chinese)](https://studyiris.com/example/exper/casbin.html)
- [Learning iris + Casbin from scratch](https://learnku.com/articles/41416)

### VMware Harbor

- [Casbin: Golang access control framework (in Chinese)](http://www.growingdev.com/articles/2020/01/12/1578838858526.html)
- [Access control in Harbor (in Chinese)](http://www.growingdev.com/articles/2020/01/10/1578670203670.html)

### Argo CD

- [Organizational RBAC in Argo CD with Casbin](https://argoproj.github.io/argo-cd/operator-manual/rbac/)

### GShark

- [GShark: Scan for sensitive information in Github easily and effectively (in Chinese)](https://mp.weixin.qq.com/s?__biz=MzI3MjA3MTY3Mw==&mid=2247483770&idx=1&sn=9f02c2803e1c946e8c23b16ff3eba757&chksm=eb396fecdc4ee6fa2f378e846f354f45acf6e6f540cfd54190e9353df47c7707e3a2aadf714f&token=115330850&lang=zh_CN#rd)

<!--Java-->

### SprintBoot

- [jCasbin: a more light-weight permission management solution (in Chinese)](https://blog.csdn.net/waynelee0809/article/details/85702551)
- [Integrating jCasbin with JFinal (in Chinese)](http://www.jfinal.com/share/842)

<!--Node.js-->

### Express

- [How to Add Role-Based-Access-Control to Your Serverless HTTP API on AWS](https://dev.to/matttyler/how-to-add-role-based-access-control-to-your-serverless-http-api-on-aws-17bk)

### Nest

- [How to Create Role based Authorization Middleware with Casbin and Nest.js](https://dev.to/dwipr/how-to-create-role-based-authorization-middleware-with-casbin-and-nest-js-52gm)
- [nest.js: Casbin RESTful RBAC authorization middleware (Video)](https://www.youtube.com/watch?v=mWlPNrCgVdE)
- [A Demo App of Attribute-based Access Control in Node.js Based on Casbin](https://github.com/Jarvie8176/casbin-example)
- [Multi tenant SaaS starter kit with cqrs graphql microservice architecture](https://github.com/juicycleff/ultimate-backend)

### Fastify

- [Access Control in Node.js with Fastify and Casbin](https://www.nearform.com/blog/access-control-node-js-fastify-and-casbin/)

<!--PHP-->

- [Casbin, Powerful and Efficient ACL for Your Projects](http://phpmagazine.net/2018/11/casbin-powerful-and-efficient-acl-for-your-projects.html)

### Laravel

- [Laravel authorization: authorization library supporting ACL, RBAC, ABAC and other models](https://developpaper.com/laravel-authorization-authorization-library-supporting-acl-rbac-abac-and-other-models/)

<!--.NET-->

- [Using Casbin for authorization in dotnet](https://krishnamohan.dev/blog/using-casbin-for-authorization-in-dotnet)

<!--Rust-->

- [Basic Role-Based HTTP Authorization in Rust with Casbin](https://www.zupzup.org/rust-casbin-example/)

<!--END_DOCUSAURUS_CODE_TABS-->
