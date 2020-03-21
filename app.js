let app = new Vue({
    el: '#app',
    data: {
        greeting: 'Hello Vue~!!!',
        age: 30,
    }, 
    methods: {
        add() {
            this.age++;
        }
    }
})