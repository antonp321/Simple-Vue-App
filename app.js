new Vue({
    el: "#exercise",
    data: {
        name: "Anton",
        age: "24",
        imgLink: "http://sport360.com/wp-content/uploads/2018/01/1301liverpoolvmancity.jpg"
    },
    methods:{
        mutlipledAge: function(){
            return this.age*3;
        },
        randomNum: function(){
            var num = Math.floor((Math.random() * 100) + 1);
            return num;
        },
        changeName: function(e){
            this.name = e.target.value;
        }
    }

});