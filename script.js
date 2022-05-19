const cards = document.querySelectorAll('.card')
const time = document.getElementById('timer')
const score = document.getElementById('score')

//set global variables
let timer = 60
let result = 0
let isFistChoice = true

let firstCard, secondCard

//select all cards
cards.forEach(card => {card.addEventListener('click', flipCard)})

//flip card and assign to first or second card
function flipCard() {
    this.classList.add('flip')

    if(isFistChoice) {
        isFistChoice = false;
        firstCard = this
        secondCard = ''
    } else {
        if (this != firstCard){
        isFistChoice = true
        secondCard = this
        }
    }
    if(firstCard && secondCard) {
        compareCards(firstCard, secondCard)
    }
}

//compare the cards
function compareCards(cardOne, cardTwo) {
    console.log(cardOne.id, cardTwo.id, isFistChoice)
    if(cardOne.id == cardTwo.id) {
        cardOne.style.visibility = 'hidden'
        cardTwo.style.visibility = 'hidden'
        result++
        score.textContent = result
        win(result)
    } 
    else {
        setTimeout(() => {
            cardOne.classList.remove('flip'),
            cardTwo.classList.remove('flip')
        }, 2000)
    }
}

//win message
function win(result) {
    if(result == 6) {
        alert('CONGRATULATIONS! YOU WON!')
    }
}


//countdown
setInterval(countDown, 1000)

function countDown() {
    timer--
    time.textContent = timer
    if(timer == 0) {
        alert('TOO BAD, YOU RUN OUT OF TIME!')
        timer = 60
    }
    
}




 

