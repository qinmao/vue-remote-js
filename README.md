# v-remote-js
[![Build Status](https://travis-ci.org/qinmao/vue-remote-js.svg?branch=master)](https://travis-ci.org/qinmao/vue-remote-js)

在vue 单页应用中，引入远程js 和css 来避免全局引入的问题，
不支持IE
## Install
```shell
npm install v-remote-js  -S
```
## Quick Start
``` javascript
在 main.js 注册插件 使其成为一个全局组件
import Vue from 'vue'
import vRometeJs from 'v-remote-js'
Vue.use(vRometeJs)
```

```html
 <!-- 之后在每个xx.vue 文件中 写法如下 -->
<remote-css :hrefs="hrefs"></remote-css>
<remote-js :srcArr="srcArr" @scriptLoad="callbackFn"></remote-js>
 ```
 ```js
 // 支持加载多个远程资源，加载多个js 注意依赖顺序
 export default {
     data(){
         return {
            hrefs:['http://xxx.css'],
            srcArr:['http://xxxx1.js','http://xxxx2.js']
         }
    }
    methods:{
        // 远程js 加载完执行的回调
        callbackFn(){
        // ...写你的逻辑
        }  
    }
 }
``` 

