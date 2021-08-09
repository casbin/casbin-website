---
id: envoy
title: Authorization of Service Mesh through Envoy
---
[Envoy-authz](https://github.com/casbin/envoy-authz) is a middleware of Envoy which performs external RBAC & ABAC authorization through casbin. This middleware uses [Envoy's external authorization API](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html) THROUGH A gRPC server. This proxy would be deployed on any type of envoy-based service meshes like Istio.

## Requirements

- Envoy 1.17+ 
- Istio or any type of service mesh
- grpc dependencies

Dependencies are managed through `go.mod`.

## Working of Middleware

- A client would make a http request.
- Envoy proxy would send that request to grpc server.
- The grpc server would then authorize the request based on casbin policies.
- If authorized, the request would be sent through or else, it gets denied.

The grpc server is based on protocol buffer from [external_auth.proto](https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto) from Envoy.

```
// A generic interface for performing authorization check on incoming
// requests to a networked service.
service Authorization {
  // Performs authorization check based on the attributes associated with the
  // incoming request, and returns status `OK` or not `OK`.
  rpc Check(v2.CheckRequest) returns (v2.CheckResponse);
}
```
From the above proto file, we have to use `Check()` service in the authorization server.

## Usage
- Define the Casbin policies under config files by following this [guide](https://casbin.org/docs/en/how-it-works).

You can verify/test your policies on online [casbin-editor](https://casbin.org/editor/).

- Start the authorizing server by running:-
```
$ go build .
$ ./authz 
```
- Load the envoy configuration:-
```
$  envoy -c authz.yaml -l info
```
Once the envoy starts, it will start intercepting requests for the authorization process.

## Integrating to Istio
You need to send custom headers, which would contain usernames in the JWT token OF headers for this middleware to work. You can check the official [Istio docs](https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/) to get more info on modifying `Request Headers`.