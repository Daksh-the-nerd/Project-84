    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    img_width = 300;
    img_height = 100;

    var img_image;

    img_x = 100;
    img_y = 100;
    window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed >=97 && keyPressed <=122 || keyPressed >=65 && keyPressed <=90)
    {
        uploadAlphakey();
        document.getElementById("d1").innerHTML="You Pressed An Alphabet Key"
        console.log("alphabet key")
    }
    if(keyPressed >=48 && keyPressed <=57)
    {
        numkey();
        document.getElementById("d1").innerHTML="You Pressed A Number Key"
        console.log("No key")
    }
    if(keyPressed >=37 && keyPressed <=40)
    {
        uploadArrkey();
        document.getElementById("d1").innerHTML="You Pressed An Arrow Key"
        console.log("arrow key")
    }
    if(keyPressed ==17)
    {
        spkey();
        document.getElementById("d1").innerHTML="You Pressed A Special Key"
        console.log("sp key")
    }
    if(keyPressed ==18)
    {
        spkey();
        document.getElementById("d1").innerHTML="You Pressed A Special Key"
        console.log("sp key")
    }
    if(keyPressed ==27)
    {
        spkey();
        document.getElementById("d1").innerHTML="You Pressed A Special Key"
        console.log("sp key")
    }
}
function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}
function uploadimg()
{
    ctx.drawImage(img_imgTag,img_x,img_y,img_width,img_height);
}
function uploadAlphakey()
{
    img_image="Alpkey.png"
    add()
}
function uploadArrkey()
{
    img_image="Arrkey.png"
    add()
}
function numkey()
{
    img_image="numkey.png"
    add()
}
function spkey()
{
    img_image="spkey.png"
    add()
}
function otherkey()
{
    img_image="otherkey.png"
    add()
}