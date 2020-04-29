### Install python3 and pip
```
apt-get install python-pip 
apt-get install vagrant
```
### Setup k8s cluster via kubespray
```
git clone https://github.com/kubernetes-sigs/kubespray.git
cd kubespray
sudo pip install -r requirements.txt
vagrant up
mkdir -p ~/.kube/config && cp ./inventory/sample/artifacts/admin.conf ~/.kube/config
```
### Useful commands
```
#commands for monitoring status
kubectl cluster-info
kubectl version --short
kubectl get nodes
kubectl get nodes -o wide
kubectl get cs
kubectl get nodes
kubectl -n kube-system get all
watch kubectl get all
```
[more details for k8s commands](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)