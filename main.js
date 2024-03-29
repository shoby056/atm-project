#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
console.log(myBalance);
let pinCode = 786110;
let pinAnswer = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter your pin Code"
    }
]);
if (pinAnswer.pinCode === pinCode) {
    console.log("Correct Pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select the option",
            choices: ["withdraw", "checkbalance", "Fast Cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            console.log(`${amountAns.amount} withdraw successfuly`);
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is  ${myBalance}`);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(`your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fast",
                type: "number",
                message: "Selec an withdraw method",
                choices: [20000.40000, 70000, 80000,]
            },
        ]);
        if (fastCashAns.fast > myBalance) {
            console.log("you have insufficient balance");
        }
        else {
            myBalance -= fastCashAns.fast;
            console.log(`${fastCashAns.fast} Withdraw Successfuly`);
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin");
}
