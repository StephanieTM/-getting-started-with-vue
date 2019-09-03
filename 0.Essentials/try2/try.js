var app1 = new Vue({
    el: '#app-1',
    data: {
        isActive: true,
        error: null,
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            };
        }
    },
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        colorClass: 'colorText',
        sizeClass: 'bigFont',
        backgroundClass: true,
    }
});
