# 插件方法

### 如何调用方法？ {#how-to}

仅需在 `self.method` 中调用即可，代码如下：  

```python
from .ClassWidgets.base import PluginBase# 导入CW的基类  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method):  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

    def excute(self):  
        # 从 self.method 可调用方法  
        self.method.register_widget(WIDGET_CODE, WIDGET_NAME, WIDGET_WIDTH)  # 注册小组件  
        self.method.other_function()  # 和更多组件  

```

### 插件方法 {#detail}

#### 注册小组件 (register_widget) {#register_widget}

`self.method.register_widget(widget_code=str, widget_name=str, widget_width=int)`  
您可以通过此方法注册一个或多个小组件。  

```python
from .ClassWidgets.base import PluginBase# 导入CW的基类  

WIDGET_CODE = 'your-plugin-name.ui' # 插件代号  
WIDGET_NAME = '你的插件名称'  # 您的插件显示的名称  
WIDGET_WIDTH = 245  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method):  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

        self.method.register_widget(WIDGET_CODE, WIDGET_NAME, WIDGET_WIDTH)  # 注册小组件  

```

这条语句用于向 Class Widgets 注册您的小组件。  
#### 获取小组件（get_widget） {#get_widget}

`self.method.get_widget(widget_code=str)`  
您可以通过此方法获取任意一个小组件的实例，并对这个实例进行操作  

```python
"""  
其他代码  
"""  
from .ClassWidgets.base import PluginBase# 导入CW的基类  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method):  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

        self.method.register_widget(WIDGET_CODE, WIDGET_NAME, WIDGET_WIDTH)  # 注册小组件  

    def excute(self):  # 启动执行  
        self.your_plugin = self.method.get_widget(WIDGET_CODE)  # 获取小组件对象  

        """  
接下来就可以对 `self.your_plugin` 进行各种修改了。  
"""  

```

#### 修改组件内容（change_widget_content） {#change_widget_content}

`self.method.change_widget_content(widget_code=str, title=str, content=str)  `
在需求不大时，可以用此方法修改一些小组件的内容  

```python
"""  
其他代码  
"""  
from .ClassWidgets.base import PluginBase# 导入CW的基类  

WIDGET_CODE = 'your-plugin-name.ui' # 插件代号  
WIDGET_NAME = '你的插件名称'  # 您的插件显示的名称  
WIDGET_WIDTH = 245  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method):  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

        self.method.register_widget(WIDGET_CODE, WIDGET_NAME, WIDGET_WIDTH)  # 注册小组件  

```

#### 修改小组件宽度 (adjust_widget_width) {#adjust_widget_width}

`self.method.change_widget_content(widget_code=str, width=int)`  
您可以通过此方法来动态地修改小组件在屏幕上显示的宽度  

```python
"""  
其他代码  
"""  
from .ClassWidgets.base import PluginBase# 导入CW的基类  
from random import randint  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method)  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

        self.method.register_widget(WIDGET_CODE, WIDGET_NAME, WIDGET_WIDTH)  # 注册小组件  

    def update(self, cw_contexts):  
        super().update(cw_contexts)  # 获取最新的接口内容  
        random_width = randint(100, 500)  # 随机获取 100~500 的范围的整数数字  
        self.method.adjust_widget_width(WIDGET_CODE, random_width)  

```

#### 发送通知（send_notification） {#send_notification}

```python
self.method.send_notification(  
    state=int, lesson_name=str, title=str, subtitle=str, content=str, icon=str, duration=int  
)  

```

您可以通过此方法来使 Class Widgets 发送自定义的通知  

| 键（Key） | 内容 |
| --- | --- |
| 键（Key） | 内容 |
| state | 通知类型（0, 2分别为放学和下课；1为上课通知；3为预备铃；4为自定义通知） |
| lesson_name | 课程名称（仅在1、2中生效） |
| title | 通知标题（仅在4中生效） |
| subtitle | 通知副标题（仅在4中生效） |
| content | 通知标题（仅在4中生效） |
| icon | 图标，可传入任意图标的路径（如pngjpggif） |
| duration | 通知显示时长（单位：毫秒） |

```python
"""  
其他代码  
"""  
from .ClassWidgets.base import PluginBase# 导入CW的基类  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method):  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

        # 若要引用插件目录的内容，需在目录前添加插件的工作目录：  
        self.plugin_dir = self.cw_contexts['PLUGIN_PATH']  

    def excute(self):  # 启动执行  
        self.method.send_notification(  
            state=4,  # 自定义通知  
            title='通知标题'，  
            subtitle='副标题',  
            content='你好，世界。',  # 内容  
            icon=f'{self.plugin_dir}/path/to/your/image.png',  # 自定义通知图标  
            duration=5000  # 通知将显示5秒  
        )  

```