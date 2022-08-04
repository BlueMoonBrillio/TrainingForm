var http = require('http');
var url = require('url');
var util = require('util');
// var StringDecoder = require('string_decoder').StringDecoder;
var players = require('./server.json');

var server = http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    console.log(req.url);
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.log(`Trimmed: ${trimmedPath}`);
    var method = req.method.toLocaleLowerCase();


    
    if(req.url==='/login' && method === 'post'){
        res.end("Redirect to Login Page");
    }
    else if(req.url==='/players'){
        res.end(JSON.stringify(players));
    }
    else if(parsedUrl.pathname.split('/')[1] == 'players' && parseInt(parsedUrl.pathname.split('/')[2])){
        // console.log("params", req)
        res.end(JSON.stringify(players.players[parsedUrl.pathname.split('/')[2]-1]));
    }
    else{
        res.end("Hello");
    }

})

server.listen(3001, () => {
    console.log("Server running on port 3001");
})