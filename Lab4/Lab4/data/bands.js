const mongoCollections = require('./../config/mongoCollection');
const bands = mongoCollections.bands;
const { ObjectId } = require('mongodb');

function InputEmptyOrNotString(Value1){
    let check = true;
    if(typeof Value1 != 'string'){
        check = false;
    }
    if(Value1.length === 0){
        check = false;
    }
    if(typeof Value1 === 'string'){
        if(Value1.trim().length === 0){
            check = false;
        }
    }

    return check;
}
function checkInputWebsite(Value1){
    let check = true;
    let checkWebsite = Value1.toLowerCase();
    if(checkWebsite[0] !== 'h'){
        check = false;
    }
    if(checkWebsite[1] !== 't'){
        check = false;
    }
    if(checkWebsite[2] !== 't'){
        check = false;
    }
    if(checkWebsite[3] !== 'p'){
        check = false;
    }
    if(checkWebsite[4] !== ':'){
        check = false;
    }
    if(checkWebsite[5] !== '/'){
        check = false;
    }
    if(checkWebsite[6] !== '/'){
        check = false;
    }
    if(checkWebsite[7] !== 'w'){
        check = false;
    }
    if(checkWebsite[8] !== 'w'){
        check = false;
    }
    if(checkWebsite[9] !== 'w'){
        check = false;
    }
    if(checkWebsite[10] !== '.'){
        check = false;
    }
    if(checkWebsite[checkWebsite.length-4] !== '.'){
        check = false;
    }
    if(checkWebsite[checkWebsite.length-3] !== 'c'){
        check = false;
    }
    if(checkWebsite[checkWebsite.length-2] !== 'o'){
        check = false;
    }
    if(checkWebsite[checkWebsite.length-1] !== 'm'){
        check = false;
    }
    if(checkWebsite.length < 20){
        check = false;
    }
    //console.log(check);
    return check;
}
function checkArray(Value1){
    let check = true;
    if(Array.isArray(Value1) === false){
        check === false;
    }
    let check2 = false;
    for(let i = 0; i< Value1.length; i++){
        if(typeof Value1[i] === 'string'){
            if(Value1[i].trim().length !== 0){
                check2 = true;
            }
        }
    }
    if(check2 === false){
        check = false;
    }
    return check;
}
let exportedMethhods = {
    async create(name, genre, website, recordLabel, bandMembers, yearFormed){
        name = name.trim();
        website = website.trim();
        recordLabel = recordLabel.trim();
        if(!name){
            throw 'not all input value were provide';
        }
        if(!genre){
            throw 'not all input value were provide';
        }
        if(!website){
            throw 'not all input value were provide';
        }
        if(!recordLabel){
            throw 'not all input value were provide';
        }
        if(!bandMembers){
            throw 'not all input value were provide';
        }
        if(!yearFormed){
            throw 'not all input value were provide';
        }
        if(InputEmptyOrNotString(name) === false){
            throw 'input name are not string or it is empty string'
        }
        if(InputEmptyOrNotString(website) === false){
            throw 'input website are not string or it is empty string'
        }
        if(InputEmptyOrNotString(recordLabel) === false){
            throw 'input recordLabel are not string or it is empty string'
        }
        if(checkInputWebsite(website) === false){
            throw 'input website is not in valid form';
        }
        if(checkArray(genre) === false){
            throw 'genre is not a array or did not have at least one string in it'
        }
        if(checkArray(bandMembers) === false){
            throw 'bandMembers is not a array or did not have at least one string in it'
        }
        if(typeof yearFormed !== 'number'){
            throw 'yearformed is not a number'
        }
        if(yearFormed > 2022 || yearFormed < 1900){
            throw 'yearformed is not in 1900-2022';
        }
        const bandsCollection = await bands();
        let newBand = {
            name: name,
            genre: genre,
            website: website,
            recordLabel: recordLabel,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
        };
        const insertInfo = await bandsCollection.insertOne(newBand);
        if (!insertInfo.acknowledged || !insertInfo.insertedId){
            throw 'Could not add band';
        }
        const id = insertInfo.insertedId.toString();
        const band = await this.get(id);
        return band;
    },

    async getAll(){
        const bandsCollection = await bands();
        const bandList = await bandsCollection.find({}).toArray();
        if (!bandList){
            throw 'Could not get all bands';
        }
        return bandList;
    },

    async get(id) {
        //console.log(typeof id);
        if (!id){
            throw 'id must be exists';
        }
        id = id.toString();
        id = id.trim();
        if (InputEmptyOrNotString(id) === false){
            throw 'input id are not string or it is empty string'
        }
        if (!ObjectId.isValid(id)){
            throw 'id is not a valid ObjectId';
        }
        //console.log(typeof id);
        id = ObjectId(id);
        //console.log(typeof id);
        //console.log(ObjectId.isValid(id));
        const bandsCollection = await bands();
        const getBands = await bandsCollection.findOne({ _id: ObjectId(id) });
        if (getBands === null){
            throw 'This id does exist in the bands';
        }
        return getBands;
    },
    async remove(id){
        if (!id){
            throw 'id must be exists';
        }
        if (InputEmptyOrNotString(id) === false){
            throw 'input id are not string or it is empty string'
        }
        id = id.trim();
        if (!ObjectId.isValid(id)){
            throw 'id is not a valid ObjectId';
        }
        id = ObjectId(id);
        //var resultName = []
        const bandsCollection = await bands();
        const deletionInfo = await bandsCollection.deleteOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0){
            throw `The id: {${id}} does exist in the bands`;
        }
        return 0;
    },
    async rename(id, newName){
        if (!id){
            throw 'id must be exists';
        }
        id = id.toString();
        id = id.trim();
        if (InputEmptyOrNotString(id) === false){
            throw 'input id are not string or it is empty string'
        }
        if (!ObjectId.isValid(id)){
            throw 'id is not a valid ObjectId';
        }
        if (!newName){
            throw 'newName must be exists';
        }
        if (InputEmptyOrNotString(newName) === false){
            throw 'input newName are not string or it is empty string';
        }
        newName = newName.toString();
        newName = newName.trim();
        id = ObjectId(id);
        const bandsCollection = await bands();
        const getBands = await bandsCollection.findOne({ _id: ObjectId(id) });
        if (getBands === null){
            throw 'This id does exist in the bands';
        }
        //console.log(getBands.name);
        const updateBands = await bandsCollection.updateOne({ _id: ObjectId(id)}, {$set:{name: newName}});
        if(updateBands.modifiedCount === 0){
            throw 'could not update dog successfully';
        }
        const band = await this.get(id);
        return band;
    }
}
module.exports = exportedMethhods;