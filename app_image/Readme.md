### Build Nodejs App Image for Cluster Stress Test
#### Install docker and nodejs
```
#docker
#Read Swarm.md
#nodejs
apt-get install nodejs
```
### Build Docker Image
```
docker build -t [registry]/[image tag] .
docker login docker.io
#enter username and password
docker push [registry]/[image tag]
```
### Deploy or Upldate on Kubernetes Cluster
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
# if you want to make some change for the app just edit  deployment.yaml or service.yaml
# then run "kubectl apply -f deployment.yaml -f service.yaml"
# edit the number of replicas in deployment.yaml, then apply it to scale the deployment
```
### Deploy and Update on Swarm Cluster
```
docker service create --replicas 1 --name [service name] [image tag]
docker service update [option] [service name]
docker service update --replicas 3 [service name]  #scaling service to 3 replicas
```
### Run on Docker
```
docker run -p 8080:8080 --name [container name] -d [image tag]
```

