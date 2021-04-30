---
title: Casbin Server is Launched!
author: Helong Zhang
author_title: Casbin Maintainer
author_url: http://github.com/BetaCat0
author_image_url: https://avatars.githubusercontent.com/BetaCat0
---

Some of our customers ask if Casbin can be used as a service instead of a library. The
answer is **YES**. Today, we launched the [Casbin Server](https://github.com/casbin/casbin-server) project as a concrete solution for
**Access Control as a Service**.

**Casbin Server** is under active development by our core team. It has several features:

- Purely developed in Golang.
- Can manage thousands of Casbin instances, so you can move policy enforcement logic from multiple services into one Casbin Server.
- **gRPC** is used to communicated with Casbin Server. We also consider to add the **RESTful** support in near future.
- A friendly web administrator portal is provided for non-developer administrators to manage all details like Casbin instances, models, policy storage and load balancing.



The source code is hosted on GitHub: https://github.com/casbin/casbin-server

Any issues or pull requests are welcome :)
