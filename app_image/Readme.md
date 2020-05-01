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
docker build -t [image tag] .
docker login docker.io
docker push [image tag]
```
### Deploy or Upldate on Kubernetes Cluster
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# if you want to make some change for the app just edit  deployment.yaml or service.yaml
# then run "kubectl apply -f deployment.yaml -f service.yaml"
```
### Deploy and Update on Swarm Cluster
```
docker service create --replicas 2 --name [service name] [image tag]
docker service update [option] [service name]
```
### Run on Docker
```
docker run -p 8080:8080 --name [container name] -d [image tag]
```

