(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{314:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"环境安装和项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境安装和项目部署"}},[t._v("#")]),t._v(" 环境安装和项目部署")]),t._v(" "),s("p",[t._v("在学习完了Linux操作系统的一些基本操作之后，我们接着来看如何进行项目的环境安装和部署，包括安装JDK、Nginx服务器，以及上传我们的SpringBoot项目并运行。")]),t._v(" "),s("p",[t._v("我们可以直接使用apt进行软件的安装，它是一个高级的安装包管理工具，我们可以直接寻找对应的软件进行安装，无需再去官网进行下载，非常方便，软件仓库中默认已经帮助我们存放了大量实用软件的安装包，只需要一个安装命令就可以进行安装了。")]),t._v(" "),s("p",[t._v("实际上Ubuntu系统已经为我们自带了一些环境了，比如Python3：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('test@ubuntu-server:~$ python3\nPython 3.8.10 (default, Nov 26 2021, 20:14:08) \n[GCC 9.3.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> print("HelloWorld！")\nHelloWorld！\n>>> exit()\n')])])]),s("p",[t._v("C语言的编译工具GCC可以通过APT进行安装：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc\n")])])]),s("p",[t._v("安装后，可以编写一个简单的C语言程序并且编译为可执行文件：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("test@ubuntu-server:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" hello.c\ntest@ubuntu-server:~$ gcc hello.c "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" hello\ntest@ubuntu-server:~$ ./hello \nHello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),s("p",[t._v("而JDK实际上安装也非常简单，通过APT即可：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("test@ubuntu-server:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openjdk-8-j\nopenjdk-8-jdk           openjdk-8-jre           openjdk-8-jre-zero      \nopenjdk-8-jdk-headless  openjdk-8-jre-headless  \ntest@ubuntu-server:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openjdk-8-jdk\n")])])]),s("p",[t._v("接着我们来测试一下编译和运行，首先编写一个Java程序：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ vim Main.java\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public class Main{\n        public static void main(String[] args){\n                System.out.println("Hello World！");\n        }\n}\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ javac Main.java \ntest@ubuntu-server:~$ ls\nMain.class  Main.java\ntest@ubuntu-server:~$ java Main \nHello World！\n")])])]),s("p",[t._v("接着我们来部署一下Redis服务器：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ sudo apt install redis\n")])])]),s("p",[t._v("安装完成后，可以直接使用"),s("code",[t._v("redis-cli")]),t._v("命令打开Redis客户端连接本地的服务器：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ redis-cli\n127.0.0.1:6379> keys *\n(empty list or set)\n")])])]),s("p",[t._v("使用和之前Windows下没有区别。")]),t._v(" "),s("p",[t._v("接着我们安装一下MySQL服务器，同样的，直接使用apt即可：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt install mysql-server-8.0 \n")])])]),s("p",[t._v("我们直接直接登录MySQL服务器，注意要在root权限下使用，这样就不用输入密码了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo mysql -u root -p\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 11\nServer version: 8.0.27-0ubuntu0.20.04.1 (Ubuntu)\n\nCopyright (c) 2000, 2021, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> exit\n")])])]),s("p",[t._v("可以发现实际上就是我们之前在Windows的CMD中使用的样子，接着我们就创建一个生产环境下使用的数据库：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> create database book_manage;\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| book_manage        |\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n5 rows in set (0.01 sec)\n")])])]),s("p",[t._v("接着我们创建一个用户来使用这个数据，一会我们就可以将SpringBoot配置文件进行修改并直接放到此服务器上进行部署。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> create user test identified by '123456';\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> grant all on book_manage.* to test;\nQuery OK, 0 rows affected (0.00 sec)\n")])])]),s("p",[t._v("如果觉得这样很麻烦不是可视化的，可以使用Navicat连接进行操作，注意开启一下MySQL的外网访问。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ mysql -u test -p\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 13\nServer version: 8.0.27-0ubuntu0.20.04.1 (Ubuntu)\n\nCopyright (c) 2000, 2021, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| book_manage        |\n| information_schema |\n+--------------------+\n2 rows in set (0.01 sec)\n")])])]),s("p",[t._v("使用test用户登录之后，查看数据库列表，有book_manage就OK了。")]),t._v(" "),s("p",[t._v("最后我们修改一下SpringBoot项目的生产环境配置即可：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" smtp.163.com\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" javastudy111@163.com\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TKPGLAPDSWKGJOWK\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/book_manage\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.cj.jdbc.Driver\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jpa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("show-sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hibernate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ddl-auto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("springfox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("documentation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),s("p",[t._v("然后启动我们的项目：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("test@ubuntu-server:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" springboot-project-0.0.1-SNAPSHOT.jar \n")])])]),s("p",[t._v("现在我们将前端页面的API访问地址修改为我们的SpringBoot服务器地址，即可正常使用了。")]),t._v(" "),s("p",[t._v("我们也可以将我们的静态资源使用Nginx服务器进行代理：")]),t._v(" "),s("blockquote",[s("p",[t._v('Nginx("engine x")是一款是由俄罗斯的程序设计师Igor Sysoev所开发高性能的 Web和 反向代理 服务器，也是一个 IMAP/POP3/SMTP 代理服务器。 在高连接并发的情况下，Nginx是Apache服务器不错的替代品。')])]),t._v(" "),s("p",[t._v("Nginx非常强大，它能够通提供非常方便的反向代理服务，并且支持负载均衡，不过我们这里用一下反向代理就可以了，实际上就是代理我们的前端页面，然后我们访问Nginx服务器即可访问到静态资源，这样我们前后端都放在了服务器上（你也可以搞两台服务器，一台挂静态资源一台挂SpringBoot服务器，实现真正意义上的分离，有条件的还能上个域名和证书啥的）。")]),t._v(" "),s("p",[t._v("安装如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ sudo apt install nginx\n")])])]),s("p",[t._v("安装完成后，我们可以直接访问：http://192.168.10.4/，能够出现Nginx页面表示安装成功！")]),t._v(" "),s("p",[t._v("接着我们将静态资源上传到Linux服务器中，然后对Nginx进行反向代理配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test@ubuntu-server:~$ cd /etc/nginx/\ntest@ubuntu-server:/etc/nginx$ ls\nconf.d\t\tkoi-utf     modules-available  proxy_params\tsites-enabled  win-utf\nfastcgi.conf\tkoi-win     modules-enabled    scgi_params\tsnippets\nfastcgi_params\tmime.types  nginx.conf\t       sites-available\tuwsgi_params\ntest@ubuntu-server:/etc/nginx$ sudo vim nginx.conf\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("server {\n                listen       80;\n                server_name  192.168.10.4;\n                add_header Access-Control-Allow-Origin *;\n                location / {\n                        root /home/test/static;\n                        charset utf-8;\n                        add_header 'Access-Control-Allow-Origin' '*';\n                        add_header 'Access-Control-Allow-Credentials' 'true';\n                        add_header 'Access-Control-Allow-Methods' '*';\n                        add_header 'Access-Control-Allow-Headers' 'Content-Type,*';\n                }\n        }\n")])])]),s("p",[t._v("然后就可以直接访问到我们的前端页面了，这时再开启SpringBoot服务器即可，可以在最后添加&符号表示后台启动。")])])}),[],!1,null,null,null);s.default=n.exports}}]);