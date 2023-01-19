function mean(array){
    if(!array){
        throw 'array must be exists';
    }
    var result = Array.isArray(array);
    if(result === false){
        throw 'Input must be an array';
    }
    if(array.length === 0){
        throw 'array is empty';
    }
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] != 'number'){
            throw 'array element must be number';
        }
    }
    var total = 0;
    for(var i = 0; i < array.length; i++){
        total = total + array[i];
    }
    return total / array.length;
}

function medianSquared(array){
    if(!array){
        throw 'array must be exists';
    }
    var result = Array.isArray(array);
    if(result === false){
        throw 'Input must be an array';
    }
    if(array.length === 0){
        throw 'array is empty';
    }
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] != 'number'){
            throw 'array element must be number';
        }
    }
    var tempArray = array;
    tempArray.sort();
    if(tempArray.length % 2 === 0){
        return Math.pow(((tempArray[(tempArray.length)/2-1] + tempArray[(tempArray.length)/2]) / 2) , 2);
    }
    if(tempArray.length % 2 === 1){
        return Math.pow(tempArray[parseInt((tempArray.length/2))] , 2);
    }
}

function maxElement(array){
    if(!array){
        throw 'array must be exists';
    }
    var result = Array.isArray(array);
    if(result === false){
        throw 'Input must be an array';
    }
    if(array.length === 0){
        throw 'array is empty';
    }
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] != 'number'){
            throw 'array element must be number';
        }
    }
    max = array[0];
    maxPosition = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
            maxPosition = i;
        }
    }
    return `{'${max}' : ${maxPosition}}`;
}

function fill(end, value){
    if(end <= 0){
        throw 'end must greater than 0';
    }
    if(!end){
        throw 'end must be exists';
    }
    if(typeof end != 'number'){
        throw 'end must be number';
    }
    var newArray = [];
    if(!value){
        for(var i = 0; i < 6; i++){
            newArray.push(i);
        }
        return newArray;
    }
    else{
        newArray.length = end;
        for(var i = 0; i < 6; i++){
            newArray.fill(value);
        }
        return newArray;
    }
}

function countRepeating(array){
    if(!array){
        throw 'array must be exists';
    }
    var result = Array.isArray(array);
    if(result === false){
        throw 'Input must be an array';
    }
    var result = {};
    if(array.length === 0){
        return result;
    }
    //array.forEach(function (x) { result[x] = (result[x] || 0) + 1; });
    else{
        for(var i = 0; i < array.length; i++){
            if(result[array[i]]){
                result[array[i]] += 1;
            }
            else{
                result[array[i]] = 1;
            }
        }
        for(var i = 0; i <= array.length; i++){
            if(result[array[i]] <= 1){
                delete result[array[i]];
            }
        }
        return result;
    }
}

function isEqual(arrayOne, arrayTwo){
    if(!arrayOne){
        throw 'arrayOne must be exists';
    }
    if(!arrayTwo){
        throw 'arrayTwo must be exists';
    }
    var resultOne = Array.isArray(arrayOne);
    if(resultOne === false){
        throw 'Input must be an array';
    }
    var resultTwo = Array.isArray(arrayTwo);
    if(resultTwo === false){
        throw 'Input must be an array';
    }
    if(arrayOne.length != arrayTwo.length){
        return false;
    }
    if(!arrayOne[0][0] && !arrayTwo[0][0]){
        var tempResultOne = true;
        arrayOne.sort();
        arrayTwo.sort();
        for(var i = 0; i < arrayOne.length; i++){
            if(arrayOne[i] != arrayTwo[i]){
                tempResultOne = false;
            }
        }
        return tempResultOne;
    }
    arrayOne.sort();
    arrayTwo.sort();
    for(var i = 0; i < arrayOne.length; i++){
        arrayOne[i].sort();
    }
    for(var j = 0; j < arrayTwo.length; j++){
        arrayTwo[j].sort();
    }
    var tempResultTwo = true;
    for(var i = 0; i < arrayOne.length; i++){
        for(var j = 0; j < arrayTwo.length; j++){
            if(arrayOne[i][j] != arrayTwo[i][j]){
                tempResultTwo = false;
            }
        }
    }
    return tempResultTwo;
}

module.exports = {mean, medianSquared, maxElement, fill, countRepeating, isEqual};