function camelCase(string){
    if(!string){
        throw 'string must be exists';
    }
    if(typeof string === "string"){
        if(string.trim().length === 0){
            throw 'the length of string must be greater than 0';
        }
    }
    if(typeof string != "string"){
        throw 'input must be string';
    }
    string = string.toLowerCase();
    text = string.split(" ");
    for(var i = 1; i < text.length; i++){
        text[i] = text[i].charAt(0).toUpperCase() + text[i].substr(1);
    }
    text = text.join("");
    return text;
}

function replaceChar(string){
    if(!string){
        throw 'string must be exists';
    }
    if(typeof string === "string"){
        if(string.trim().length === 0){
            throw 'the length of string must be greater than 0';
        }
    }
    if(typeof string != "string"){
        throw 'input must be string';
    }
    string = string.toLowerCase();
    var temp = 3;
    for(var i = 1; i < string.length; i++){
        if(string[i] === string[0].toLowerCase() || string[i] === string[0].toUpperCase()){
            if(temp % 2 === 0){
                var temp2 = string[i];
                temp2=temp2.replace(temp2, '$');
                string = string.substring(0, i) + temp2 + string.substring(i+1);
                temp = temp + 1;
            }
            else if(temp % 2 === 1){
                var temp2 = string[i];
                temp2=temp2.replace(temp2, '*');
                string = string.substring(0, i) + temp2 + string.substring(i+1);
                temp = temp + 1;
            }
        }
    }
    return string;
}

function mashUp(string1, string2){
    if(string1.trim().length < 2){
        throw 'length of string1 must at least 2 characters';
    }
    if(string2.trim().length < 2){
        throw 'length of string2 must at least 2 characters';
    }
    if(!string1){
        throw 'string1 must be exists';
    }
    if(!string2){
        throw 'string2 must be exists';
    }
    if(typeof string1 != "string"){
        throw 'input1 must be string';
    }
    if(typeof string2 != "string"){
        throw 'input2 must be string';
    }
    if(string1.length < 2){
        throw 'length of string1 must at least 2 characters';
    }
    if(string2.length < 2){
        throw 'length of string2 must at least 2 characters';
    }
    var temp = string1;
    temp = string2.substring(0, 1) + string1.substring(1);
    string2 = string1.substring(0, 1) + string2.substring(1);
    string1 = temp;
    console.log(string1);
    console.log(string2);
    var result = string1 + " " + string2
    return result;
}

module.exports = {camelCase, replaceChar, mashUp};