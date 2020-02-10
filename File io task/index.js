const fs=require("fs");
const readline=require("readline-sync")
const util=require("util");

var input=readline.question("Enter your input: ");

const regex=new RegExp(input,"gi")
// console.log(regex)
var readFile=util.promisify(fs.readFile);
var writeFile=util.promisify(fs.writeFile);
var stats=util.promisify(fs.stat);
async function abc(){
    try{
        console.time("Program")
        var outputRead=await readFile("data.txt")
        var count=(outputRead.toString()).match(regex)
        if(count!==null){
        var outputWrite=await writeFile("newFile.txt",`The count of data is :${count.length}`);
        var newDataFile=await writeFile("data.txt",outputRead.toString().replace(regex,"CODE"));
        var sizes=await stats("data.txt")
        console.log(`${sizes.size} bytes`);
        }else{
            var outputWrite=await writeFile("newFile.txt",`The count of data is :0`);
            console.log("There was no match!")
        }
        
        console.timeEnd("Program");
        console.log("Program Executed");
    }
    catch(err){
        console.log(err.message);
    }
}
abc()
