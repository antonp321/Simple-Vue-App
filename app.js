new Vue({
    el: '#exercise',
    data: {
        attachClass: false,
        highlightClass: "highlight",
        shrinkClass: "shrink",
        usersClass: "",
        secondUsersClass: "",
        attachNewClass: "",
        userStyles: "",
        progressBarWidthMax: "150px",
        progressBarWidthCurrentPixels: 0,
        progressBarBorderMax: "2px solid",
        progressBarCurrentObj: {},
        progressBarHeightMax: "25px",
        intervalVar: ""
    },
    computed:{
        effectStyle: function(){

            return this.startEffectObj = {
                highlight: !this.attachClass,
                shrink: this.attachClass
            };
        },

        usersClasses: function(){

            var attachNewClassBool = this.attachNewClass === "T" ? true : false;
            var objectToReturn = {
                borderColor: attachNewClassBool
            };

            objectToReturn[this.secondUsersClass] = true;

            return objectToReturn;
        },

        usersStyles: function(){
            var arrOfStyles = this.userStyles.split(',');

            var objToReturn = {
                width: "100px",
                height: "100px"
            };

            for(var i = 0; i < arrOfStyles.length; i++){
                var objKey = arrOfStyles[i].split(':')[0];
                var objValue = arrOfStyles[i].split(':')[1];

                objToReturn[objKey] = objValue;
            }

            return objToReturn;
        }
    },
    methods: {
        startEffect: function() {
            var _this = this;

            setInterval(function(){
                _this.attachClass = !_this.attachClass;
            }, 3000);
        },
        startProgress: function(){
            var _this = this;
            var currentProgressBarWidthInStr = "";

            this.intervalVar = setInterval(function(){
                _this.progressBarWidthCurrentPixels += 25;

                currentProgressBarWidthInStr = _this.progressBarWidthCurrentPixels + "px";

                _this.progressBarCurrentObj = {
                    width: currentProgressBarWidthInStr,
                    backgroundColor: "green",
                    height: _this.progressBarHeightMax
                }
            }, 2000);
        }
    },
    
    watch: {
        progressBarWidthCurrentPixels: function(value){
            if(value >= 150){
                window.clearInterval(this.intervalVar);
            }
        }
    }
});
