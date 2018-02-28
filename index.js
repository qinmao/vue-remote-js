;
(function () {
    let vRometeJs = {}
    vRometeJs.install = function (Vue) {
        Vue.component('remote-js', {
            render(createElement) {
                return createElement('script', {
                    attrs: {
                        type: 'text/javascript',
                        src: this.src
                    }
                });
            },
            props: {
                src: {
                    type: String,
                    required: true,
                },
            },
            mounted() {
                if (this.$el.readyState) {
                    //IE
                    this.$el.onreadystatechange = () => {
                        if (
                            this.$el.readyState == "loaded" ||
                            this.$el.readyState == "complete"
                        ) {
                            this.$el.onreadystatechange = null;
                            this.$emit('scriptLoad')
                        }
                    };
                } else {
                    //Others
                    this.$el.onload = () => {
                        this.$emit('scriptLoad')
                    }
                }
            },
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