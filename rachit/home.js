


function next()
{
    var current=document.querySelector(".row1");
    var current1=document.querySelector(".row2");
    current.style.display="none";
    current1.style.display="flex";
    
}
function prev()
{
    var current=document.querySelector(".row1");
    var current1=document.querySelector(".row2");
    current.style.display="flex";
    current1.style.display="none";
    
}
function play()
{
    var iframe = document.querySelector('.ifram');
     
    if(!iframe.muted)
    iframe.muted=true;
    else
    iframe.muted=false;
}



 