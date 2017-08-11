var lis=document.getElementById('horizontal-list').getElementsByTagName('li');


    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', doStuff, false);
    }

    function doStuff() {
        pageName=this.innerHTML;
        alert(pageName);
      //  app.get(this.innerHTML, function (req, res) {
   // pageName = req.params.pageName;
  //res.send(createTemplate(pages[pageName])); 
//});
    }