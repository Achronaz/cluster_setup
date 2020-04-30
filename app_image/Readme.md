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
docker build -t achronaz/stress-test .
docker images
```
### Deploy to Kubernetes Cluster
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# if you want to make some change for the app just edit  deployment.yaml or service.yaml
# then run "kubectl apply -f deployment.yaml -f service.yaml"
```
### Run on Swarm Cluster
```
docker service create --replicas 2 --name nodestress achronaz/stress-test:v1
# if you want to make some change for the app
# run "docker service update [option] servicename"
```
### Run on Docker
```
#run image and reflect port <container_port:host_port>
docker run -p 8080:8080 --name=stressTest -d achronaz/stress-test:v1
```

