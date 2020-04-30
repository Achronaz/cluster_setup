## CS4296 Cloud Computing Group 8 (2019/20 Semester B)
### Setup, Deploy and Test Application on Docker Swarm and Kubernetes
Environment: Ubuntu 18.04.4 LTS (GNU/Linux 5.3.0-46-generic x86_64) \
Youtube: [setup and deploy](https://www.youtube.com/watch?v=-rcjyEOFkvQ&feature=youtu.be) \
Domain: achronaz.com \
API(Kubernetes): [k8s.achronaz.com/test](http://k8s.achronaz.com/test) \
API(Swarm): [swarm.achronaz.com/test](http://swarm.achronaz.com/test)

```
.
├── ApacheBench.md                  #commands for apache bench testing
├── app_image
│   ├── deployment.yaml             #yaml for creating kubernetes deployment
│   ├── Dockerfile                  #Dockerfile for building images
│   ├── package.json                
│   ├── package-lock.json
│   ├── Readme.md                   
│   ├── server.js                   #source code of the app
│   └── service.yaml                #yaml for creating kubernetes service
├── Kubernetes.md                   #set up kubernetes cluster
├── legacy                          #old files backup
│   ├── Grafana.md
│   └── portainer.md
├── Readme.md
├── reverse-proxy.conf              #nginx reverse proxy config
└── swarm.md                        #set up docker swarm cluster

```