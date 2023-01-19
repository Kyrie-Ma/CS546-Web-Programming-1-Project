const questionOne = function questionOne(arr) {
    return Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2);
}

const questionTwo = function questionTwo(num) {
    let FibonacciResult; 
    if(num <=0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
        return questionTwo(num-1) + questionTwo(num-2);
}

const questionThree = function questionThree(text) {
    let count = 0;
    for(let letter of text.toLowerCase()){
        if(letter === "a"){
            count++;
        }
        else if(letter === "e"){
            count++;
        }
        else if(letter === "i"){
            count++;
        }
        else if(letter === "o"){
            count++;
        }
        else if(letter === "u"){
            count++;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    if(num > 0){
        return num * questionFour(num-1);
    }
    else if(num === 0){
        return 1;
    }
    else if(num <=0){
        return NaN;
    }
}

module.exports = {
    firstName: "Yuankai Ma", 
    lastName: "Ma", 
    studentId: "10479338",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};