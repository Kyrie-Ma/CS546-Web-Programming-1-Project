const axios = require('axios');
async function getstocks(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    return data; // this will be the array of people objects
    }

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
    return data; // this will be the array of people objects
    }
async function listShareholders(stockName){
    if(!stockName){
        throw 'stockName must exist';
    }
    if(typeof stockName != 'string'){
        throw 'stockName must be string';
    }
    if(stockName.trim() === ''){
        throw 'stockName can not just empty spaces';
    }
    var arrayPeople = await getPeople();
    var arrayStocks = await getstocks();
    var tempBoolean = false;
    for(let i = 0; i< arrayStocks.length; i++){
        if(arrayStocks[i]["stock_name"] === stockName){
            tempBoolean = true;
        }
    }
    if(tempBoolean === false){
        throw 'stockName did not exist in the array';
    }
    var resultObject = {};
    var tempFirstName;
    var tempLastName;
    var tempArray3 = [];
    var tempArray4 = [];
    for(let i = 0; i< arrayStocks.length; i++){
        if(arrayStocks[i]["stock_name"] === stockName){
            resultObject.id = arrayStocks[i]["id"];
            resultObject.stock_name = arrayStocks[i]["stock_name"];
            for(let z = 0; z < arrayStocks[i]["shareholders"].length; z++){
                tempArray3.push(arrayStocks[i]["shareholders"][z].userId);
            }
            for(let j = 0; j < tempArray3.length; j++){
                for(let n = 0; n< arrayPeople.length; n++){
                    if(arrayPeople[n]["id"] === tempArray3[j]){
                        tempFirstName = arrayPeople[n]["first_name"];
                        tempLastName = arrayPeople[n]["last_name"];
                        tempArray4.push({first_name: tempFirstName, last_name: tempLastName, number_of_shares: arrayStocks[i]["shareholders"][j].number_of_shares});
                    }
                }
            }
        }
    }
    resultObject.shareholders = tempArray4;
    return resultObject;
}

async function totalShares(stockName){
    if(!stockName){
        throw 'stockName must exist';
    }
    if(typeof stockName != 'string'){
        throw 'stockName must be string';
    }
    if(stockName.trim() === ''){
        throw 'stockName can not just empty spaces';
    }
    var arrayStocks = await getstocks();
    var tempBoolean = false;
    for(let i = 0; i< arrayStocks.length; i++){
        if(arrayStocks[i]["stock_name"] === stockName){
            tempBoolean = true;
        }
    }
    if(tempBoolean === false){
        throw 'stockName did not exist in the array';
    }
    var tempArray = [];
    var count = 0;
    var total = 0;
    for(let i = 0; i< arrayStocks.length; i++){
        if(arrayStocks[i]["stock_name"] === stockName){
            count = arrayStocks[i]["shareholders"].length;
            for(let j = 0; j< arrayStocks[i]["shareholders"].length; j++){
                total = total + arrayStocks[i]["shareholders"][j].number_of_shares;
            }
        }
    }
    var result;
    if(count === 0){
        result = `${stockName} currently has no shareholders.`;
    }
    if(count === 1 && total === 1){
        result = `${stockName} has ${count} shareholder that own a total of ${total} share.`;
    }
    if(count === 1 && total > 1){
        result = `${stockName} has ${count} shareholder that own a total of ${total} shares.`;
    }
    if(count > 1 && total === 1){
        result = `${stockName} has ${count} shareholders that own a total of ${total} share.`;
    }
    if(count > 1 && total > 1){
        result = `${stockName} has ${count} shareholders that own a total of ${total} shares.`;
    }
    return result;
}

async function listStocks(firstName, lastName){
    if(!firstName){
        throw 'firstName must exist';
    }
    if(!lastName){
        throw 'lastName must exist';
    }
    if(typeof firstName != 'string'){
        throw 'firstName must be string';
    }
    if(typeof lastName != 'string'){
        throw 'lastName must be string';
    }
    if(firstName.trim() === ''){
        throw 'firstName can not just empty spaces';
    }
    if(lastName.trim() === ''){
        throw 'lastName can not just empty spaces';
    }
    var arrayPeople = await getPeople();
    var arrayStocks = await getstocks();
    var tempBoolean = false;
    for(let i = 0; i< arrayPeople.length; i++){
        if(arrayPeople[i]["first_name"] === firstName && arrayPeople[i]["last_name"] === lastName){
            tempBoolean = true;
        }
    }
    if(tempBoolean === false){
        throw `${firstName} ${lastName} is not in people.json`;
    }
    var tempId;
    for(let i = 0; i< arrayPeople.length; i++){
        if(arrayPeople[i]["first_name"] === firstName && arrayPeople[i]["last_name"] === lastName){
            tempId = arrayPeople[i]["id"];
        }
    }
    var count = 0;
    for(let i = 0; i< arrayStocks.length; i++){
        for(let j = 0; j < arrayStocks[i]["shareholders"].length; j++){
            if(arrayStocks[i]["shareholders"][j]["userId"] === tempId){
                count++;
            }
        }
    }
    if(count < 1){
        throw `${firstName} ${lastName} owns shares less than one company`;
    }
    var resultArray = [];
    for(let i = 0; i< arrayStocks.length; i++){
        for(let j = 0; j < arrayStocks[i]["shareholders"].length; j++){
            if(arrayStocks[i]["shareholders"][j]["userId"] === tempId){
                resultArray.push({stock_name: arrayStocks[i]["stock_name"], number_of_shares: arrayStocks[i]["shareholders"][j]["number_of_shares"]});
            }
        }
    }
    return resultArray;
}

async function getStockById(id){
    if(!id){
        throw 'id must exist';
    }
    if(typeof id != 'string'){
        throw 'id must be string';
    }
    if(id.trim() === ''){
        throw 'id can not just empty spaces';
    }
    var arrayStocks = await getstocks();
    var tempBoolean = false;
    for(let i = 0; i< arrayStocks.length; i++){
        if(arrayStocks[i]["id"] === id){
            tempBoolean = true;
        }
    }
    if(tempBoolean === false){
        throw 'id did not exist in the array';
    }
    var resultObject = {};
    var tempArray = [];
    for(let i = 0; i< arrayStocks.length; i++){
        if(arrayStocks[i]["id"] === id){
            resultObject.id = id;
            resultObject.stock_name = arrayStocks[i]["stock_name"];
            for(let j = 0; j < arrayStocks[i]["shareholders"].length; j++) {
                tempArray.push({userId: arrayStocks[i]["shareholders"][j]["userId"], number_of_shares: arrayStocks[i]["shareholders"][j]["number_of_shares"]})               
            };
        }
    }
    resultObject.shareholders = tempArray;
    return resultObject;
}

module.exports = {listShareholders, totalShares, listStocks, getStockById};