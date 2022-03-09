const express = require ('express');

//Express APP

const app = express(); 
/*
const dbURI = "mongodb+srv://new_user_1:<password>@capstone.6vjyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));
*/
//Listening for the Requests 

app.listen(3000); 


app.get ('/login', (req, res) => 
{
    //res.send('<p> Login Page </p>')
    res.sendFile ('./pages_for_web/login.html', { root: __dirname});
}); 


app.get ('/main_page', (req, res) => 
{
    //res.send('<p> Main Page </p>')
    res.sendFile ('./pages_for_web/main_page.html', { root: __dirname});
}); 

app.get ('/user_page', (req, res) => 
{
    //res.send('<p> Main Page </p>')
    res.sendFile ('./pages_for_web/user_page.html', { root: __dirname});
});

app.get ('/word_select', (req, res) => 
{
    //res.send('<p> Main Page </p>')
    res.sendFile ('./pages_for_web/word_select.html', { root: __dirname});
});


// redirects? do we even need that tho? ->naur

//404 error page 

app.use((reg, res) =>{
    res.sendFile('./pages_for_web/404.html', { root: __dirname})
});
