new Vue({

    el:"#app",

    data:{

        startTheGame: false,
        messages: [],

        //player properties
        playerHealth: 80,
        playerBarWidth: 80,

        //monster properties
        monsterHealth: 80,
        monsterBarWidth: 80
    },

    computed:{
        playerBarStyle: function(){
            var objectToReturn = {
                width: this.playerBarWidth + "%"
            };

            return objectToReturn
        },

        monsterBarStyle: function(){
            var objectToReturn = {
                width: this.monsterBarWidth + "%"
            };

            return objectToReturn
        }
    },

    methods:{

        setMonstersHealth: function(monstersHealth){
            this.monsterHealth = monstersHealth;
            this.monsterBarWidth = monstersHealth;
        },

        setPlayersHealth: function(playersHealth){
            this.playerHealth = playersHealth;
            this.playerBarWidth = playersHealth;
        },

        heal: function(){
            this.setPlayersHealth(this.playerHealth + 14);

            var monsterDmg = Math.floor(Math.random() * (21) + 1);
            this.setPlayersHealth(this.playerHealth - monsterDmg);

            this.messages.push(
                {
                    text: "Player healed with 14 HP.",
                    classToAttach: "player-turn"
                },
                {
                    text: "Monster damaged with " + monsterDmg + " HP.",
                    classToAttach: "monster-turn"
                }
            )
        },

        startNewGame: function(){
            this.setMonstersHealth(100);
            this.setPlayersHealth(100);

            this.startTheGame = true;

            this.messages = [];
        },

        makeAttack: function(isTheAttackSpecial){

            var monsterMin = 0;
            var monsterMax = 0;
            var playerMin = 0;
            var playerMax = 0;

            if(!isTheAttackSpecial){
                monsterMin = 2;
                monsterMax = 7;
                playerMin = 5;
                playerMax = 10;
            }
            else{
                monsterMin = 1;
                monsterMax = 10;
                playerMin = 10;
                playerMax = 15;
            }

            var playerDmg = Math.floor(Math.random() * (playerMax - playerMin + 1)) + playerMin;
            var monsterDmg = Math.floor(Math.random() * (monsterMax - monsterMin + 1)) + monsterMin;

            this.setMonstersHealth(this.monsterHealth - playerDmg);
            this.setPlayersHealth(this.playerHealth - monsterDmg);

            this.messages.push(
                {
                    text: "Player damaged with "  + playerDmg + " HP.",
                    classToAttach: "player-turn"
                },
                {
                    text: "Monster damaged with " + monsterDmg + " HP.",
                    classToAttach: "monster-turn"
                }
            )
        }
    },

    watch:{
        playerHealth: function(value){
            if(value >= 100){
                this.setPlayersHealth(100);
            }
        },
        monsterHealth: function(value){
            if(value <= 0){
                alert("YOU'VE KILLED THE MONSTER !!!");
                this.startTheGame = false;
            }
        }
    }

});