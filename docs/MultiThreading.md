---
id: multi-threading
title: Multi-threading
---

If you use Casbin in a multi-threading manner, you can use the synchronized wrapper of the Casbin enforcer: https://github.com/casbin/casbin/blob/master/enforcer_synced.go (GoLang) and https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp (C++).

It also supports the ``AutoLoad`` feature, which means the Casbin enforcer will automatically load the latest policy rules from DB if it has changed. Call ``StartAutoLoadPolicy()`` to start automatically loading policy periodically and call ``StopAutoLoadPolicy()`` to stop it.
