//board
var board = (function(){
    let gameBoard = document.querySelector('.gameBoard')
    let cell;
    
    let boardObject ={
        cellArray: [1,2,3,4,5,6,7,8,9],
        populate: function(){
            this.cellArray.forEach(e=> {
                cell = document.createElement('div');
                cell.classList.add('cell');
                gameBoard.appendChild(cell);
            })
        }
    }
    
    return {boardObject};
})();

board.boardObject.populate();


var game = (function(){
    let chooseButton = document.querySelectorAll('.choice');
    let resetButton = document.querySelector('.reset');
    let {boardObject} = board; let player; let computer; let initMarker;
        
    //player choice
    var playerChoice = function(e){
        player = e.target.innerHTML;
    }

    //computer choice
    var computerChoice = function(){

    }
    //marker set
    var computerChoice = function(){
        
    }
    //switch turns
    var computerChoice = function(){
        
    }
    //reset
    var computerChoice = function(){
        
    }
    //winner 
    var winner = function(){

    }

    //Events
        var events= {
            choice: function(){
                chooseButton.forEach(button=> button.addEventListener('click', playerChoice))
            },
            computer: function(){

            },
            marker: function(){
                
            },
            switch:function(){
                
            },
            winnerD: function(){

            },
            reset: function(){
            
            }
        }
        return {events,boardObject};


})();

game.events.choice();