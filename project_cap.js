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
    case '/user_page':
      path += 'user_page.html';
      res.statusCode = 200;
      break;
    case '/word_select':
      path += 'word_select.html';
      res.statusCode = 200;
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
      // reading in the html files that we already established and error-checks if the data isn't being read right
});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000');

});