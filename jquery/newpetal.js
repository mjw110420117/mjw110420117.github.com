var canvas;
var cxt;
var r1 = 15;
var r = 20;   
var radian;//弧度   
var i;
var radianDecrement;//弧度增量   
var time = 50;//每个点之间的时间间隔   
var intervalId = new Array();   
var num = 150;//分割为 360 个点   
var startRadian = Math.PI;
isOver = true;
//记录原先的坐标
var x2 = 0;
var y2 = 0;

var xd = ($('#love').width()-1141)/2;//I love you的x位移
var yd = 200;//

function init()
{
    $("#love").css({"width":Math.max($(window).width(),1100)});
    $("#love").css({"height":$('#background').height()});
    $("#flower1").css("width",$('#love').width());
    $("#flower1").css("height",$('#words').height());
    $("#copyright").css("width",Math.max($(window).width(),1100));
    $("#copyright").css("top",$("#flower1").height());
}

function init_background()
{
  $("#background").css("width",$('#love').width());
 
}
function PositionLy()
{
    $("#ly").css("top",$('#background').height()/3.3);
    $("#ly").css("left",$('#background').width()/3.8);
    $("#ly").css("position","absolute");
    $('#ly').css("width",Math.max($(window).width()/9,122));
}

function PositionWords()
{
    $("#words").css("width",Math.max($(window).width(),1100));
    
}
function Showly()
{
    $('#ly').fadeIn(3000);
}
function ShowBackground()
{
    $('#background').fadeIn(3000);
}
function fadeBackground()
{
    $('#flower1').fadeOut(3000);
}
function fadewords()
{
    $('#words').fadeOut(3000);
}
//得到随机颜色
function getRandomColor()
{
    var r = Math.floor(Math.random()*(255-128)+128);
    var g = Math.floor(Math.random()*(200-128)+128);
    var b = Math.floor(Math.random()*(128));
    var a = Math.random();
    if(Math.abs(r-g)<5&&Math.abs(g-b)<5&&Math.abs(b-a)<5)
    {
        return "rgba(182,100,50,0.8)";
    }
    else
    {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")"; 
    }
} 
//画花
function draw(x1,y1,r){
        var angle,x,y,z;
        //var r = 10;//花瓣大小
        var beta = 0;
        //var k = 3;//花瓣的个数
        //var n = 2;//花瓣的厚度
        //r = Math.floor(Math.random()*4+8);
        k = Math.floor(Math.random()*2+2);
        n = Math.floor(Math.random()*2+1);
        cxt.save();
        cxt.strokeStyle = getRandomColor();//"rgba(200,0,0,1)";
        cxt.globalCompositeOperation="source-over";
        cxt.beginPath();
        cxt.moveTo(x1,y1);
        for(angle = 0; angle < 2*Math.PI; angle += 0.005*Math.PI)
        {
            z = k*(angle - beta);
            z = Math.sin(z);
            z = Math.abs(z);
            z = Math.pow(z,n);
            z *= r;
            x = z * Math.cos(angle);
            y = z * Math.sin(angle);
            cxt.lineTo(x+x1,y+y1);
            cxt.stroke();
            cxt.moveTo(x+x1,y+y1);
        }
        cxt.closePath();
        cxt.restore();
    }   
function startAnimation() {
            drawI1();  
       
}
var x5 = xd + 350;
var y5 = yd + 150;
 
                 
function drawHeart() {   
    //cxt.strokeStyle = "rgb(255, 0, 128)";   
    //cxt.lineWidth = 6;//设置线的宽度 
    isOver = false;   
    radian = startRadian;//弧度设为初始弧度   
    radianDecrement = Math.PI / num * 2;   
    cxt.moveTo(getX(x5,radian,0.5), getY(y5,radian,0.5));//移动到初始点 
    i = 0;   
    num = 150;//分成 360 个点   
    intervalId[0] = setInterval("paintHeart()", time);
}   
function paintHeart() {   
    radian += radianDecrement;   
    //cxt.lineTo(getX(radian), getY(radian));//在旧点和新点之间连线   
    i++;   
    //ctx.stroke();//画线
    r1 = Math.floor(Math.random()*4+8);
    x = getX(x5,radian,0.5);
    y = getY(y5,radian,0.5);
    if(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2)) > 2*r1)
    {
        draw(x,y,r1)
        x2 = x;
        y2 = y;  
    } 
    if(i >= num) {   
        clearInterval(intervalId[0]);
        drawY1();}
}


