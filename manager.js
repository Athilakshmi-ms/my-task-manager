// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
const prompt = require('prompt-sync')({ sigint: true });
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3", "task4"]


/*const showtasks = () => {
    console.log(tasks)
}

showtasks()

// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });*/

function hello() {
    console.log("Welcome to your task manager, Press:");
    console.log("1 : to see all your tasks");
    console.log("2 : to add a task");
    console.log("3 : to delete a task");
    console.log("4 : to mark a task as done");
    console.log("5 : to Exit the task manager");

    rl.question("what do you want to do ?", (number) => {
            if (number == 1) {
            console.log(tasks);
        }
        else if (number == 2) {
            rl.question("what task do you want to add ?", (newTask) => {
                tasks.push(newTask);
                rl.close();
            });
        }
        else if (number == 3) {
            rl.question("What task do you want to remove?", (delete) => {
                tasks.splice(delete);
            });
        }
    rl.close();
    });
};
hello();