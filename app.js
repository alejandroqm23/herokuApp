var http = require ('http');
var upper = require('upper-case');
const PORT = process.env.PORT || 5000;
http.createServer(function (req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hola desde Heroku \n');
	res.write('Prueba de Deploy automatico');
        res.end()
}).listen(PORT);
