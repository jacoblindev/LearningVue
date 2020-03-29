
Vue.component('clickButton', {
    template: '<button @click="count++">{{count}}</button>',
    data () {
        return {
            count: 0
        }
    }
})
Vue.component('Clickyy-shit', {
    data: function () {
      return {
        count: 300
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
new Vue({ el: '#gg'})