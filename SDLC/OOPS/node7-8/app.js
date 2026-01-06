// const http = require('http')

// function sdlc(req,res){
//     console.log(req.url)
//     console.log(req.method)
//     console.log(req.headers)
//     process.exit();
// }

// const server = http.createServer(sdlc)

// server.listen(5000,()=>{
//     console.log("my port is running on port 5000")
// })



const http = require('http');

const server = http.createServer((req, res) =>
{
    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>Aqua Solutions</title></head>')
    res.write('<body><h1>Its varun here </h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(8080);