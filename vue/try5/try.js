var app1 = new Vue({
    el: '#app-1',
    data: {
        message: ''
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: ''
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        checkedNames: []
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        picked: []
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
       selected: ''
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        selected: []
    }
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
        ]
    }
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        toggle: 'no',
        pick: '',
        a: 'yes',
        selected: '',
    }
});

var app9 = new Vue({
    el: '#app-9',
    data: {
        msg: 'default',
        age: '',
        paragraph: ''
    }
});
