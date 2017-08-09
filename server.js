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
            Bachelor of Science (Physics)
            Post Graduate Diploma in Computer Applications, Algappa university
        </p>
        `
    },
    experience:{
        title: 'experience',
        heading: 'EXPERIENCE',
        content: `
        <p>
           Senior Manager Database Engineering, Stubhub Inc
           Database Technologist, Sun Microsystems
           Systems Executive, Sterling Holiday resorts 
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
        ${title}
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
    pageName = req.param.pageName;
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
