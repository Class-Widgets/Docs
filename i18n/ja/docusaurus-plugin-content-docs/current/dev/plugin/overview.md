# 开始编写您的第一个插件

恭喜你来到这一步！现在我们足矣自己编写一个能在 Class Widgets 运行的插件了。

## 设置开发环境 {#setting-up-environment}

详见[“配置 Class Widgets 开发环境”](../configuration)

## 创建项目 {#create-project}

您可以通过项目模板来快速构建一个可以运行的插件。

1. 前往[插件模板仓库](https://github.com/Class-Widgets/cw-plugin-template)中使用此模板创建您的插件仓库；

![image.png](/dev/plugin-overview-1.png)

:::note
若您希望您的插件能在“插件广场”上架的话，请注意仓库的命名请不要与在“插件广场”的任意项目重合。\
:::

## 插件配置文件 {#configuration}

插件配置文件将会位于项目根目录下的plugin.json，配置文件包含了插件的基本信息。使用插件模板创建的项目的配置文件已经配置，您只需按需进行微调。\
下面将会是配置文件的基本属性：

#### 预览： {#preview}

```json

{  
    "name": "Class Widgets 插件模板",  
    "description": "这里是简介，用简短的语言描述插件的功能。",  
    "version": "1.0.0",  
    "plugin_ver": 1,  
    "author": "你的名字",  
    "settings": true,  

    "url": "https://github.com/{repo-owner}/{repo}",  
    "branch": "main",  

    "update_date": "yyyy/mm/dd"  
}  

```

#### 属性： {#property}

| 名称                               | 填写类型 | 说明                                                                                                                                                            |
| -------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 名称                               | 填写类型 | 说明                                                                                                                                                            |
| name                             | str  | 插件在插件广场/管理器中显示的名称，不具备唯一性。                                                                                                                                     |
| description                      | str  | 插件的描述。                                                                                                                                                        |
| version                          | str  | 插件的版本，例如：1.0.0。                                                                                                               |
| plugin_ver  | int  | 插件面向的 Class Widgets 版本，若该版本不同于 Class Widgets 支持的插件版本，将会在“插件广场”弹出兼容性提示。您可以在 Class Widgets 的./config.ini中的Plugin->version中找到该值。 |
| author                           | str  | 插件作者，通常可填写您的 GitHub 名称。在“插件广场”中点击其将会跳转至您的 GitHub 账户页面                                                                                                         |
| settings                         | bool | 若您的插件有写设置页，请填写true，否则填写false。                                                                                                                                 |
| url                              | str  | 插件的仓库地址，例如：https://github.com/{repo-owner}/{repo}                                                                             |
| branch                           | str  | 您的插件分支，例如：mainmaster。                                                                                                                                         |
| update_date | str  | 插件的更新时间，例如2099/12/31，此值通常会自行更新。                                                                                                                               |

## 启动预制插件 {#run-example}

若您将您的项目放置在 Class Widgets 的 plugins 文件夹，即可方便地调试插件。\
1在“设置”中启用您的插件；\
![](/dev/plugin-overview-2.png)]
2重新启动 Class Widgets；\
3若在控制台中看到如下内容即代表插件成功加载。

```sh

2099-12-32 09:41:00.000 | SUCCESS  | plugin:load_plugins:40 - 加载插件成功：plugins.cw-example-plugin 

```

## 继续开发…… {#more}

您可以继续根据本文档来进一步了解如何开发插件，当然如果有什么不明白的也欢迎一起交流探讨。