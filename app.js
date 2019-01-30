var http = require ('http');
var upper = require('upper-case');
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(uc('Hola mundito mundial!!!!!!!'));
	res.end()
}).listen(8080);
