### Install Packages
```
sudo su
apt-get update
apt-get remove docker docker-engine docker.io
apt install docker.io
systemctl start docker
systemctl enable docker
docker --version
apt-get install virtualbox
```
### Create Docker Machine
```
for i in node{1..3}; do docker-machine create --driver virtualbox --virtualbox-memory 2048 $i; done
vboxmanage list vms
docker-machine ls
```
### Init and Join Swarm Cluster
#### @host
```
docker-machine ssh node1
docker-machine ssh node2
docker-machine ssh node3
```
#### @node1
```
ip a s                                          #find out the <IP Address> of node1

docker swarm init --advertise-addr <IP Address>
> To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-5rgvodnnugqbfiuzhvcpnb30x58zwo6oh3oefd8tbcb40lp1o7-df8tr59zzv4ocyumb31m3fezt \
    192.168.99.100:2377

docker swarm join-token worker                  # you can generate join token for worker by this command later

docker info                                     #inspect node details
docker node ls                                  #list nodes
docker service ls                               #list services

# details for deploying and scaling application 
# please go through ./app_image/readme.md

logout
```
#### @node2
```
docker swarm join \
    --token SWMTKN-1-5rgvodnnugqbfiuzhvcpnb30x58zwo6oh3oefd8tbcb40lp1o7-df8tr59zzv4ocyumb31m3fezt \
    192.168.99.100:2377
logout
```
#### @node3
```
docker swarm join \
    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \
    192.168.99.100:2377
logout
```
### List and Remove vboxnet
```

VBoxManage list -l hostonlyifs
VBoxManage hostonlyif remove vboxnet1
```