const people = require("./people");
const stocks = require("./stocks");
async function main(){
    console.log("getPersonById test 1");
    try{
        const peopledata = await people.getPersonById("20035a09-3820-4f49-bb8f-d947cebee537");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    console.log("getPersonById test 2");
    try{
        const peopledata = await people.getPersonById("  ");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    console.log("sameEmail test 1");
    try{
        const sameEmailData = await people.sameEmail("behance.net");
        console.log (sameEmailData);
    }catch(e){
        console.log (e);
    }
    console.log("sameEmail test 2");
    try{
        const sameEmailData = await people.sameEmail("foobar");
        console.log (sameEmailData);
    }catch(e){
        console.log (e);
    }

    console.log("manipulateIp");
    try{
        const manipulateIpData = await people.manipulateIp();
        console.log (manipulateIpData);
    }catch(e){
        console.log (e);
    }

    console.log("sameBirthday test 1");
    try{
        const sameBirthdayData = await people.sameBirthday(9, 25);
        console.log (sameBirthdayData);
    }catch(e){
        console.log (e);
    }
    console.log("sameBirthday test 2");
    try{
        const sameBirthdayData = await people.sameBirthday("09", "25");
        console.log (sameBirthdayData);
    }catch(e){
        console.log (e);
    }
    
    console.log("listShareholders test 1");
    try{
        const listShareholdersData = await stocks.listShareholders("Aeglea BioTherapeutics, Inc.");
        console.log (listShareholdersData);
    }catch(e){
        console.log (e);
    }
    console.log("listShareholders test 2");
    try{
        const listShareholdersData = await stocks.listShareholders("Powell Industries, Inc.");
        console.log (listShareholdersData);
    }catch(e){
        console.log (e);
    }

    console.log("totalShares test 1");
    try{
        const totalSharesData = await stocks.totalShares("Aeglea BioTherapeutics, Inc.");
        console.log (totalSharesData);
    }catch(e){
        console.log (e);
    }
    console.log("totalShares test 2");
    try{
        const totalSharesData = await stocks.totalShares("Nuveen Preferred and Income 2022 Term Fund");
        console.log (totalSharesData);
    }catch(e){
        console.log (e);
    }

    console.log("listStocks test 1");
    try{
        const listStocksData = await stocks.listStocks("Grenville", "Pawelke");
        console.log (listStocksData);
    }catch(e){
        console.log (e);
    }
    console.log("listStocks test 2");
    try{
        const listStocksData = await stocks.listStocks('Patrick', "Hill");
        console.log (listStocksData);
    }catch(e){
        console.log (e);
    }

    console.log("getStockById test 1");
    try{
        const getStockByIdData = await stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0");
        console.log (getStockByIdData);
    }catch(e){
        console.log (e);
    }
    console.log("getStockById test 2");
    try{
        const getStockByIdData = await stocks.getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log (getStockByIdData);
    }catch(e){
        console.log (e);
    }
}


//call main
main();