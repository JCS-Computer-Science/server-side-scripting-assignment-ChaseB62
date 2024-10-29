const express = require("express");
const uuid = require("uuid");
const server = express();
server.use(express.json());
server.use(express.static('public'));



//All your code goes here
let activeSessions={}

server.get('/newgame', (req, res)=>{
    let newID = uuid.v4();
    const word = GetWord();
    let newGame={
        wordToGuess: word,
        guesses:[],
        correctLetters:[],
        closeLetters:[],
        rightLetters:[],
        remainingGuesses: 6,
        gameOver: false

    }
    activeSessions[newID] = newGame;
    console.log(activeSessions);

    res.status(201);
    res.send({sessionID: newID});
    
})

server.get('/gamestate', (req, res) =>{
    req.query(sessionID);

    res.status(200);
    res.send({gameState: sessionID});
})

server.get('/guess', (req, res) =>{
    console.log("nice guess moron!");
    
})

async function GetWord(){
    
    const words = ["penis", "wanks", "dicks", "asses", "farts", "poops", "shits", "fucks", "clone", "state", "reset", "guess", "local", "blame", "pause", "script", "pulse", "chase", "space", "share", "launch", "words", "serve", "index"]
    const randomId = Math.floor(Math.random() * words.length);
    const word = words[randomId];

    return word;
}


//Do not remove this line. This allows the test suite to start
//multiple instances of your server on different ports
module.exports = server;