var xI1 = xd;
var yI1 = yd + 20;   
function drawI1()
{
    cxt.moveTo(xd, yd + 20);
    intervalId[1] = setInterval("paintI1()", time);
}
function paintI1()
{
    r1 = Math.floor(Math.random()*4+8);
    xI1 += 2*r1;

    draw(xI1,yI1,r1) 
    if(xI1 >= 100 + xd) {   
        clearInterval(intervalId[1]);  
        drawI2(); 
    }   
} 
var xI2 = xd + 60;
var yI2 = yd + 20;
function drawI2()
{
    cxt.moveTo(xd + 60, yd + 20);
    intervalId[2] = setInterval("paintI2()", time);
} 
function paintI2()
{
    r1 = Math.floor(Math.random()*4+8);
    //x += 2*r1;
    yI2 += 2*r1;
    draw(xI2,yI2,r1) 
    if(yI2 >= 320 + yd) {   
        clearInterval(intervalId[2]);
        drawI3();   
    }   
}

var xI3 = xd;
var yI3 = yd + 345;
function drawI3()
{
    cxt.moveTo(xd, yd + 345);
    //x = 200;
    intervalId[3] = setInterval("paintI3()", time);
} 
function paintI3()
{
    r1 = Math.floor(Math.random()*4+8);
    //x += 2*r1;

    xI3 += 2*r1;
    draw(xI3,yI3,r1)  
    if(xI3 >= xd + 100) {   
        clearInterval(intervalId[3]); 
        drawHeart();  
    }   
}                      

var xY1 = xd + 600;
var yY1 = yd;
function drawY1()
{
    cxt.moveTo(xd + 600, yd);
    intervalId[4] = setInterval("paintY1();", time);
}
function paintY1()
{
    r1 = Math.floor(Math.random()*4+8);
    //x += 2*r1;

    xY1 += 2*r1;
    yY1 = xY1 - xd + yd - 600;
    draw(xY1,yY1,r1)  
    if(xY1 >= xd + 700) {   
        clearInterval(intervalId[4]);  
        drawY2(); 
    }   
}


function drawY2()
{
    cxt.moveTo(xd + 800, yd );
    intervalId[5] = setInterval("paintY2();", time);
}
var xY2 = xd + 800;
var yY2 = yd ;
function paintY2()
{
    r1 = Math.floor(Math.random()*4+8);
    //x += 2*r1;

    xY2  = xY2 - 2*r1;
    yY2  = xd + yd + 800 - xY2;
    draw(xY2,yY2,r1)  
    if(xY2 <= xd + 690) {   
        clearInterval(intervalId[5]);  
        drawY3();
    }   
}

