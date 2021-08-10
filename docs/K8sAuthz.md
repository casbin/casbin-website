---
id: k8s
title: Authorization of Kubernetes
---
[K8s-authz](https://github.com/casbin/k8s-authz) is a Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin. This middleware uses K8s validation admission webhook to check the policies defined by casbin, for every request of the k8s resources. These custom admission controllers perform some kind of validation on the request object that was forwarded by api server and based on a logic, sends back a response to api server that contains information on whether to allow or reject the request. These controllers are registered with Kubernetes using the `ValidatingAdmissionWebhook`.

The K8s API server needs to know when to send the incoming request to our admission controller. For this part, we have defined a validation webhook which would proxy the requests for any type of K8s resource/sub-resource and perform policy verification on it. The user would be allowed to perform the operations on these resources, only if the casbin enforcer authorizes it. The [enforcer](https://casbin.org/docs/en/get-started#new-a-casbin-enforcer) checks the roles of the user defined in the policies. This middleware would be deployed on the K8s cluster. 

## Requirements

Before proceeding, make sure to have the following- 
- A running k8s Cluster. 
You can either run the clusters through Docker by enabling it on the Docker Desktop or you can setup the complete K8s ecosytem locally or on your server. You can follow this detailed [guide](https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226) to setup the k8s cluster locally on Windows or this [guide](https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04) if want to setup for Linux.
- Kubectl CLI
This is the [guide](https://master--kubernetes-io-master-staging.netlify.app/docs/tasks/tools/install-kubectl-windows/) to setup it on Windows and this [guide](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) for Linux.
- OpenSSL

## Usage
- Generate the certificates and keys for every user by using openssl and running the following script:-  
```
./gen_cert.sh
```
- Build the docker image from the [Dockerfile](https://github.com/casbin/k8s-authz/blob/master/Dockerfile) manually by running the following command and then change the build version here and at the deployment [file](https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18), as per the builds. 
```
 docker build -t casbin/k8s_authz:0.1 .
```
- Define the casbin policies in the [model.conf](https://github.com/casbin/k8s-authz/blob/master/config/model.conf) and [policy.csv](https://github.com/casbin/k8s-authz/blob/master/config/policy.csv). You can refer the [docs](https://casbin.org/docs/en/how-it-works) to get to know more about the working of these policies.

- Before deploying, you can change the ports in [main.go](https://github.com/casbin/k8s-authz/blob/master/main.go) and also in the validation webhook configuration [file](https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml) depending on your usage.
- Deploy the validation controller and the webhook on k8s cluster by running:-
```
kubectl apply -f deployment.yaml
```
- For a production server, we need to create a k8s `secret` to place the certificates for security purposes. 
```
kubectl create secret generic casbin -n default \
  --from-file=key.pem=certs/casbin-key.pem \
  --from-file=cert.pem=certs/casbin-crt.pem
```
- Once, this part is done we need to change the directory of the certs in [main.go](https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26) and then in [manifests](https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22) with that of the `secret`.

Now the server should be running and ready to validate the requests for the operations on the k8s resources. 

In case of any query, you can ask on on our gitter [channel](https://gitter.im/casbin/lobby).
