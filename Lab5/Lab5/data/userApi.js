const axios = require('axios');
async function getpeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json');
    return data; // this will be the array of people objects
}

async function getwork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json');
    return data; // this will be the array of work objects
}

let exportedMethods = {
    async getAllPeople() {
        const allPeople = await getpeople();
        return await allPeople;
    },
    async getPeopleById(id){
        if(!id){
            throw '{ Error: id must provide }'
        }
        id = id.trim();
        if(id.length.trim() === 0){
            throw '{ Error: id can not be just empty space }'
        }
        var tempCheck = true;
        tempCheck = isNaN(id);
        if(tempCheck != false){
            throw '{ Error: id cant not convert to number }'
        }
        id = Number(id);
        if(id < 0){
            throw '{ Error: id must be positive number }'
        }
        const allPeople = await getpeople();
        const resultArray = [];
        for(let i = 0; i< allPeople.length; i++){
            if(allPeople[i].id === id){
                resultArray.push(allPeople[i])
            }
        }
        if(resultArray.length === 0){
            throw '{ Error: id not found }'
        }
        return resultArray;
        return resultArray;
    },
    async getAllWork() {
        const allWork = await getwork();
        return await allWork;
    },
    async getWorkById(id){
        if(!id){
            throw '{ Error: id must provide }'
        }
        id = id.trim();
        if(id.length === 0){
            throw '{ Error: id can not be just empty space }'
        }
        var tempCheck = true;
        tempCheck = isNaN(id);
        if(tempCheck != false){
            throw '{ Error: id cant not convert to number }'
        }
        id = Number(id);
        if(id < 0){
            throw '{ Error: id must be positive number }'
        }
        const allWork = await getwork();
        const resultArray = [];
        for(let i = 0; i< allWork.length; i++){
            if(allWork[i].id === id){
                resultArray.push(allWork[i])
            }
        }
        if(resultArray.length === 0){
            throw '{ Error: id not found }'
        }
        return resultArray;
    }
}

module.exports = exportedMethods;