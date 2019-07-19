var app1 = new Vue({
    el: '#app-1',
    data: {
        ok: true,
    },
    methods: {
        changeFlag: function() {
            this.ok = !this.ok;
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        loginType: 'username',
    },
    methods: {
        changeType: function() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username';
        }
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        loginType: 'username',
    },
    methods: {
        changeType: function() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username';
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        numbers: [1, 2, 3, 4, 5],
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0;
            });
        }
    }
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        numbers: [99, 56, 849, 79878, 15469],
    },
    methods: {
        even: function(numbers) {
            return numbers.filter((number) => {
                return number % 2 === 0;
            });
        }
    }
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        numbers: [1, 5, 9, 6, 3, 7, 8, 2, 4, 10],
    }
});

var app9 = new Vue({
    el: '#app-9',
    data: {
        items: [
            { msg: 'first' },
            { msg: 'second' },
            { msg: 'third' },
        ],
    }
});

Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
    ',
    props: ['title']
});

var app10 = new Vue({
    el: '#app-10',
    data: {
        newTodoText: '',
        todos: [
            { id: 1, title: 'Do the dishes.' },
            { id: 2, title: 'Take out the trash.' },
            { id: 3, title: 'Mow the lawn.' },
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});
