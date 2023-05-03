const bands = require('./data/bands');
const connection = require('./config/mongoConnection');

async function main() {
    const db = await connection.connectToDb();
    await db.dropDatabase();
    console.log("Let's add some bands!");
    var PinkFloyd = undefined;
    var TheBeatles = undefined;
    var LinkinPark = undefined;
    var badInputBand = undefined;
    var doesntExistBandID = "507f1f77bcf86cd799439011";
    var doesntExistBandName = "doesn't Exist";
    //create first band
    console.log("create first band");
    try {
        PinkFloyd = await bands.create("Pink Floyd", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "http://www.pinkfloyd.com", "EMI", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1965);
        console.log(PinkFloyd);
    } catch (e) {
      console.log(e);
    }
    //create second band
    console.log("create second band");
    try {
        TheBeatles = await bands.create("The Beatles", ["Rock", "Pop", "Psychedelia"], "http://www.thebeatles.com", "Parlophone", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr" ], 1960);
        //console.log(TheBeatles);
    } catch (e) {
      console.log(e);
    }
    // log all bands
    try {
        allBands = await bands.getAll();
        console.log(allBands);
    } catch (e) {
      console.log(e);
    }
    //create third band
    console.log("create third band");
    try {
        LinkinPark = await bands.create("Linkin Park", ["Alternative Rock", "Pop Rock", "Alternative Metal"], "http://www.linkinpark.com", "Warner", ["Chester Bennington", "Rob Bourdon", "Brad Delson", "Mike Shinod", "Dave Farrell", "Joe Hahn" ], 1996);
        console.log(LinkinPark);
    } catch (e) {
      console.log(e);
    }
    //rename first band
    console.log("rename first band and log it out")
    try {
        id = PinkFloyd._id;
        renameBands = await bands.rename(id, "Lennon's Boys");
        console.log(renameBands);
    } catch (e) {
      console.log(e);
    }
    //remove second band
    console.log("remove second band")
    try {
        id = TheBeatles._id.toString();
        deleteName = TheBeatles.name;
        removeOneBands = await bands.remove(id);
        console.log(`The ${deleteName} has been successfully deleted!`);
    } catch (e) {
      console.log(e);
    }
    // log all bands
    try {
        allBands = await bands.getAll();
        console.log(allBands);
    } catch (e) {
      console.log(e);
    }
    //create a band with bad input
    console.log("create a bad input band");
    try {
        badInputBand = await bands.create("Bad Input", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "http://www.bad.com", "EMI", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1980);
        console.log(badInputBand);
    } catch (e) {
      console.log(e);
    }
    //remove a band doesn't exist
    console.log("remove a band doesn't exist");
    try {
        doesntExistBandID = doesntExistBandID.toString();
        deleteName = doesntExistBandName;
        removeOneBands = await bands.remove(doesntExistBandID);
        console.log(`The ${deleteName} has been successfully deleted!`);
    } catch (e) {
      console.log(e);
    }
    //rename a band doesn't exist
    console.log("remane a band doesn't exist");
    try {
        doesntExistBandID = doesntExistBandID.toString();
        renameBands = await bands.rename(id, "doesn't Exist");
        console.log(renameBands);
    } catch (e) {
      console.log(e);
    }
    //rename with the invalid newName
    console.log("rename with the invalid newName")
    try {
        id = PinkFloyd._id.toString();
        renameBands = await bands.rename(id, 123);
        console.log(renameBands);
    } catch (e) {
      console.log(e);
    }
    //get band by id that doesn't exist
    console.log("get band by id that doesn't exist")
    try {
        doesntExistBandID = doesntExistBandID.toString();
        findOneBands = await bands.get(doesntExistBandID);
        console.log(findOneBands);
    } catch (e) {
      console.log(e);
    }

    await connection.closeConnection();
}

main();