### Install Grafana
```
sudo su
apt-get install -y adduser libfontconfig1
wget https://dl.grafana.com/oss/release/grafana_6.7.3_amd64.deb
dpkg -i grafana_6.7.3_amd64.deb
systemctl daemon-reload
systemctl start grafana-server
```
### Install MySQL
```
apt-get install mysql-server
```
### Create Database for Grafana
```
mysql
mysql> CREATE DATABASE Grafana;
mysql> CREATE USER 'grafana_admin'@'localhost' IDENTIFIED BY '$Rr123741456852';
mysql> GRANT ALL PRIVILEGES ON Grafana.* TO 'grafana_admin'@'localhost';
mysql> exit
```
### Reset Grafana admin password
```
sqlite3 /var/lib/grafana/grafana.db
sqlite> update user set password = '59acf18b94d7eb0694c61e60ce44c110c7a683ac6a8f09580d626f90f4a242000746579358d77dd9e570e83fa24faa88a8a6', salt = 'F3FAxVm33R' where login = 'admin';
sqlite> exit
```
[password reset details](https://somoit.net/icinga/cannot-login-grafana-reset-password)
