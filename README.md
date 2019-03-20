# colorfulLearn2018
生成清华大学网络学堂（2018版）换装的插件代码。
## 这是在干什么
网络学堂自带的蓝色配色有点太扎眼了，这个程序将生成一段js代码，运行于Chrome的TamperMonkey等插件中，自动将学堂的蓝色换为清华紫。
## 变成清华紫
如果仅仅想换成清华紫，将[ChangeColor.js](tampermonkey/ChangeColor.js)的内容复制到TamperMonkey的脚本窗口中，保存即可。TamperMonkey的使用教程见[官网](https://tampermonkey.net/)。
## 变成其他颜色
首先运行
```bash
yarn
```
修改[index.js](index.js)中的tarColor变量值为目标颜色的RGB，随后运行
```bash
yarn start
```
最后同样复制[ChangeColor.js](tampermonkey/ChangeColor.js)。
## License
MIT
