// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-type','text/html')
//     res.write('<html>')
//     res.write('<head><title>W3VJ TECH PALAKKAD</title></head>')
//     res.write('<body><h1> Server running <a href=#>on port 9000</a> </h1></head>')
//     res.write('</html>')
//     res.end();
// })

// server.listen(9000,()=>{
//     console.log('my port is running on 9000')
// })

const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Form Details</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Aqua Solutions</title></head>');
    res.write('<body><h1>Its varun here </h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(8080);