var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var pages = 
{
    qualification:{
        title: 'qualification',
        heading: 'QUALIFICATION',
        content: `
        <p>
        <ul>
            <li> Bachelor of Science (Physics), University of Madras </li>
            <li> Post Graduate Diploma in Computer Applications, Algappa university </li>
        </ul>
        </p>
        `
    },
    experience:{
        title: 'experience',
        heading: 'EXPERIENCE',
        content: `
        <pn>
           <ul>
               <li> Senior Manager Database Engineering, Stubhub Inc </li>
               <li> Database Technologist, Sun Microsystems </li>
               <li> Systems Executive, Sterling Holiday resorts </li>
            </ul>
        </p>
        `
    }
};

function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate = `
<html>
    <head>
        <title>
        ${title}
        </title>
        <link rel="stylesheet" type="text/css" href="/ui/style.css">
    </head>
    <body>
        <div class=overall>
            <div class=heading>
                <h1>
                ${heading}
                </h1>
    
                <div class=line_items>
                    <p>
                    ${content}
                    </p>
                </div>
            </div>
                   <a href="/"> Home </a>
        </div>
    </body>
</html>
    `;
    
    return htmlTemplate;
    
}

var counter=0 ;

app.get('/counter',function (req, res) { 
    counter = counter + 1 ;
    res.send(counter,toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:pageName', function (req, res) {
    pageName = req.params.pageName;
  res.send(createTemplate(pages[pageName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
