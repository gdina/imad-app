var button = document.getElementById('click_likes');
var counter = 0 ;
button.onclick = function () {
    
    counter = counter + 1 ;
    var span = document.getElementById('likes');
    span.innerHTML = counter.toString() ;
    
};