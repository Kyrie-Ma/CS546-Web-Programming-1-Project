const axios = require('axios');
async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
    return data; // this will be the array of people objects
    }

async function getPersonById(id){
    if(!id){
        throw 'Id must exist';
    }
    if(typeof id != 'string'){
        throw 'Id must be string';
    }
    if(id.trim() === ''){
        throw 'id can not just empty spaces';
    }
    var tempArray = await getPeople();
    var tempBoolean = false;
    for(let i = 0; i< tempArray.length; i++){
        if(tempArray[i]["id"] === id){
            tempBoolean = true;
        }
    }
    if(tempBoolean === false){
        throw 'id did not exist in the array';
    }
    for(let j = 0; j< tempArray.length; j++){
        if(tempArray[j]["id"] === id){
            return tempArray[j];
        }
    }
}

async function sameEmail(emailDomain){
    if(!emailDomain){
        throw 'emailDomain must exist';
    }
    if(typeof emailDomain != 'string'){
        throw 'emailDomain must be string';
    }
    if(emailDomain.trim() === ''){
        throw 'emailDomain can not just empty spaces';
    }
    var tempBoolean = false;
    for(let i = 0; i < emailDomain.length; i++){
        if(emailDomain[i] === '.'){
            tempBoolean = true;
        }
    }
    if(tempBoolean === false){
        throw 'emailDomain must contain a dot.';
    }
    var lastDotIndex = 0;
    for(let i = 0; i < emailDomain.length; i++){
        if(emailDomain[i] === '.'){
            lastDotIndex = i;
        }
    }
    if((emailDomain.length - lastDotIndex + 1) < 2){
        throw 'emailDomain does not have at least 2 letters after the dot';
    }
    var tempArray = await getPeople();
    for(let j = 0; j< tempArray.length; j++){
        tempArray[j]["email"] = tempArray[j]["email"].toUpperCase();
        tempArray[j]["email"] = tempArray[j]["email"].toLowerCase();
    }
    emailDomain = emailDomain.toUpperCase();
    emailDomain = emailDomain.toLowerCase();
    var tempResult = 0;
    var tempDomain1 = [];
    var tempDomain2 = [];
    var tempTemp;
    for(let j = 0; j< tempArray.length; j++){
        tempDomain1[j] = tempArray[j]["email"].substring(tempArray[j]["email"].indexOf("@")+1);
        if(tempDomain1[j] === emailDomain){
            tempResult++;
        }
    }
    var resultArray = [];
    if(tempResult < 2){
        throw 'less than two people have the same email domain'
    }
    else{
        for(let j = 0; j< tempArray.length; j++){
            tempDomain2[j] = tempArray[j]["email"].substring(tempArray[j]["email"].indexOf("@")+1);
            if(tempDomain2[j] === emailDomain){
                resultArray.push(tempArray[j]);
            }
        }
    }
    return resultArray;
}


async function manipulateIp(){
    var tempArray = await getPeople();
    var tempArray2 = [];
    var temp;
    var tempObject = {};
    for(let i = 0; i< tempArray.length; i++){
        temp = tempArray[i]["ip_address"].replace(/\./g,"");
        temp = parseInt(Array.from(temp).sort().join(''));
        tempObject = {
            firstName1: tempArray[i]["first_name"], 
            lastName1: tempArray[i]["last_name"], 
            temp: temp
        };
        tempArray2.push({
            "firstName1": tempObject.firstName1, 
            "lastName1": tempObject.lastName1, 
            "temp": tempObject.temp
        });
    }
    var max = tempArray2[0][temp];
    var min = tempArray2[0][temp];
    var maxIndex = 0;
    var minIndex = 0;
    for(let j = 0; j < tempArray2.length; j++){
        if(tempArray2[j][temp] > 0){
            max = tempArray2[j]["temp"];
            maxIndex = j;
        }
        if(tempArray2[j][temp] < 0){
            min = tempArray2[j]["temp"];
            minIndex = i;
        }
    }
    var totalIp = 0;
    var averageIp = 0;
    for(let j = 0; j < tempArray2.length; j++){
        totalIp = totalIp + tempArray2[j]["temp"];
    }
    averageIp = totalIp/tempArray2.length;
    var resultObject = {};
    resultObject.highest = { firstName: tempArray2[maxIndex]["firstName1"], lastName: tempArray2[maxIndex]['lastName1'] };
    resultObject.lowest = { firstName: tempArray2[minIndex]['firstName1'], lastName: tempArray2[minIndex]['lastName1'] };
    resultObject.average = averageIp;
    return resultObject;
}

