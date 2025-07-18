# 天气 & API Key

![help_docu – 7.png](/instr/cover/adv/weather.png)

本文将介绍 Class Widgets 中的“天气”设置，和如何获取第三方天气源的 Key。

### 介绍 {#introduction}

![weather.png](/instr/adv/weather.png)

在设置的“自定义”板块中，您可以找到如上的设置选项卡。\
您可以通过“选择城市”选项卡选取您的地区以获得当地的天气数据；还可以在“设置天气源”选项卡更改软件使用的天气源。\
💡 注意：\
某些天气源需要设置 Key 才能正常使用，若无特殊情况，仅需使用默认天气源即可。

### 获取 API Key {#api}

若您因为某些需求不得不使用其他天气源，且此天气源需要 API Key，则请继续阅读。\
💡 提示： 接下来的颜色将以“和风天气”为例，其他的天气源的获取方式也可参考。

#### Step 1. 进入网页 {#api-1}

首先，打开[和风天气开发服务](https://dev.qweather.com/)网页，然后点击“免费注册”按钮。

![wapi – 1.png](/instr/adv/wapi-1.png)

然后，注册您的“和风天气”账号并登录此账号。

#### Step 2. 打开“控制台” {#api-2}

![wapi – 2.png](/instr/adv/wapi-2.png)

在进入用户中心后，点击“开发服务控制台”按钮进入控制台。在侧边栏中选中“项目管理”，然后点击“创建项目”按钮。

![wapi – 3.png](/instr/adv/wapi-3.png)

#### Step 3. 生成 API Key {#api-3}

在“创建项目”页面中填入任意字段，并在“选择订阅”中选择免费订阅，即可创建。

![wapi – 4.png](/instr/adv/wapi-4.png)

创建项目后，选择“创建凭据”，进入此界面。

![wapi – 5.png](/instr/adv/wapi-5.png)

填入任意字段后，点击“创建”，就会进入完成页。\
在完成页，将会显示已被创建的 API Key，接下来您仅需复制 API Key，并粘贴在天气设置选项卡的“设置API Key”选项卡的文本框即可。

![wapi – 6.png](/instr/adv/wapi-6.png)