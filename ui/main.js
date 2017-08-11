var lis=document.getElementById('horizontal-list').getElementsByTagName('li');


    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', doStuff(res), false);
    }

    function doStuff(res) {
        pageName=this.innerHTML;
        //alert(pageName);
        
  res.send(createTemplate(pages[pageName]));

      
    }