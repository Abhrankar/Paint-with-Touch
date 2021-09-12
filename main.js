var mouseevent="empty";
var lastpositionofx, lastpositionofy;
var color="black";
var line_of_width=1;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
   color=document.getElementById('color').value;
   line_of_width=document.getElementById('width_of_the_line').value;
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
   current_x=e.clientX-canvas.offsetLeft;
   current_y=e.clientY-canvas.offsetTop;
   if (mouseevent=="mouseDown") {
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=line_of_width;
       console.log("last position of x and y coordinates= ");
       console.log("x= "+ lastpositionofx + " y= " + lastpositionofy);
       ctx.moveTo(lastpositionofx, lastpositionofy);
       console.log("current position of x and y coordinates= ");
       console.log("x= "+ current_x + " y= " + current_y);
       ctx.lineTo(current_x, current_y);
       ctx.stroke();
   }
   lastpositionofx=current_x;
   lastpositionofy=current_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;
    if (width < 992) {
        document.getElementById('myCanvas').width=new_width;
        document.getElementById('myCanvas').height=new_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}