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
            <li> Bachelor of Science (Physics) </li>
            <li> Post Graduate Diploma in Computer Applications, Algappa university </li>
        </ul>
        </p>
        `
    },
    experience:{
        title: 'experience',
        heading: 'EXPERIENCE',
        content: `
        <p>
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
    </head>
    <body>
        <div class=overall>
            <div class=heading>
                <h1>
                ${heading}
                </h1>
    
                <div class=main_para>
                    <p>
                    ${content}
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>
    `;
    
    return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:pageName', function (req, res) {
    pageName = req.params.pageName;
  res.send(createTemplate(pages[pageName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
