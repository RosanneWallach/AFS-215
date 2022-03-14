module.exports = function calculator(arg, num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(arg === "Additon"){
            return num1 + num2
        }
        if(arg === "Subtractiion"){
            return num1 - num2
        }
        if(arg === "Multiply"){
            return num1 * num2
        }
        if(arg === "Divide"){
            return num1 / num2
        }
    } else {
        return "Wrong! Please try again!"
    }
}