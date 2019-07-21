var app1 = new Vue({
    el: '#app-1',
    data: {
        counter: 0
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
           alert('Hello' + this.name + '!');
           if (event) {
               alert(event.target.tagName);
           }
        }
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        story: 'Once upon a time...'
    },
    methods: {
        say: function (message) {
            alert(message);
        },
        warn: function (message, event) {
            if (event)
                event.preventDefault();
            alert(message);
        },
        tellStory: function (str) {
            alert(str);
        }
    }
});

var item1 = {
    name: '.stop',
    description: '阻止单击事件继续传播',
    func: function () {
        alert(this.name);
    }
};

var item2 = {
    name: '.prevent',
    description: '提交事件不再重载页面',
    func: function () {
        alert(this.name);
    }
};

var item3 = {
    name: '.capture',
    description: '修饰符可以串联',
    func: function () {
        alert(this.name);
    }
};

var item4 = {
    name: '.self',
    description: '只有修饰符',
    func: function () {
        alert(this.name);
    }
};

var item5 = {
    name: '.once',
    description: '添加事件监听器时使用事件捕获模式\n即元素自身触发的事件先在此处理，然后才交由内部元素进行处理',
    func: function () {
        alert(this.name);
    }
};

var item6 = {
    name: '.passive',
    description: '只当在 event.target 是当前元素自身时触发处理函数\n即事件不是从内部元素触发的',
    func: function () {
        alert(this.name);
    }
};

var itemList = [item1, item2, item3, item4, item5, item6];
var methodList = {};
itemList.map((item) => {
    methodList[item.name.split('.')[1]] = item.func;
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        items: itemList
    },
    methods: methodList,
});
