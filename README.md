# v-remote-js
[![Build Status](https://travis-ci.org/qinmao/vue-remote-js.svg?branch=master)](https://travis-ci.org/qinmao/vue-remote-js)

引入远程脚本，脚本加载完成后执行回调
## Install
```shell
npm install v-remote-js  -S
```
## Quick Start
``` javascript
在main.js 注册插件 使其成为一个全局组件
import Vue from 'vue'
import vRometeJs from 'v-remote-js'
Vue.use(vRometeJs)
// 之后在每个xx.vue 文件中 写法如下
 <remote-js src="http://xxx.js" @scriptLoad="callbackFn"></remote-js>
 
 export default {
    methods:{
        callbackFn(){
        // ...写你的逻辑
        }  
    }
 }
   
``` 

