Vue.component('tab-home', {
    template: '<div>Home Component</div>'
});

Vue.component('tab-posts', {
    template: '<div>Posts Component</div>'
});

Vue.component('tab-archive', {
    template: '<div>Archive Component</div>'
});

var app1 = new Vue({
    el: '#app-1',
    data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    }
});