### Install ApacheBench
```
apt-get install apache2-utils
```
### Kubernetes
```
ab -d -r -n 100000 -c 1000 http://api.achronaz.com/test
```
### Swarm
```
ab -d -r -n 100000 -c 1000 http://www.achronaz.com/test
```