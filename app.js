var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        })
    }
    else if(request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        })
    }
    else if (request.url === '/dojos/new') {
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    // else if(request.url === '/css/main.css'){
    //     fs.readFile('./css/main.css', 'utf8', function(errors, contents){
    //         response.writeHead(200, {'Content-type': 'text/css'});
    //         response.write(contents);
    //         response.end();
    //     })
    // } else if(request.url === '/images/img.jpg'){
    //     fs.readFile('./images/img.jpg', function(errors, contents){
    //         response.writeHead(200, {'Content-type': 'image/jpg'});
    //         response.write(contents);
    //         response.end();
    //     })
    // }
    else {
        response.writeHead(404);
        response.end('the URL requested is not available :(');
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");
