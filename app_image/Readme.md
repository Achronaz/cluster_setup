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
docker build -t Achronaz/stress-test .
docker images

#run image and reflect container:8080 to host:80
docker run -p 80:8080 -d Achronaz/stress-test

# Get container ID
docker ps

# Print app output
docker logs <container id>

# Enter the container
docker exec -it <container id> /bin/bash

# Test the app
curl -i localhost
```