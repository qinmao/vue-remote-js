;
(function () {
    let vRometeJs = {}
    vRometeJs.install = function (Vue) {
        Vue.component('remote-css', {
            props: {
                hrefs: {
                    type: Array,
                    required: true
                }
            },
            data() {
                return {
                    linkNodes: []
                }
            },
            render(createElement) {
                return createElement('div')
            },
            created() {
                this.head = document.head || document.getElementsByTagName('head')[0]
                this.hrefs.forEach(href => {
                    let link = document.createElement('link')
                    link.href = href
                    link.rel = 'stylesheet'
                    this.linkNodes.push(link)
                    this.head.appendChild(link)
                })
            },
            destroyed() {
                this.linkNodes.forEach(element => {
                    this.head.removeChild(element)
                });
            }
        })
        Vue.component('remote-js', {
            data() {
                return {
                    scriptNodes: []
                }
            },
            props: {
                srcArr: {
                    type: Array,
                    required: true
                }
            },
            render(createElement) {
                return createElement('div')
            },
            created() {
                this.head = document.head || document.getElementsByTagName('head')[0]
                this.index = 0
                this.createScript(this.srcArr[this.index])
            },
            destroyed() {
                this.scriptNodes.forEach(element => {
                    this.head.removeChild(element)
                });
            },
            methods: {
                createScript(src) {
                    let script = document.createElement('script')
                    script.src = src
                    script.type = 'text/javascript'
                    this.scriptNodes.push(script)
                    this.head.appendChild(script)
                    script.onload = () => {
                        if (this.index < this.srcArr.length - 1) {
                            this.index += 1
                            this.createScript(this.srcArr[this.index])
                        } else {
                            this.$emit('scriptLoad')
                        }

                    }
                }
            }
        })
    }
    if (typeof exports === 'object') {
        module.exports = vRometeJs
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return vRometeJs
        })
    } else if (window.Vue) {
        window.vRometeJs = vRometeJs
        Vue.use(vRometeJs)
    }
})()