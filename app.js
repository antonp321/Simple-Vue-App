new Vue({
    el: "#exercise",

    data: {
        value: ""
    },

    methods:{
        alertFunc: function() {
            alert("someAlert");
        },
        getValue: function(e) {
            this.value = e.target.value;
        }
    }

});