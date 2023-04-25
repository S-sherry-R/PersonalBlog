---
title: 笔记
date: 2022-08-12
category:
 - 后端
tag:
 - LINUX
---

## 常用命令
### 启动jar包

````shell
nohup java -jar name.jar >log.txt 2>&1 &
````
将标准错误和标准输出都重定向到log.txt中

### 查看运行中的端口号

````shell
netstat -nultp
````

### 查看日志

````shell
tail -f log.txt      ---查看日志的后几行
tail -1000f log.txt    ---查看日志的后1000行
````

### 删除文件夹、文件

````shell
rm -rf mkdirname   ---删除文件夹
rm -f name   ---删除文件
````

### 启动redis

````shell
./redis-server redis.conf
````

### 先杀掉相关进程

```shell
ps -ef |grep jar
kill id
```

### 强制杀进程

```shell
kill -9 xxxxx
```

### 内存

```shell
free -h
fdisk -l
df -hl
```

### linux中查看文件占用情况

```shell
du -s /* | sort -nr
```

### 查看linux系统日志

```shell
/var/message(当某个进程运行内存过大时，会被linux的OOM killer杀掉)
```

### 查看进程信息

`ps -x`

-a，查看所有

-u，以用户（user）的格式显示

-x，显示后台进程运行参数

-ef，以全格式显示进程所有信息，包括父进程Pid，创建人，创建时间，进程号。等等

::: info 一般项目中，我们首先要查询一个进程，并对其进行删除会用以下命令

ps -a | grep helloworld

:::

## 查看并对外开放端口

#### 1、iptables

查看端口是否可访问：`telnet ip` 端口号 （如本机的35465：`telnet localhost 35465`）

开放的端口位于`/etc/sysconfig/iptables`中

查看时通过`more /etc/sysconfig/iptables` 命令查看

或者通过`iptables -nL`

如果想开放端口（如：8889）

（1）通过`vi /etc/sysconfig/iptables` 进入编辑增添一条`-A INPUT -p tcp -m tcp --dport 8889 -j ACCEPT` 即可

（2）执行 `/etc/init.d/iptables restart` 命令将iptables服务重启

（3）保存 `/etc/rc.d/init.d/iptables save`

注：如若不想修改iptables表，可以直接输入下面命令：

`iptables -I INPUT -p tcp --dport 8889 -j ACCEPT`

附：参考自：[http://www.cnblogs.com/alimac/p/5848372.html](http://www.cnblogs.com/alimac/p/5848372.html)

若`/etc/sysconfig/iptables`不存在，

原因：在新安装的linux系统中，防火墙默认是被禁掉的，一般也没有配置过任何防火墙的策略，所有不存在`/etc/sysconfig/iptables`文件。

解决：

在控制台使用iptables命令随便写一条防火墙规则，如：`iptables -P OUTPUT ACCEPT`
使用`service iptables save`进行保存，默认就保存到了`/etc/sysconfig`目录下的iptables文件中

#### 2、firewall

1、登陆mysql

`mysql -u root -p`

2、设置访问地址

如果你想允许用户root从ip为192.168.1.123的主机连接到mysql服务器，并使用root作为密码

```shell
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.1.123'IDENTIFIED BY 'password' WITH GRANT OPTION;
```

3、刷新

`flush privileges;`

4、防火墙开启

开启端口3306

`firewall-cmd --zone=public --add-port=3306/tcp --permanent`

5、重启防火墙

`firewall-cmd --reload`

6、查看已经开放的端口

`firewall-cmd --list-ports`

## 设置开机自启

```shell
cd /etc/rc.d    ---进入rc.d
chmod +x rc.local   ----给rc.local赋予可执行权限
---在rc.d下新建start.sh脚本
---在rc.local中加入   /etc/rc.d/start.sh
````
如果要启动tomcat，则需要设置java的环境变量，因为启动的时候java的路径还未加载。

## redis配置和数据迁移

#### Redis安装配置

1、下载Redis
可以直接在官网下载
[http://download.redis.io/releases/](http://download.redis.io/releases/)
可以选择自己需要的版本
将压缩包放在/usr/local下（可以放在其他目录下，方便以后寻找）

2、解压、编译安装
解压：

````shell
tar -zxvf redis-4.0.1.tar.gz
````

进入解压后的文件，编译、安装

````shell
cd redis-4.0.1
make 
make install
````

3、修改配置文件，开启Redis

````shell
vim redis.conf
````

将 daemonize no 改为daemonize yes，可以让服务在后台启动

开启Redis并测试：

````shell
redis-server redis.conf
````


进入控制台使用ping命令测试连通性，如果现实PONG表示连接成功

````shell
redis-cli
````

#### Redis迁移

在旧服务器中
使用CONFIG GET dir找到数据存放目录为/usr/local/bin，使用save对数据进行备份

````shell
[root@localhost redis-4.0.1]# redis-cli			#进入控制台
127.0.0.1:6379> CONFIG GET dir		#查看数据存放的目录
"dir"
"/usr/local/bin"			#数据存放目录
127.0.0.1:6379> save			#通过save对目录进行备份
OK
127.0.0.1:6379> quit		#退出
````

可以在/usr/local/bin找到一个dump.rdb文件，这个就是我们的备份文件，将这个文件发送到我们的新的服务器的数据存放的目录中

````shell
scp dump.rdb root@新服务器IP:/usr/local/redis/redis-4.0.1
````

重新启动Redis服务
可以使用ps -ef | grep redis查找进程号然后使用kill杀死进程，在使用redis-server redis.conf启动Redis


