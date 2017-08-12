var button = document.getElementById('click_likes');

var counter = 0 ;

button.onclick = function ( ) 
{
    
    var request =  new XMLHttpRequest() ;
    
    request.onreadystatechange = function() 
    {
        
        if (request.readyState === XMLHttpRequest.DONE )
        {
             if (request.status === 200 )
             {
                    var counter = request.responseText;
                    var span = document.getElementById('likes');
                    span.innerHTML = counter.toString() ;
             }
        }
    
    };
    
     request.open('GET','http://gdinakar96.imad.hasura-app.io/counters');
     request.send(null);
};