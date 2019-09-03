Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

Vue.component('blog-post-4', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('blog-post-5', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text')">
                Enlarge Text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('blog-post-6', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge Text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        >
    `,
});

Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `,
});


var app1 = new Vue({
    el: '#app-1'
});

var app2 = new Vue({
    el: '#app-2'
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' },
        ]
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: '<h4>Here I am</h4>' },
            { id: 2, title: 'Blogging with Vue', content: '<h4>Stop talking</h4>' },
            { id: 3, title: 'Why Vue is so fun', content: '<h4>Go get it</h4>' },
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: '<h4>Here I am</h4>' },
            { id: 2, title: 'Blogging with Vue', content: '<h4>Stop talking</h4>' },
            { id: 3, title: 'Why Vue is so fun', content: '<h4>Go get it</h4>' },
        ],
        postFontSize: 1
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: '<h4>Here I am</h4>' },
            { id: 2, title: 'Blogging with Vue', content: '<h4>Stop talking</h4>' },
            { id: 3, title: 'Why Vue is so fun', content: '<h4>Go get it</h4>' },
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount;
        }
    }
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        searchText: '',
    }
});

var app8 = new Vue({
    el: '#app-8',
});
