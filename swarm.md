### Install Docker Engine
```
sudo su
apt-get update
apt-get remove docker docker-engine docker.io
apt install docker.io
systemctl start docker
systemctl enable docker
docker --version
```
### create Docker Machine
```
for i in node{1..3}; do docker-machine create --driver virtualbox $i; done
docker-machine ls
vboxmanage list vms
```
### Limit Vm Resource
```
docker-machine stop
VBoxManage modifyvm default --cpus 1
VBoxManage modifyvm default --memory 2048
docker-machine start
```
### Init and Join Swarm Cluster
#### host
```
docker-machine ssh node1
docker-machine ssh node2
docker-machine ssh node3
```
#### @node1
```
#find out the <IP Address> of node1,
ip a s

docker swarm init --advertise-addr <IP Address>
> To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-5rgvodnnugqbfiuzhvcpnb30x58zwo6oh3oefd8tbcb40lp1o7-df8tr59zzv4ocyumb31m3fezt \
    192.168.99.100:2377

# you can generate join token for worker by this command later
docker swarm join-token worker

#more information
docker info

#view node info
docker node ls

#promote node2 to manager
docker node promote node2

#promote node1 to worker
docker node deomote node1

#remove node3
docker node update -availability drain node3
docker-machine stop node3
docker node rm node3

#leave a cluster
docker swarm leave

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
