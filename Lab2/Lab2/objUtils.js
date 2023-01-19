function makeArray(objects){
    if(!objects){
        throw 'array must be exists';
    }
    var check = Array.isArray(objects);
    if(check === false){
        throw 'Input must be an array';
    }
    if(objects.length === 0){
        throw 'array is empty';
    }
    for(var i = 0; i < objects.length; i++){
        if(typeof objects[i] != 'object'){
            throw 'each element in the array must be object'
        }
    }
    for(var i = 0; i < objects.length; i++){
        if(Object.keys(objects[i]).length === 0){
            throw 'each object in the array can not be empty'
        }
    }
    if(objects.length < 2){
        throw 'must have at least two element in the array'
    }
    var count1 = objects.length;
    var count2 = 1;
    var newArray = [];
    newArray = Object.entries(objects[0]);
    while(count1 > 1){
        newArray = newArray.concat(Object.entries(objects[count2]))
        count1 = count1 - 1;
        count2 = count2 + 1;
    }
    return newArray;
}

function isDeepEqual(obj1, obj2){
    if(!obj1){
        throw 'obj1 must be exists';
    }
    if(!obj2){
        throw 'obj2 must be exists';
    }
    if(typeof obj1 != 'object'){
        throw 'obj1 must be object'
    }
    if(typeof obj2 != 'object'){
        throw 'obj2 must be object'
    }
    isDeepEqual2(obj1, obj2);
}
function isDeepEqual2(obj1, obj2){
    if(Object.keys(obj1).length === 0 && Object.keys(obj2).length){
        return true;
    }
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    if(obj1 === obj2){
        return true;
    }
    else if((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)){
        for(var key1 in obj1){
            if(key1 in obj2){
                if(!isDeepEqual2(obj1[key1], obj2[key1])){
                    return false;
                }
            }
            else{
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

function computeObject(object, func){
    if(!object){
        throw 'object must be exists';
    }
    if(typeof object != 'object'){
        throw 'object type must be object'
    }
    if(!func){
        throw 'function must be exists';
    }
    if(typeof func != 'function'){
        throw 'funtion type must be funtion'
    }
    for(var key in object){
        if(typeof object[key] != 'number'){
            throw 'object values type must be number'
        }
    }
    for(var key in object){
        object[key] = func(object[key]);
    }
    return object;
}


module.exports = {makeArray, isDeepEqual, isDeepEqual2, computeObject};