var xY3 = xd + 700;
var yY3 = yd + 100;
function drawY3()
{
    cxt.moveTo(xd + 700, yd + 160);
    intervalId[6] = setInterval("paintY3();", time);
}
function paintY3()
{
    r1 = Math.floor(Math.random()*4+8);
    //x += 2*r1;

    //xY3 -= 2*r1;
    yY3 += 2*r1;
    draw(xY3,yY3,r1)  
    if(yY3 >= yd + 385) {   
        clearInterval(intervalId[6]);  
        drawO();  
    }   
}
var radianO;
var startRadianO = Math.PI;
var x3 = xd + 830;
var y3 = yd + 200;
function drawO() {   
    //cxt.strokeStyle = "rgb(255, 0, 128)";   
    //cxt.lineWidth = 6;//设置线的宽度 
    radianO = startRadianO;//弧度设为初始弧度   
    radianDecrement = Math.PI / num * 2;   
    cxt.moveTo(getOX(x3,radianO,1), getOY(y3,radianO,1));//移动到初始点 
    i = 0;   
    num = 150;//分成 360 个点   
    intervalId[7] = setInterval("paintO()", time);
}   
function paintO() {   
    radianO += radianDecrement;   
    //cxt.lineTo(getOX(x3,radianO,1), getOY(y3,radianO,1));//在旧点和新点之间连线   
    i++;   
    //cxt.stroke();//画线
    r1 = Math.floor(Math.random()*4+8);
    x = getOX(x3,radianO,1);
    y = getOY(y3,radianO,1);
    if(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2)) > 2 * r1)
    {
        draw(x,y,r1)
        x2 = x;
        y2 = y;  
    } 
    if(i >= num) {   
        clearInterval(intervalId[7]); 
        drawU();   
    }   
}
function getOX(x,t,a)
{
    return x + a * 70* Math.sin(t);
}
function getOY(y,t,a)
{
    return y + a * 140 * Math.cos(t);
}
var xU = xd + 941;
var yU = yd + 71;
function drawU() {   
    //cxt.strokeStyle = "rgb(255, 0, 128)";   
    //cxt.lineWidth = 6;//设置线的宽度   
    cxt.moveTo(xd + 941, yd + 350 - 0.04 * Math.pow(xU-1030 - xd,2));//移动到初始点 
   
    intervalId[8] = setInterval("paintU()", time);
}   
function paintU() {      
    //cxt.stroke();//画线
    r1 = Math.floor(Math.random()*4+8);
    xU += 1.2;
    yU = yd + 350 - 0.04 * Math.pow(xU- xd -1030,2);
    //cxt.lineTo(xU,yU);
    //cxt.stroke();
    if(Math.sqrt(Math.pow(xU-x2,2)+Math.pow(yU-y2,2)) > 2 * r1)
    {
        draw(xU,yU,r1)
        x2 = xU;
        y2 = yU;  
    } 
    if(xU >= xd + 1119) {   
        clearInterval(intervalId[8]); 
        Showly();   
    }   
}

function getX(x,t,a) {//由弧度得到 X 坐标   
    return x + r * (a*16 * Math.pow(Math.sin(t), 3));//350 + r * (16 * Math.pow(Math.sin(t), 3))   400 + r * (a*8 * Math.pow(Math.sin(t), 3));
}   
                 
function getY(y,t,a) {//由弧度得到 Y 坐标   
    return y - r * (a*13 * Math.cos(t) - a*5 * Math.cos(2 * t) - a*2 * Math.cos(3 * t) - a*Math.cos(4 * t)) ;//300 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))   500- r * (a*6 * Math.cos(t) - a*2.5* Math.cos(2 * t) -  a*1*Math.cos(3 * t) - a*0.5*Math.cos(4 * t))
}

function typewriter(t)
{
            var d=$(t),c=d.html(),b=0;d.html("");
            var e=setInterval(function(){
                var f=c.substr(b,1);
                if(f=="<")
                    {
                        b=c.indexOf(">",b)+1
                    }
                    else{b++}
                d.html(c.substring(0,b)+(b&1?"_":""));
                if(b>=c.length)
                {
                    clearInterval(e);
                    canvas = document.getElementById("background");
                    cxt = canvas.getContext('2d');
                    fadewords();
                    fadeBackground();
                    ShowBackground();
                    init_background();
                    PositionLy();
                    startAnimation();
                }
            },150)
} 

//画点
var canvas1 = document.getElementById("flower1");
var cxt1 = canvas1.getContext('2d');
function drawPoint()
{
    var rxing = $(window).width()/1583*0.6;

    var x = Math.random()*canvas1.width;
    var y = Math.random()*canvas1.height;
    var rmeteor = Math.random()*rxing;
    var rad1 = Math.random()*Math.PI*0.5;
    //var rad2 = Math.random()*Math.PI*0.5+2*Math.PI;
    var anticlockwise = true;
   
    var a = Math.random();
    var color = "#FFFFFF";
    cxt1.fillStyle = color;
    //cxt1.scale(2,1);
    cxt1.beginPath();
    cxt1.arc(x,y,rmeteor,0,Math.PI * 2,true);
    cxt1.closePath();
    cxt1.fill();
}
//满天星
function fullsky()
{

    var ncount = $(window).width()*1.1;
    for (var i = 0; i < ncount; i++)
    {
        drawPoint();
    }
}
