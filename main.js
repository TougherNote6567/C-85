canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=200;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image="https://i.postimg.cc/tnnW1Kff/car2.png";

car2_width=200;
car2_height=70;
car2_x=10;
car2_y=100;
car2_image="https://i.postimg.cc/9rqYz9HM/car1.png";
background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
background_Img_Tag=new Image();
background_Img_Tag.src=background_image;
background_Img_Tag.onload=uploadBackground;

car1_Img_Tag=new Image();
car1_Img_Tag.src=car1_image;
car1_Img_Tag.onload=uploadCar1;

car2_Img_Tag=new Image();
car2_Img_Tag.src=car2_image;
car2_Img_Tag.onload=uploadCar2;
}

function uploadBackground() {
    ctx.drawImage(background_Img_Tag,0,0,canvas.width,canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_Img_Tag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_Img_Tag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_Key_Down);
function my_Key_Down(e){
    keyPressed=e.keyCode;
if(keyPressed=='38'){
car1_up();
console.log("Up arrow key has been pressed.");
    }
if(keyPressed=='40'){
car1_down();
console.log("Down arrow key has been pressed.");
}
if(keyPressed=='37'){
car1_left();
console.log("Left arrow key has been pressed.");
}
if(keyPressed=='39'){
car1_right();
console.log("Right arrow key has been pressed.");
}

if(keyPressed=='87'){
    car2_up();
    console.log("The 'W' key has been pressed.");
        }
if(keyPressed=='83'){
    car2_down();
    console.log("The 'S' arrow key has been pressed.");
}
if(keyPressed=='65'){
    car2_left();
    console.log("The 'A' arrow key has been pressed.");
}
    if(keyPressed=='68'){
    car2_right();
    console.log("The 'D' arrow key has been pressed.");
}

if(car1_x > 700){
    document.getElementById("game_status").innerHTML="Car 1 has won the game!!!";
}
else if(car2_x > 700){
    document.getElementById("game_status").innerHTML="Car 2 has won the game!!!";
}
}
function car1_up(){
    if(car1_y>=0){
car1_y=car1_y-5;
uploadBackground();
uploadCar1();
uploadCar2();
console.log("When the up arrow key is pressed, x="+car1_x+" and y="+car1_y);
    }
}

function car2_up(){
    if(car2_y>=0){
car2_y=car2_y-5;
uploadBackground();
uploadCar1();
uploadCar2();
console.log("When the up arrow key is pressed, x="+car2_x+" and y="+car2_y);
    }
}

function car1_down(){
    if(car1_y<=350){
car1_y=car1_y+5;
uploadBackground();
uploadCar1();
uploadCar2();
console.log("When the up arrow key is pressed, x="+car1_x+" and y="+car1_y);
    }
}

function car2_down(){
    if(car2_y<=350){
car2_y=car2_y+5;
uploadBackground();
uploadCar1();
uploadCar2();
console.log("When the up arrow key is pressed, x="+car2_x+" and y="+car2_y);
    }
}

function car1_left(){
    if(car1_x>=0){
car1_x=car1_x-5;
uploadBackground();
uploadCar1();
uploadCar2();
console.log("When the up arrow key is pressed, x="+car1_x+" and y="+car1_y);
    }
}
function car2_left(){
    if(car2_x>=0){
car2_x=car2_x-5;
uploadBackground();
uploadCar1();
uploadCar2();
console.log("When the up arrow key is pressed, x="+car2_x+" and y="+car2_y);
    }
}
    function car1_right(){
        if(car1_x<=700){
    car1_x=car1_x+5;
    uploadBackground();
    uploadCar1();
    uploadCar2();
    console.log("When the up arrow key is pressed, x="+car1_x+" and y="+car1_y);
        }
    }
    function car2_right(){
        if(car2_x<=700){
    car2_x=car2_x+5;
    uploadBackground();
    uploadCar1();
    uploadCar2();
    console.log("When the up arrow key is pressed, x="+car2_x+" and y="+car2_y);
        }
    }