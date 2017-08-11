var element=document.getElementById('horizontal-list').getElementsByTagName('li');

element.getElementById("parent-list").addEventListener("click",function() {
        // e.target is our targetted element.
                    // try doing console.log(e.target.nodeName), it will result LI
        if(e.target == "qualification") {
            console.log(e.target.innerHTML + " was clicked");
        }
    });
    

    