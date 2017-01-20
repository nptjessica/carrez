//gitignore node_modules permet d'ignorer et de ne pas installer les dépendances

//require library 'http' to create a web server
var http = require('http');

//save server into the variable 'server'
var server=http.createServer(function(req,res){
    //when user is connected
    res.writeHead(200);     //200 means "ok everything is alright" otherwise 404 for "not found page"
    res.end('Salut tout le monde');
});
//server listens port 8060
server.listen(8060);