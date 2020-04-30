### Install ApacheBench
```
apt-get install apache2-utils
```
### Usage
```
#ab [OPTION] [URL]
#-r              Don't exit on socket receive errors.
#-d              Show testing result
#-n <number>     Number of requests to perform
#-c <number>     Number of multiple requests to make at a time (concurrency)

ab -d -r -n 100000 -c 1000 http://k8s.achronaz.com/test
ab -d -r -n 100000 -c 1000 http://swarm.achronaz.com/test
```