async function sameBirthday(month, day){
    var tempCheckMonth = false;
    var tempCheckDay = false;
    tempCheckMonth = isNaN(month);
    tempCheckDay = isNaN(day);
    if(!month){
        throw 'month must exist';
    }
    if(!day){
        throw 'day must exist';
    }
    if(tempCheckMonth != false){
        throw 'month must be number';
    }
    if(tempCheckDay != false){
        throw 'day must be number';
    }
    var monthCheck12 = true;
    var monthCheck1 = true;
    if(month > 12){
        monthCheck12 = false;
    }
    if(monthCheck12 === false){
        throw 'Month > 12';
    }
    if(month < 1){
        monthCheck1 = false;
    }
    if(monthCheck1 === false){
        throw 'Month < 1';
    }
    if(month === 1 && day >= 32 || month === 1 && day < 1){
        throw `There are not ${day} days in January`;
    }
    if(month === 2 && day >= 29 || month === 2 && day < 1){
        throw `There are not ${day} days in February`;
    }
    if(month === 3 && day >= 32 || month === 3 && day < 1){
        throw `There are not ${day} days in March`;
    }
    if(month === 4 && day >= 31 || month === 4 && day < 1){
        throw `There are not ${day} days in April`;
    }
    if(month === 5 && day >= 32 || month === 5 && day < 1){
        throw `There are not ${day} days in May`;
    }
    if(month === 6 && day >= 31 || month === 6 && day < 1){
        throw `There are not ${day} days in June`;
    }
    if(month === 7 && day >= 32 || month === 7 && day < 1){
        throw `There are not ${day} days in July`;
    }
    if(month === 8 && day >= 32 || month === 8 && day < 1){
        throw `There are not ${day} days in August`;
    }
    if(month === 9 && day >= 31 || month === 9 && day < 1){
        throw `There are not ${day} days in September`;
    }
    if(month === 10 && day >= 32 || month === 10 && day < 1){
        throw `There are not ${day} days in October`;
    }
    if(month === 11 && day >= 31 || month === 11 && day < 1){
        throw `There are not ${day} days in November`;
    }
    if(month === 12 && day >= 32 || month === 12 && day < 1){
        throw `There are not ${day} days in December`;
    }
    /*
    if(){
        throw 'no people have that birthday'
    }
    */
    if(typeof month === 'number'){
        month = month.toString();
    }
    var temp0 = "0";
    if(month.length === 1){
        month = temp0+month;
    }
    if(typeof day === 'number'){
        day = day.toString();
    }
    if(day.length === 1){
        day = temp0+day;
    }
    var tempArray = await getPeople();
    var count = 0;
    var tempArray2 = [];
    for(let i = 0; i < tempArray.length; i++){
        var tempBoolean = false;
        var tempDate =tempArray[i]["date_of_birth"];
        if(tempDate[0] === month.charAt(0)){
            if(tempDate[1] === month.charAt(1)){
                if(tempDate[3] === day.charAt(0)){
                    if(tempDate[4] === day.charAt(1)){
                        count++;
                        tempBoolean = true;
                    }
                }
            }
        }
        if(tempBoolean === true){
            var tempName = tempArray[i]["first_name"].concat(" ", tempArray[i]["last_name"])
            tempArray2.push(tempName);
        }
    }
    return tempArray2;
}
module.exports = {getPersonById, sameEmail, manipulateIp, sameBirthday};