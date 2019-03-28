//Establish Dependancies
require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const Spotify = require('node-spotify-api');
const moment = require('moment');
const keys = require("./keys.js");

//Establish API Keys from .env through keys.js
const spotify = new Spotify(keys.spotify);
const omdb = keys.omdb.apiKey;
const bit = keys.bitAPI.apiKey;

//Grab the command line information and narrow it down to user input.
const wholeEnchilada = process.argv.slice(3).join(" ")
const command = process.argv.splice(2,1).toString();


liriSearch(command)
function liriSearch(command){
    switch(command) {
        case "concert-this":
            bitThis()
            break;
        case "spotify-this-song":
            spotifyThis()
            break;
        case "movie-this":
            omdbThis()
            break;
        case "do-what-it-says":
            randomTxtThis()
            break;
        default:
            console.log("Hmmm... It looks like you didn't input one of the four valid commands. Please use only one of the following:\n'concert-this'\n'spotify-this-song'\n'movie-this'\nOr use 'do-what-it-says' if you want to see what search terms we're looking for! ;)")
            break;
    }
}

//moment().format();

function bitThis(){
    artist = wholeEnchilada.replace("/","%252F").replace("?", "%253F").replace('"',"%27C");
    bitCall = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(bitCall).then(function(data){
        if(data.data === [] || data.data === null || data.data === undefined){
            console.log("Huh... No response. Check to see if your band name is accurate. If it is, then they probably aren't playing soon, or they aren't being tracked by our services. Sorry!")
        } else {
            const dateTime = data.data[0].datetime
            const rawDate = dateTime.substring(0, dateTime.indexOf("T"));
            const date = moment(rawDate, "YYYY-MM-DD").format("L");
            console.log("We've found the soonest upcoming show!\n The Venue: " + data.data[0].venue.name + "\n The Venue's Location: " + data.data[0].venue.city + ", " + data.data[0].venue.country + "\n Date: " + date);
        }

    }).catch(function(error) {
        if (error.response) { //I'm pretty much taking this error catcher verbatim from Axios' npm documentation while adding my own message.
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log("\nHuh... We recieved an Error! Check to see if your band name is accurate. If it is, then they probably aren't playing soon, or they aren't being tracked by our services. Sorry!")
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            console.log("\nHuh... We recieved an Error! Check to see if your band name is accurate. If it is, then they probably aren't playing soon, or they aren't being tracked by our services. Sorry!")
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            console.log("\nHuh... We recieved an Error! Check to see if your band name is accurate. If it is, then they probably aren't playing soon, or they aren't being tracked by our services. Sorry!")
            }
        console.log(error.config);
    });
}

function spotifyThis(){
    console.log("spotify works!")
}

function omdbThis(){
    console.log("omdbworks works!")
}

function randomTxtThis(){
    console.log("random works!")
}