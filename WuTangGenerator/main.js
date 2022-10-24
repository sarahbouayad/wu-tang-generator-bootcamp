// worked with Carter, Jasmine and David Ney


// Create a Wu-Tang Clan generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang name generator.

/*   
- want this generator to have 5 questions with multiple choice questions. 
- find api to generate random user names that are similar to wu tang name generators. 
- i should ask five questions related to the wu tang clan. i should offer four choices per questions and pair the results with each other to generate name. **/

// add event listener 

document.querySelector('#submit').addEventListener('click', nameGenerator)

let firstName = ['Bittah', 'Tha', 'Mad', 'Master','Dynamic', 'E-ratic', 'Wacko', 'Fearless', 'Misunderstood', 'Quiet', 'Ninja', 'Demon']
// 'Beggar', 'Professional'
let lastName = ['Madman', 'Genius', 'Hunter', 'Killah', 'Professional', 'Artist', 'Dreamer', 'Observer', 'Wizard', 'Realest', 'Assassin', 'Lover']
//  'Specialist'
console.log(firstName.length)

const results = document.querySelector('h2') 

// function to generate the name 
// declare variables for checked values of input for each lyric question
function nameGenerator(){
    let firstQuestion = parseInt(document.querySelector('input[name="firstQ"]:checked').value)
    let secondQuestion = parseInt(document.querySelector('input[name="secondQ"]:checked').value)
    let thirdQuestion = parseInt(document.querySelector('input[name="thirdQ"]:checked').value)
    let fourthQuestion = parseInt(document.querySelector('input[name="fourthQ"]:checked').value)
    let fifthQuestion = parseInt(document.querySelector('input[name="fiveQ"]:checked').value)
    // console.log(fourthQuestion)


    // write condition that adds 1 when it is 0 and 1

    let averageOfQuestion = Math.round((firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion) / 5) -1
    console.log(averageOfQuestion)

    results.innerText = firstName[averageOfQuestion] + ' ' + lastName[averageOfQuestion]

}

// function to restart button
// let restartButton = document.querySelector('#restart')
// restartButton.addEventListener("click", () => {
//     window.location.reload()
//   });


// function to uncheck buttons 

let radioInput = document.querySelectorAll('input')
let restartButton = document.querySelector('#restartButton').addEventListener('click', uncheck)

function uncheck(){
radioInput.forEach(input => input.checked = false)
} 





