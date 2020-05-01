### Install python3 and pip
```
apt-get install python3-pip
apt-get install vagrant
```
### Setup k8s cluster via kubespray
```
git clone https://github.com/kubernetes-sigs/kubespray.git
cd kubespray
sudo pip install -r requirements.txt
vagrant up
rm -rf ~/.kube #if previous cache exist
mkdir -p ~/.kube/ && cp ./inventory/sample/artifacts/admin.conf ~/.kube/config

# details for deploying and scaling application 
# please go through ./app_image/readme.md

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