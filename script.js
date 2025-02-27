const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const topRow = document.getElementById('rowOne')
const midRow = document.getElementById('rowTwo')
const botRow = document.getElementById('rowThree')
const playSpace = document.querySelectorAll('.gridSpace')
const reset = document.getElementById('reset')
const result = document.getElementById('result')
const playerTurn = document.getElementById('playerTurn')
const winTracker = document.getElementById('winTracker')
const pOneWinTotal = document.getElementById('pOneWinTotal')
const pTwoWinTotal = document.getElementById('pTwoWinTotal')
console.log(pOneWinTotal.innerText)
console.log(pTwoWinTotal.innerText)

let curPlayer = 0 //0 is playerOne
const playerOne = '❌' // 
const playerTwo = '⭕️' // 
let turn = 0

// EVENT LISTENERS
one.addEventListener('click', function(){
    markGridLocationAndUpdatePlayerTurn(one)
})
two.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(two)
})
three.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(three)
})
four.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(four)
})
five.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(five)
})
six.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(six)
})
seven.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(seven)
})
eight.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(eight)
})
nine.addEventListener('click',function(){
    markGridLocationAndUpdatePlayerTurn(nine)
})

// how to insert value 
function markGridLocationAndUpdatePlayerTurn(gridLocation){
        if(result.innerText === ""){ //stops game if a winner is declared
            if(curPlayer === 0){
                if(gridLocation.innerText === "-"){ //stops player from playing on a claimed space
                    playerTurn.innerText = "Go for it, Player 2!"
                    gridLocation.innerText = playerOne
                    curPlayer = 1
                    console.log(gridLocation.innerText)
                    turn++
                    console.log(turn)
                    gameWon()
                }
            } else {
                if(gridLocation.innerText === "-"){
                    playerTurn.innerText = "Make a move, Player 1!"
                    gridLocation.innerText = playerTwo
                    curPlayer = 0
                    console.log(gridLocation.innerText)
                    turn++
                    console.log(turn)
                    gameWon()
                }
            }
        }
}

// I set all win condits for each player to array but wasn't sure how to apply for efficiency
const playerOneWinCondits = [one.innerText === playerOne && two.innerText === playerOne && three.innerText === playerOne,
 four.innerText === playerOne && five.innerText === playerOne && six.innerText === playerOne, 
 seven.innerText === playerOne && eight.innerText === playerOne && nine.innerText === playerOne, 
 one.innerText === playerOne && four.innerText === playerOne && seven.innerText === playerOne, 
 two.innerText === playerOne && five.innerText === playerOne && eight.innerText === playerOne, 
 three.innerText === playerOne && six.innerText === playerOne && nine.innerText === playerOne, 
 one.innerText === playerOne && five.innerText === playerOne && nine.innerText === playerOne, 
 seven.innerText === playerOne && five.innerText === playerOne && three.innerText === playerOne
]
const playerTwoWinCondits = [one.innerText === playerTwo && two.innerText === playerTwo && three.innerText === playerTwo,
four.innerText === playerTwo && five.innerText === playerTwo && six.innerText === playerTwo, 
seven.innerText === playerTwo && eight.innerText === playerTwo && nine.innerText === playerTwo, 
one.innerText === playerTwo && four.innerText === playerTwo && seven.innerText === playerTwo, 
two.innerText === playerTwo && five.innerText === playerTwo && eight.innerText === playerTwo, 
three.innerText === playerTwo && six.innerText === playerTwo && nine.innerText === playerTwo, 
one.innerText === playerTwo && five.innerText === playerTwo && nine.innerText === playerTwo, 
seven.innerText === playerTwo && five.innerText === playerTwo && three.innerText === playerTwo]

function playerOneWins(){
    result.innerText = "Player One wins!"
    playerTurn.innerText = ""
    console.log("Player One wins!")
    pOneWinTotal.innerText++
}

function playerTwoWins(){
    result.innerText = "Player Two wins!"
    playerTurn.innerText = ""
    console.log("Player Two wins!")
    pTwoWinTotal.innerText++
}

function tieTacToe(){
    result.innerText = "It's a draw!"
    playerTurn.innerText = ""
    console.log("draw")
}

        //trying to figure out how to condense this code with array.some()
 function gameWon(){
    // top horizontal win condition
    if (one.innerText === playerOne && two.innerText === playerOne && three.innerText === playerOne){
        playerOneWins()

    } else if (one.innerText === playerTwo && two.innerText === playerTwo && three.innerText === playerTwo) {
        playerTwoWins()

    }
    // center horizontal win condition
    if (four.innerText === playerOne && five.innerText === playerOne && six.innerText === playerOne){
        playerOneWins()
        
    } else if  (four.innerText === playerTwo && five.innerText === playerTwo && six.innerText === playerTwo) {
        playerTwoWins()
       
    }
    //bottom horizontal win condition
    if (seven.innerText === playerOne && eight.innerText === playerOne && nine.innerText === playerOne){
        playerOneWins()
       
    } else if  (seven.innerText === playerTwo && eight.innerText === playerTwo && nine.innerText === playerTwo) {
        playerTwoWins()
       
    }
    // left vertical win condition
    if (one.innerText === playerOne && four.innerText === playerOne && seven.innerText === playerOne){
        playerOneWins()
        
    } else if  (one.innerText === playerTwo && four.innerText === playerTwo && seven.innerText === playerTwo) {
        playerTwoWins()
       
    }
    // center vertical win condition
    if (two.innerText === playerOne && five.innerText === playerOne && eight.innerText === playerOne){
        playerOneWins()
       
    } else if  (two.innerText === playerTwo && five.innerText === playerTwo && eight.innerText === playerTwo) {
        playerTwoWins()
    
    }
    // right vertical win condition
    if (three.innerText === playerOne && six.innerText === playerOne && nine.innerText === playerOne){
        playerOneWins()
    
    } else if  (three.innerText === playerTwo && six.innerText === playerTwo && nine.innerText === playerTwo) {
        playerTwoWins()
     
    }
    // NW/SE diagonal win condition
    if (one.innerText === playerOne && five.innerText === playerOne && nine.innerText === playerOne){
        playerOneWins()
        
    } else if  (one.innerText === playerTwo && five.innerText === playerTwo && nine.innerText === playerTwo) {
        playerTwoWins()
      
    }
    // SW/NE diagonal win condition
    if (seven.innerText === playerOne && five.innerText === playerOne && three.innerText === playerOne){
        playerOneWins()
        
    } else if  (seven.innerText === playerTwo && five.innerText === playerTwo && three.innerText === playerTwo) {
        playerTwoWins()
      
    }
    // tie condition
    else if (turn === 9 && result.innerText === ""){
        tieTacToe()
    }
}

reset.addEventListener('click', resetBoard)
function resetBoard(){
    one.innerText = " - "
    two.innerText = " - "
    three.innerText = " - "
    four.innerText = " - "
    five.innerText = " - "
    six.innerText = " - "
    seven.innerText = " - "
    eight.innerText = " - "
    nine.innerText = " - "
    curPlayer = 0
    turn = 0
    playerTurn.innerText = "Make a move, Player 1!"
    result.innerText = ""
}
