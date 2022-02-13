---
id: contributing
title: Contributing
---

Casbin is a powerful authorization library supports access control models with many languages implementations, so long as you are good at one language, you can participate in the development of Casbin. New contributors are always welcomed.

Currently, there are mainly two types of projects.

* **Algorithms oriented**——First kind of projects are algorithms related projects for different language implementations, include most of the mainstream programming languages ranging from Golang, Java, C++ to Elixir, Dart and Rust, and their peripheral products.

[![golang](https://casbin.org/img/langs/golang.png)](https://github.com/casbin/casbin) | [![java](https://casbin.org/img/langs/java.png)](https://github.com/casbin/jcasbin) | [![nodejs](https://casbin.org/img/langs/nodejs.png)](https://github.com/casbin/node-casbin) | [![php](https://casbin.org/img/langs/php.png)](https://github.com/php-casbin/php-casbin)
----|----|----|----
[Casbin](https://github.com/casbin/casbin) | [jCasbin](https://github.com/casbin/jcasbin) | [node-Casbin](https://github.com/casbin/node-casbin) | [PHP-Casbin](https://github.com/php-casbin/php-casbin)
production-ready | production-ready | production-ready | production-ready

[![python](https://casbin.org/img/langs/python.png)](https://github.com/casbin/pycasbin) | [![dotnet](https://casbin.org/img/langs/dotnet.png)](https://github.com/casbin/Casbin.NET) | [![c++](https://casbin.org/img/langs/cpp.png)](https://github.com/casbin/casbin-cpp) | [![rust](https://casbin.org/img/langs/rust.png)](https://github.com/casbin/casbin-rs)
----|----|----|----
[PyCasbin](https://github.com/casbin/pycasbin) | [Casbin.NET](https://github.com/casbin/Casbin.NET) | [Casbin-CPP](https://github.com/casbin/casbin-cpp) | [Casbin-RS](https://github.com/casbin/casbin-rs)
production-ready | production-ready | production-ready | production-ready

* **Application oriented**——Second kind of projects are application related projects.

| Project | Demo | Details | Skill stacks |
| -- | -- | -- | -- |
| [Casdoor](https://github.com/casdoor/casdoor) | [Casdoor](https://door.casdoor.com/) | Casdoor is UI-first centralized authentication / Single-Sign-On (SSO) platform based on OAuth 2.0 / OIDC | JavaScript + React and Golang + Beego + SQL |
| [Casnode](https://github.com/casbin/casnode) | [Casbin Forum](https://forum.casbin.com) | Casnode is next generation forum software | JavaScript + React and Golang + Beego + SQL |
| [Casbin OA](https://github.com/casbin/casbin-oa) | [OA system](https://oa.casbin.com) | Casbin-OA is An official manuscript processing, evaluation and display system for Casbin technical writers | JavaScript + React and Golang + Beego + MySQL |
| [Casbin Editor](https://github.com/casbin/casbin-editor) | [Casbin Editor](https://casbin.org/casbin-editor) | Casbin-editor is a web-based Casbin model and policy editor | TypeScript + React |

## Get involved

There are many ways to contribute to Casbin, here are some ideas to get started:

* **Use Casbin and report issues!** When using Casbin, report issues to promote development of Casbin, no matter bugs or proposal. Before file an issue on GitHub, it would be better to discuss first on [Gitter](https://gitter.im/casbin/Lobby), [Casbin Forum](https://forum.casbin.com), [Google group](https://groups.google.com/g/casbin) or [QQ group: 546057381](https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885)

  > Note: When reporting an issue, please use English to describe the details of you problem.

* **Help with docs!** Contributing start from docs are a good choice to start your contribution.

* **Help solve issues!** We prepare a table containing easy tasks suitable for beginner, with different level of challenges labeled with different tags, check the table [here](https://github.com/orgs/casbin/projects/2).

## Pull Requests

Casbin uses GitHub as its developing platform. So the pull requests are the main source of contributions.

There are something you need to know before you open a pull request:

* Explain why you send this PR and what this PR would do to the repo.

* Make sure the PR does only one thing, otherwise please split it.

* If there are newly added files, please include Casbin license to the top of new file(s).

  ```
  // Copyright 2021 The casbin Authors. All Rights Reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //      http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.
  ```

* In [Casdoor](https://github.com/casdoor/casdoor), [Casnode](https://github.com/casbin/casnode) and [Casbin OA](https://github.com/casbin/casbin-oa), your might need to setup demo to show the maintainer your pull request help the development of project.

* When you open PR and commit your contribution, it would be better to use the semantic commits, format: ```<type>(<scope>): <subject>```, ```<scope>``` is optional. For more detailed usage, please see [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

## License

By contributing to Casbin, you agree that your contributions will be licensed under its Apache License.