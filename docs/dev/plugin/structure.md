# 插件结构

### 目录 {#overview}

```

--plugin_path  
│  icon.png  # 图标文件，将显示在插件广场、插件管理器，成为插件的标志  
│  main.py  # 主程序  
│  plugin.json  # 插件信息  
|  README.md  # 插件简介信息，可在PluginPlaza查看  
│  settings.ui  # 设置页  
│  __init__.py  # 初始化文件，Class Widgets将会引入其中引用的内容  
├─ClassWidgets  # 插件基类  
│   base.py  
└─其他您需要添加的内容  
    其他自定义内容  

```

### 内容结构 {#structure}

#### main.py (主程序) {#main-py}

主程序执行的部分。  

```python

from .ClassWidgets.base import PluginBase, SettingsBase, PluginConfig  # 导入CW的基类  

class Plugin(PluginBase):  # 插件类  
    def __init__(self, cw_contexts, method):  # 初始化  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  
        """  
插件初始化，插件被执行时将会执行此部分的代码  
"""  

    def execute(self):  # 自启动执行部分  
        """  
当 Class Widgets启动时，将会执行此部分的代码  
"""  

    def update(self, cw_contexts):  # 自动更新部分（每秒更新）  
        super().update(cw_contexts)  # 获取最新接口  
        """  
Class Widgets 本体会每1秒更新一次状态，同时也会调用此部分的代码。  
可在此部分插入动态更新的内容  
"""  

class Settings(SettingsBase):  # 设置类  
    def __init__(self, plugin_path, parent=None):  # 初始化  
        super().__init__(plugin_path, parent)  
        """  
在这里写设置页面  
"""  
    # 其他代码……  

```

#### __init__.py（初始化插件） {#init-py}

__init__.py 存放了插件所需要的方法，Class Widgets将会加载其中引入的内容。  

```python

from .main import Plugin  # 从 main.py 导入 Plugin 类  
from .main import Settings  # 如果有定义设置类，则需要引入  

```