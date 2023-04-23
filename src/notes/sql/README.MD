---
title: 笔记
date: 2022-08-12
category:
  - 后端
tag:
  - SQL
---
## 插入数据返回主键

````sql
<insert id="add" parameterType="EStudent" useGeneratedKeys="true" keyProperty="id">
  insert into TStudent(name, age) values(#{name}, #{age})
</insert>
````
* keyProperty：默认值unset，用于设置getGeneratedKeys方法或selectKey子元素返回值将赋值到领域模型的哪个属性中
* useGeneratedKeys：取值范围true|false(默认值)，设置是否使用JDBC的getGenereatedKeys方法获取主键并赋值到keyProperty设置的领域模型属性中。MySQL和SQLServer执行auto-generated key field，因此当数据库设置好自增长主键后，可通过JDBC的getGeneratedKeys方法获取。但像Oralce等不支持auto-generated key field的数据库就不能用这种方法获取主键了

## 导入.csv格式中文乱码

编码修改成如下

![sqlCsv](/backends/sqlCsv.png)

## 查询表的结构（列名等）

````sql
SELECT column_name 
FROM information_schema.columns 
WHERE table_schema='yellowcong' AND table_name='sys_user';
````

## 常用命令

* 查看语句的sql执行顺序

`explain`

* 查看锁表的命令

```sql
show open tables where in_use>0;
```

* 查看当前进程

`show processlist;`

* 杀掉进程

`kill process_id;`

* 查看事务挂起：

```sql
select * from information_schema.innodb_trx
```

* 查看最大连接数

```sql
show variables like '%max_connection%';
```

* 重新设置最大连接数

````sql
set global max_connections=1000;
````

* 安装服务

`mysqld --install`

* 初始化

`mysqld --initialize --console`

* 开启服务

`net start mysql`

* 关闭服务

`net stop mysql`

* 登录mysql

`mysql -u root -p`

* 修改密码

```sql
alter user 'root'@'localhost' identified by 'root';(by 接着的是密码)
```

* 标记删除mysql服务

`sc delete mysql`

## 联合索引最左原则

如果我们创建了`(area, age,salary)`的复合索引，那么其实相当于创建了`(area,age,salary)`、`(area,age)`、`(area)`三个索引，这被称为最佳左前缀特性。
因此我们在创建复合索引时应该将最常用作限制条件的列放在最左边，依次递减。
