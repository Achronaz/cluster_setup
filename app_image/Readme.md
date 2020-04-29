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

#run image and reflect port <container_port:host_port>
docker run -p 8080:8080 --name=stressTest -d achronaz/stress-test

# Get container ID
docker ps

# Print app output
docker logs <container id>

# Enter the container
docker exec -it <container id> /bin/bash

# Test the app
curl -i localhost:8080
```