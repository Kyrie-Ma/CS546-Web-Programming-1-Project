const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 16;

let exportedMethods = {
    async createUser(username, password){
        if(!username){
            throw 'Error: please privide a username.';
        }
        if(!password){
            throw 'Error: please privide a password.';
        }
        if(typeof username != 'string'){
            throw 'username must bu string.';
        }
        if(typeof password != 'string'){
            throw 'password must bu string.';
        }
        if(username.indexOf(' ')>=0){
            throw 'Error: username must not contain space.'
        }
        if(username.length < 4){
            throw 'Error: username must at least 4 characters.'
        }
        if(password.indexOf(' ')>=0){
            throw 'Error: password must not contain space.'
        }
        if(password.length < 6){
            throw 'Error: password must at least 6 characters.'
        }
        username = username.toLowerCase();
        const usersCollection = await users();
        const user = await usersCollection.findOne({ username: username});
        if(user){
            throw 'there is already a user with that username';
        }
        hashPassword = await bcrypt.hash(password, saltRounds);
        let newUser = {
            username: username,
            password: hashPassword
        }
        const newInsertInformation = await usersCollection.insertOne(newUser);
        if (newInsertInformation.insertedId === 0) {
            throw 'Error: Insert failed!';
        }
        else{
            return { userInserted: true};
        }
    },

    async checkUser(username, password){
        if(!username){
            throw 'Error: please privide a username.';
        }
        if(!password){
            throw 'Error: please privide a password.';
        }
        if(typeof username != 'string'){
            throw 'username must be string.';
        }
        if(typeof password != 'string'){
            throw 'password must be string.';
        }
        if(username.indexOf(' ')>=0){
            throw 'Error: username must not contain space.'
        }
        if(username.length < 4){
            throw 'Error: username must at least 4 characters.'
        }
        if(password.indexOf(' ')>=0){
            throw 'Error: password must not contain space.'
        }
        if(password.length < 6){
            throw 'Error: password must at least 6 characters.'
        }
        username = username.toLowerCase();
        const usersCollection = await users();
        const user = await usersCollection.findOne({ username: username});
        if(!user){
            throw 'Either the username or password is invalid.';
        }
        const compareToMatch = await bcrypt.compare(password, user.password);
        if(!compareToMatch) {
            throw 'Either the username or password is invalid';
        }
        else{
            return { authenticated: true };
        }
    },
}

module.exports = exportedMethods;