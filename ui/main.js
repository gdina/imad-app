var lis=document.getElementById('horizontal-list').getElementsByTagName('li');


    for (var i=0; i<lis.length; i++) {
        
        lis[i].addEventListener('click', doStuff(), false);
    }

    function doStuff() {
        pageName=this.innerHTML;
        //alert(pageName);
        
    send(createTemplate(pages[pageName]));

      
    }
    
 
    