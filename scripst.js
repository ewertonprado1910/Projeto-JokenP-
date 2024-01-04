
const result = document.querySelector(".result")

const scorePeople = document.getElementById("score-people")
const scoreMachine = document.getElementById("score-machine")

let scorePeopleNumber = 0
let scoreMachineNumber = 0

const playPeople = (choices) => {
    gamePlay(choices, playMachine())
}

const playMachine = () => {
    const choice = ["rock", "paper", "scissours"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]
}
const gamePlay = (people, machine) => {

    console.log(" Pessoa: " + people + " Maquina: " + machine)

    if (people === machine) {
       result.innerHTML = "Empatou &#128528;"
        

    } else if (
        people === "paper" && machine === "rock" ||
        people === "rock" && machine === "scissours" ||
        people === "scissours" && machine === "paper"
    ) {
        scorePeopleNumber++
        scorePeople.innerHTML = scorePeopleNumber
        result.innerHTML = "Você ganhou &#128526;"
        

    } else {
        scoreMachineNumber++
        scoreMachine.innerHTML = scoreMachineNumber
        result.innerHTML = "Você perdeu  &#128557;"
    }

}
