# LiriBot
LiriBot is a command-line version of siri that will use several different APIs to search for music, bands, and local shows.

## Video Walkthrough
Watch a walkthrough of the app's functions [Here!](https://www.youtube.com/watch?v=blhtNukXXS4&feature=youtu.be)

## Goals & MVP:
* The Goal of this project is to create a command-line search tool that can find information about movies, songs, and when bands are playing.
* To that end, the MVP of this project is that, when run, it must:
  * Accept a command from the user that determines the program's action.
  * These Commands are: 
    - "concert-this" which will use the Bands In Town API to search for band concerts.
    - "spotify-this-song" which will look up details about specific songs using the Spotify API.
    - "movie-this" which will look up movie details using OMDB Api.
    - "do-what-it-says" which uses a local text file to make one of the above searches using the internal text. For some purpose, I guess.
  * Based on the command, parse the user's search term input into a variable that represents a viable search term for the appropriate API.
  * Execute a search using the appropriate API.
  * Use the data in the API's response to console log a specific data set to the user that represents what they wanted to see with their search.

## Node Dependancies and APIs:
* [Node Spotify API](https://www.npmjs.com/package/node-spotify-api) - This will be used when the actor uses LiriBot to search for music details.
* [Axios](https://www.npmjs.com/package/axios) - This will be used to interface with the OMDB and Bands In Town APIs.
  * [OMDB - The Open Movie Database](http://www.omdbapi.com/) - Our users will be using our program to search details about movies, which will come from OMDB.
  * [BandsInTown API](http://www.artists.bandsintown.com/bandsintown-api) - Similarly, when our users search for information about bands, the information will come from this API.
* [Moment](https://www.npmjs.com/package/moment) - We will be using Moment to format concert times.
* [dotenv](https://www.npmjs.com/package/dotenv) - We will be using dotenv to keep our keys secret, and keep them safe.

## Future Features:
_If the MVP is met, we will then proceed on to the following desired features_
* Every time the user searches, the search term and the returned data will be appended (not writing over) to a log.txt document.
  * Perhaps an additional command should be added to view the content of this file from the command line.
* Add "Time" to the concert search.
* Replace the basic commands by using the inquire npm to prompt the user for the actions they wish to take. Essentially, create a better UI experience for the user.
  * Included in this idea, when run, liri.js would welcome the user with a brief introduction to the program's abilities, and offer a choice of search types (band, song, or movie), then prompt the user for their search term.

## Pseudo Code:
- [X] Create all of the files required in the instructions, including a gitignore, and push them to my [GitHub Repo](https://github.com/Druidan/liri-node-app) for the project.
- [X] Dowload the dependancies and set up the require for each in liri.js.
- [ ] Get the nessesary API keys for each API.
  - [X] Spotify API Key
  - [X] OMDB API Key
  - [X] BandsInTown API Key - UPDATE: Wait for a response from Bands In Town and see if they will 
- [X] Use keys.js and .env to create a safe and private method of retrieving our locally stored API keys and putting them into variables
actually give me a key. If not, follow up with professor and TAs.
- [X] Capture the user input in a variable.
  - [X] Specifically, capture the command first...
  - [X] ...Then capture the search term.
- [X] Determine if the User Command Is valid. (Use Switch? - Inside a Function that can be recalled!)
  - [X] If not, tell the user and remind them of the four valid commands.
  - [X] If it is valid, use the command to call the associated function.
- [ ] Write a function for each type of search:
  - [X] find Concert Function - ended up naming it bitThis()
    - [X] Refine the user's search term if nessesary
    - [X] Make an axios-based get call to the BandsInTown API
    - [X] When the response is returned, if the response does not throw up an error, grab and console.log the following details:
        - [X] Name of the venue
        - [X] Venue location
        - [X] Date of the Event (use moment to format this as "MM/DD/YYYY")
    - [X] Console.log a thank-you to the user, and encourage them to run the program again, using any of the four commands.
    - [X] If the response throws up an error, console log an error message, explaining that there either is no information about a concert at this time, or encouraging the user to refine their search terms
  - [X] findSong Function - ended up naming it spotifyThis()
    - [X] If the user provides a search term, Refine the user's search term if nessesary.
      - [X] If the user does not provide the search term, redefine the search term variable as "The Sign" (by Ace of Base)
    - [X] Make a get call to the Spotify API using the spotify npm
    - [X] When the response is returned, if the response does not throw up an error, grab and console.log the following details:
        - [X] Artist(s)
        - [X] The song's name
        - [X] A preview link of the song from Spotify
        - [X] The album that the song is from
    - [X] Console.log a thank-you to the user, and encourage them to run the program again, using any of the four commands.
    - [X] If the response throws up an error, console log an error message, explaining that there either is no information about a concert at this time, or encouraging the user to refine their search terms
  - [X] findMovie Function - ended up naming it omdbThis()
    - [X] If the user provides a search term, Refine the user's search term if nessesary.
      - [X] If the user does not provide the search term, redefine the search term variable as "Mr. Nobody"
    - [X] Make an axios get call to the OMDB API.
    - [X] When the response is returned, if the response does not throw up an error, grab and console.log the following details:
        - [X] Title of the movie.
        - [X] Year the movie came out.
        - [X] IMDB Rating of the movie.
        - [X] Rotten Tomatoes Rating of the movie.
        - [X] Country where the movie was produced.
        - [X] Language of the movie.
        - [X] Plot of the movie.
        - [X] Actors in the movie.
    - [X] Console.log a thank-you to the user, and encourage them to run the program again, using any of the four commands.
    - [X] If the response throws up an error, console log an error message, explaining that there either is no information about a concert at this time, or encouraging the user to refine their search terms
  - [X] useRandomTxt Function - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. - ended up naming it randomTxtThis()
    - [X] Use fs to read the random.txt file.
    - [X] parse the data returned by fs (split on comma?) and redefine the user command and user search term using the text inside the file, then call the function containing the switch statement again. 


