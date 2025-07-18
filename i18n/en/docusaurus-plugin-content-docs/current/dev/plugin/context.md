# 插件接口

### 如何调用接口？ {#how-to}

仅需在 `self.cw_contexts` 中调用即可，代码如下：

```python
from .ClassWidgets.base import PluginBase  # 导入CW的基类  

class Plugin(PluginBase):  # 定义插件类  
    def __init__(self, cw_contexts, method):  
        super().__init__(cw_contexts, method)  # 调用父类初始化方法  

    def excute(self):  # 启动后执行的代码  
        pass  

    def update(self, cw_contexts):  
        super().update(cw_contexts)  # 获取最新的接口内容  
        print(f'当前天气：{self.current_weather}')  # 从 self.cw_contexts 可调用接口  

```

在 Class Widgets 加载上述内容时，将会在终端输出 Class Widgets 获取的天气信息。\
如：当前天气：多云

### 插件接口 {#detail}

#### 自定义小组件 {#customize-widget}

- Widgets_Width (dict)：获取所有被注册小组件宽度的字典实例。
- Widgets_Name (dict)：获取所有被注册小组件名称的字典实例。
- Widgets_Code (dict)：获取所有被注册小组件代号的字典实例

#### 获取课程状态 {#get-state}

- Current_Lesson (str)：当前课程名。
- State (int)：上下课状态，0为课间，1为上课。

#### 获取天气状况和通知内容 {#get-weather-and-notification}

- Weather (str)：天气状况，Class Widgets 将会把自身获取到的天气情况返回到接口。
- Temp (int)：当前温度，同上。
- Notification (dict)：检测到的通知内容。通常于

      ```python
      notification_contents = {
          "state": None, 
          "lesson_name": None, 
          "title": None, 
          "subtitle": None, 
          "content": None
      }  
      ```

    | 键（Key）                           | 内容                                      |
    | -------------------------------- | --------------------------------------- |
    | 键（Key）                           | 内容                                      |
    | state                            | 通知类型（0, 2分别为课间和放学；1为上课通知；3为预备铃；4为自定义通知） |
    | lesson_name | 课程名称（仅在1、0中生效）                          |
    | title                            | 通知标题（仅在4中生效）                            |
    | subtitle                         | 通知副标题（仅在4中生效）                           |
    | content                          | 通知标题（仅在4中生效）                            |

#### 关于插件 {#get-plugin-prop}

- `PLUGIN_PATH` (str)：获取插件的工作目录，以方便调取插件本地内容，如插件存储的图片、配置资源