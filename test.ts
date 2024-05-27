#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta('______________WELLCOME TO NUMBER GUESSING GAME BY TEHSEEN____________'))

async function Guessing_game() {

let randomNumber= Math.floor((Math.random()*10)+1)

let GuessNumber=await inquirer.prompt([{
    name:'Guess',
    type:'number',
    message:chalk.blueBright('please guess a number from 1 to 10')
}])

if(GuessNumber.Guess===randomNumber){
    console.log(chalk.green('CONGRATULATIONS!! YOU WON'))
    console.log({"your guess":GuessNumber.Guess,"Actual number":randomNumber })
}
else if(isNaN(GuessNumber.Guess)|| (GuessNumber.Guess <=0 || GuessNumber.Guess>10)){
    console.log(chalk.red('please enter valid number from 1 to 10'))
    Guessing_game()
    
}
else{
    console.log(chalk.red('YOU LOSE'))
    console.log({"your guess":GuessNumber.Guess,"Actual number":randomNumber })


let Try_again=await inquirer.prompt([{
    name:'retry',
    type:'list',
    message:chalk.blueBright('Want to Retry ? '),
    choices:['yes','No']
}])
if(Try_again.retry==='yes'){
    Guessing_game();
}
else{
    process.exit();}
}}
Guessing_game()
