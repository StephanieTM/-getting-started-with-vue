var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

new Vue({
    el: '#demo',
    data: {
        show: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'this is the first one'},
            {text: 'this is the second one'},
            {text: 'this is the third one'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'vegs' },
            { id: 1, text: 'fruits' },
            { id: 2, text: 'whatever' },
        ]
    }
});
