const x_class = 'x'
const o_class = 'circle'
let boxElements = document.querySelectorAll('[data-box]')
const container = document.getElementById('container')
const winningText = document.querySelector('.winning-text')
const winningMessageElement = document.getElementById('winningMessage')
const restartBtn = document.getElementById('restartButton')
const winning_possibilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let hexTurn;

startGame()
// hexTurn = false
function startGame(){
    hexTurn = true
    boxElements.forEach(box =>{
        box.addEventListener('click', handleEvent, { once: true })
    })

    containerHover()
}

function handleEvent(e){
    const cell = e.target
    const currentClass = hexTurn ? x_class : o_class
    cell.classList.add(currentClass)

    if (checkWin(currentClass)){
        endGame(false)
    }else if (isDraw()){
        endGame(true)
    }else{
        switchTurns()
        containerHover()
    }
}

function switchTurns(){
    hexTurn = !hexTurn
}

function containerHover(){
    container.classList.remove(x_class)
    container.classList.remove(o_class)

    hexTurn ? container.classList.add(x_class) : 
    container.classList.add(o_class)
}

function checkWin(currentClass){
    return winning_possibilities.some(possibility => {
        return possibility.every(index => {
            return boxElements[index].classList.contains(currentClass)
        })
    })
}

function isDraw(){
    return [...boxElements].every(box => {
        return box.classList.contains(x_class) || box.classList.contains(o_class)
    })
}

function endGame(draw){
    if (draw){
        winningText.innerText = 'Draw!'
    }else{
        winningText.innerText = `${ hexTurn ? "X's" : "O's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

restartBtn.addEventListener('click', () => {
    winningMessageElement.classList.remove('show')
    boxElements.forEach(box => {
        box.classList.remove(x_class)
        box.classList.remove(o_class)
    })
    startGame()
})