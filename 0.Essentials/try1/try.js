var demo1 = new Vue({
    el: '#demo-1',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(fullname) {
                var names = fullname.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    },
});

