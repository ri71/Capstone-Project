const http = require('http');
const fs = require('fs');
// the headers needed for our project (hover over the types of headers to see more information on how theyre used in the code)

const server = http.createServer((req, res) =>{
    console.log('request made dude');
// while making the server, we have a request and response and we use a "print" statement that verifies that its going through

    res.setHeader('Content-Type', 'text/html');
//setting our lines of code inside the pages read as html tags 
let path = './pages_for_web/';
  switch(req.url) {
    case '/': //first page 
      path += 'login.html';
      res.statusCode = 200;
      break;
    case '/main_page':
      path += 'main_page.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

   fs.readFile(path, (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        }
        res.end(data);
      });
});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000');

});