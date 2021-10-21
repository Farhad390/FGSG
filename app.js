const names = prompt('Enter your name :')
const userName = document.querySelector('.names')
userName.textContent = names;
console.log(names)

// The Guessing Number
let secreateNumber = Math.trunc(Math.random()*20) +1;

// Unknown Number
const whatNumber = document.querySelector('.what__number');
let scoreNumber = 20;
let highScore = 0;
// Guessing Number input
const body = document.querySelector('body')
const startGuessing = document.querySelector('.start__guessing');
const score = document.querySelector('.score')
// Cheack Button
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function(){
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log(guessNumber)


    // Right Answer
    if (guessNumber === secreateNumber){
        whatNumber.textContent = secreateNumber;
        whatNumber.style.transform = 'scale(1.5)'
        body.style.backgroundColor = 'green';
        startGuessing.textContent = `🎉 Congratulation!`;

        if (scoreNumber > highScore){
            highScore = scoreNumber;
            
            document.querySelector('.high__score').textContent = `🥇 Hightscore: ${scoreNumber}`
            
        }

        // Guessing number too High
    } else if (guessNumber > secreateNumber) {
        
        
        if (scoreNumber > 1){
            startGuessing.textContent = `📈 It's too high!`;
             console.log(`it's too High!`)
            scoreNumber--;
            score.textContent = `💯 Score: ${scoreNumber}`;
        } else {
            startGuessing.textContent = `💥 You Lost the game!`;
            score.textContent = `💯 Score: 0`;
        }
        
        


        // Guessing number too low
    } else if (guessNumber < secreateNumber){


        if (scoreNumber > 1){
            startGuessing.textContent = `📉 It's too low!`;
            console.log(`it's too low!`)
            scoreNumber--;
            score.textContent = `💯 Score: ${scoreNumber}`;
        } else {
            startGuessing.textContent = `💥 You Lost the game!`;
            score.textContent = `💯 Score: 0`;
        }
        
        
    } else if (document.querySelector('.guess').value == 0){
        startGuessing.textContent = `❌ It's not a number!`;
    }


})

// Again Button
const againBtn = document.querySelector('.again__btn')
againBtn.addEventListener('click', function (){
    scoreNumber = 20;
    score.textContent = `💯 Score: ${scoreNumber}`;

    body.style.backgroundColor = '#272727';

    whatNumber.style.transform = 'scale(1)'
    whatNumber.textContent = '?';

    
    startGuessing.textContent = `🟡 Start Guessing..`;
    secreateNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.guess').value = '';

    
})
