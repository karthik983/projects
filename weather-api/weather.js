const axios=require("axios");
var readlineSync = require('readline-sync');

function start(){
    var some=readlineSync.question("Enter your city name? ");
    return some;
    }


function weather(city){
    return new Promise((resolve,reject)=>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${(city)}&appid=c257ecd81be211771c45850eb1ee466b`)
             .then((res)=>resolve(
    `                    Weather:${JSON.stringify(res.data["weather"][0])},
                    Coordinates:${JSON.stringify(res.data["coord"])},
                    Main:${JSON.stringify(res.data["main"])},
                    Name:${res.data["name"]}`))
            .catch((err)=>{console.log(err.message)})
    })
}


function ending(){
        var any=readlineSync.question("Press 1 to continue and 0 to exit ");
        if(Number(any)===1){
            return newWeather();
        }
        else{
            return;
        }     
        }  

async function newWeather(){
    try{
    let zooStart=await start();
    let output=await weather(zooStart);
    console.log(output);
    let zooEnd=await ending();
    } 
    catch(err){
        console.log(err.message)
    } 
}
newWeather()









