
var game = (function(){
    let chooseButton = document.querySelectorAll('.choice');
    let resetButton = document.querySelector('.reset');
    let player; let computer; let initMarker;
    let gameBoard = document.querySelector('.gameBoard')
    // let cell;

    // board
    let boardObject ={
        cellArray: [1,2,3,4,5,6,7,8,9],
        populate: function(){
            this.cellArray.forEach(e=> {
                cell = document.createElement('div');
                cell.classList.add('cell');
                gameBoard.appendChild(cell);

                cell.addEventListener('click', markerSet,{once:true})

            })
        }
        
    }

    //player choice
    var playerChoice = function(e){
        player = e.target.innerHTML;
        // e.classList.add('active');
        console.log(player)
    }

    //computer choice
    var computerChoice = function(){
        // computer
    }
    //marker set player
    var markerSet = function(e){
        e.target.innerHTML = player;
    }
    //marker set computer
    var markerSetBot = function(e){
        e.target.innerHTML = computer;
    }
    //switch turns
    var switchTurn = function(){
        
    }
    //reset
    var reset = function(){
        
    }
    //winner 
    var winner = function(){

    }

    //Events
        var events= {
            choice: function(){
                // chooseButton.classList.('active');
                chooseButton.forEach(button=> button.addEventListener('click', playerChoice));
            },
            computer: function(){

            },
            marker: function(){
                // boardObject.cellArray.forEach(cell => cell.addEventListener('click', markerSet,{once:true}))
            },
            switch:function(){
                
            },
            winnerD: function(){

            },
            reset: function(){
                resetButton.addEventListener('click', reset);
            }
        }
        return {events,boardObject};


})();

game.events.choice();
game.events.marker();
game.boardObject.populate();