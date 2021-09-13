## master_java8已经不再更新，最后版本为6.2.2。最新版java8版本请移步至wrdp_java8分支

# O2OA : Java企业信息化系统,开源OA openSource OA Platform

O2OA应用开发平台是兰德纵横网络技术股份有限公司发布和维护的开源产品，是使用JavaEE技术栈，分布式架构设计的一款真正全代码开源的企业应用定制化开发平台。适用于企业OA、协同办公类信息化系统的建设和开发。

![o2oa](https://static.oschina.net/uploads/space/2018/0918/200301_N9TG_3931542.png)

O2OA平台拥有流程管理、门户管理、信息管理、数据管理和服务管理五大核心能力。用户可以直接使用平台已有功能进行信息信息化建设，平台提供了完整的用户管理，权限管理，流程和信息管理体系，并且提供了大量的开发组件和开箱即用的应用，可以大幅度减化企业信息化建设成本和业务应用开发难度。

### 若开发者学习研究O2OA，企业在O2OA应用开发平台上建设内部使用的办公系统，不闭源分发版本，不参与商业项目的使用行为不会构成侵权风险。

### 如果需要进行转售，闭源分发或者在商业项目中作为项目的一部分使用，请主动联系兰德网络公司购买商用许可。

商用许可说明：https://www.o2oa.net/license.html

技术支持服务：https://www.o2oa.net/support.html

# 其主要能力如下：

流程管理：全功能流程引擎。基于任务驱动，开放式服务驱动，高灵活性、扩展性，事件定义丰富。包含人工、自动、拆分、合并、并行、定时、服务调用、子流程等功能。应用场景丰富，可轻松实现公文、合同、项目管理等复杂工作流应用。

信息管理：具有权限控制能力的内容管理平台。支持自定义栏目、分类，表格，表单，多级权限系统，能轻松实现知识管理、通知公司、规章制度、文件管理等内容发布系统。

门户管理：具体可视化表单编辑的，支持HTML直接导入的，支持各类数据源，外部应用集成能力的，所见即所得的门户管理平台。适用于实现企业信息化门户系统，可以轻松结合O2OA提供的认证设置与其他系统进行单点认证集成。

服务管理：可以在前端脚本的形式，开发和自定义web服务，实现与后端服务数据交互的能力。

数据中心：可以通过配置轻松实现数据透视图展示，数据统计、数据可视化图表开发等等功能。

智能办公：拥有语音办公、人脸识别、指纹认证、智能文档纠错、智能填表推荐等智能办公特色

移动办公：支持安卓\IOS手机APP办公，支持与企业微信和钉钉集成，支持企业私有化微信部署

开箱即用：O2OA还提供如考勤管理、日程管理、会议管理、脑图管理、便签、云文件、企业社区、执行力管理等开箱即用的应用供企业选择


# 产品特点\:

1. 代码全部开源，开发者可以下载源码进行任意，编译成自己的信息化平台。

2. 平台全功能免费，无任何功能和人数限制。

3. 支持私有化部署，下载软件安装包后可以安装在自己的服务器上，数据更安全。

4. 随时随地办公，平台支持兼容HTML5的浏览器，并且提供了原生的IOS/Android应用，并且支持钉钉和企业微信集成。

5. 高可扩展性，用户通过简单的学习后，可以自定义配置门户、流程应用、内容管理应用

更多的产品介绍、使用说明、下载、在线体验、API及讨论请移步至[http://www.o2oa.net/](http://www.o2oa.net/)


# 官方网站\:

开源主页 : https://www.oschina.net/p/o2oa

官方网站 : http://www.o2oa.net

Gitee : https://gitee.com/o2oa/O2OA  (master分支默认为java11，master_java8分支为java8)

Github : https://github.com/o2oa/o2oa

语雀文档 : https://www.o2oa.net/course

脚本API：http://www.o2oa.net/api/


# 关于正式环境数据安全相关的建议\:

O2OA自带的H2数据库是一个内嵌式的内存数据库，适合用于开发环境、功能演示环境，并不适合用作正式环境。

如果作为正式环境使用，建议您使用拥有更高性能，更加稳定的商用级别数据库。如Mysql8，Oracle12C，SQLServer 2012等。

另外，O2OA提供数据定期备份和恢复的能力，建议您开启正式环境的数据定期备份的功能，以确保数据库异常时可以进行数据恢复。


# 最新版本服务器安装包下载地址\: https://www.o2oa.net/download.html

## 支持操作系统：

    Windows 64Bit, Linux 64Bit[CentOS, RedHat, Ubuntu等], MacOS, AIX, Raspberrypi(树莓派),

    ARM_Linux,
    
    MIPS_Linux,
    
    UOS,麒麟等国产操作系统

## 支持数据库：

    自带H2数据库.

    第三方数据库: Apache Derby, Borland Interbase, Borland JDataStore, DB2, Empress, Firebird, H2 Database Engine, 
                  Hypersonic Database Engine, Informix Dynamic Server, Ingres Database, InterSystems Cache,
                  Microsoft Access, Microsoft SQL Server, Microsoft Visual FoxPro, MySQL, Oracle, Pointbase,
                  PostgreSQL, IBM solidDB, Sybase Adaptive Server Enterprise, 达梦DM7+, 人大金仓, 南大通用, 神通数据库


# 官方网盘下载\:

百度云盘：https://pan.baidu.com/s/1oBQ1atXGyXdLaYE5uAqF1w   提取码: pnk9


# 最新源码编译教程\:http://www.o2oa.net/course/ng5iqb.html


# 服务器部署教程

    Windows环境：https://www.o2oa.net/course/qq5gny.html
    
    Linux环境：https://www.o2oa.net/course/yto8af.html


# 最新版本 v6.2.x\:

功能新增

[数据中心]新增了数据模型配置，支持前台内容管理文档，流程管理work，自建表数据的Excel导入的功能

[流程管理]新增了表单中数据导入组件，增加API的功能

[流程管理]新增了表单中数据模板组件，为允许自定义界面的多层次的数据网格，增加API的功能

[流程管理]新增了表单中数据表格组件，以替代历史版本中的数据网格，增加API的功能

[流程管理]新增了服务调用接口的判断功能

[流程管理]新增了待阅文件填写意见功能

[流程管理]新增了表单控件：阅读意见

[移动办公]新增了IOS部分新版UI，全文搜索的功能

[移动办公]新增了Android部分新版UI，全文搜索的功能

[移动办公]新增了Android端app在线打包的功能

[移动办公]新增了钉钉PC端支持的功能

[内容管理]新增了信息发布单个文档刷新权限的功能

[内容管理]新增了发布消息到创建人的消息类型的功能

[内容管理]新增了操作日志分页查询接口的功能

[平台]新增了可定制token名称的功能

[平台]新增了日志自动清理的功能

[平台]openjpa 升级到 3.2.0

[平台]新增了支持Hadoop HDFS 作为文件存储服务器的功能

[平台]新增了服务器访问日志的功能

[平台]新增了支持更深的数据层级(>8)的功能

功能优化

[流程管理]优化了表单中的地址组件允许选择省市县的功能

[流程平台]优化了工作添加review去重的功能

[流程平台]优化了流程管理工具获取工单数据接口

[流程平台]优化了流程附件增加预留字段的功能

[流程平台]正文控件增加标题编辑功能，并同步回业务数据

[流程平台]优化正文控件word转换功能，不需要其他插件

[内容管理]优化了文档分页查询速度的功能

[内容管理]优化了文档查看权限的功能

[内容管理]优化了文档附件增加排序号并对返回结果集排序的功能

[消息通讯]优化了消息执行脚本增加message对象参数，用于获取消息类型和消息标题的功能

[数据中心]优化了视图查询条件支持多值like的功能

[数据中心]优化了视图查询增加安全性校验的功能

[数据中心]优化了自建表设计模式下查询支持同时查询总数的功能

[平台]优化了web日志输出，减少每次日志输出大小，增加配置控制日志是否输出的功能

[平台]优化了webconfig增加o2版本信息用于前端展现当前o2版本的功能

[流程引擎]优化了当一份文档中字段大于20000个时,处理速度下降的问题

[流程引擎]优化了默认情况下归档时不存储表单以减少数据存储空间开销功能

[应用市场]应用市场评分功能移至藕粉社区应用市场板块

问题修复

[流程管理]修复了表单中地址选择、组合框选择不流畅的问题

[流程管理]修复了流程回溯最后一个人工环节不显示的问题

[流程管理]修复了流程草稿模式保存权限校验错误的问题

[流程管理]修复了流程监控意见显示位置异常的问题

[流程平台]修复了通过job删除wok及关联信息后不发送消息的问题

[流程平台]修复了java11版本中jaxws 客户端调用失败的问题

[流程平台]修复了脚本中获取form的readonly属性不正常的问题

[流程平台]修复了表单设计查看html不准确的问题

[流程平台]修复了手写意见提交时，出现上载进度条的问题

[内容管理]修复了附件组件排序、替换的问题

[内容管理]修复了附件删除缓存更新的问题

[日程安排]修复了权限上的一些问题

[移动办公]修复了Android部分机型闪退的问题

[移动办公]修复了IOS端一些服务端老版本不兼容的问题

[数据中心]修复了视图的日期查询多加了一天的问题

[数据中心]修复了查询语句执行权限的问题

[人员组织]修复了根据用户和组织查询身份组织条件不起作用的问题

[人员组织]修复了个人授权相关接口的权限问题

[门户管理]修复了门户页面etag值计算错误的问题

[平台]修复了资源上传任意路径的问题

[平台]修复了在部分应用中设置工作日和休息日无效的问题

[平台]修复了南大通用 gbase8s 数据库8.8的兼容问题

[通用]修复了上一个版本语言包上的一些问题

# 协议

[AGPL-3.0 开源协议。](./LICENSE)



# 关于

[![img](./assets/O2OA-logo.jpg)](./assets/O2OA-logo.jpg)



O2OA开发平台是由 **浙江兰德纵横网路技术股份有限公司** 建立和维护的。O2OA 的名字和标志是属于 **浙江兰德纵横网路技术股份有限公司** 的注册商标。

我们 ❤️ 开源软件！看一下[我们的其他开源项目](https://github.com/o2oa)，瞅一眼[我们的博客](https://my.oschina.net/o2oa)。