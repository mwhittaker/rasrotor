//document.write("<p> Javascript Paragraph. </p>");

//document.getElementById("demo").innerHTML="Hello, Javascript!";

//function myFunction() {
//    alert("Hello, World!");
//}

//function myFunction() {
//    document.getElementById("demoPicture").src="../Media/Rasrotor_Logo_Black.png";
//    document.getElementById("demo").style.visibility="hidden";
//}
/*
function mOver(obj) {
    obj.src="../Media/Rasrotor_Logo_Black.png";
}

function mOut(obj) {
    obj.src="../Media/Rasrotor_Logo.png";
}

function mDown(obj) {
    obj.src="../Media/Rasrotor_Logo_Black.png";
    document.getElementById("bannerPic").src="../Media/Rasrotor_Banner_White.png";
    document.getElementById("body").style.backgroundColor="black";
}

function mUp(obj) {
    obj.src="../Media/Rasrotor_Logo.png";
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("bannerPic").src="../Media/Rasrotor_Banner.png";
}

function addPara() {
    var para = document.createElement("p");
    var text = document.createTextNode("click");

    para.appendChild(text);

    document.getElementById("demo").appendChild(para);
}
*/

function hitTheLights(obj) {
    var banner = document.getElementById("bannerPic");
    var body = document.getElementById("body");
    var articles = document.getElementsByTagName("article");
    var paras = document.getElementsByTagName("p");

    // lights on
    if (banner.src.match("White")) {
        banner.src="../Media/Rasrotor_Banner.png";
        body.style.backgroundColor="white";
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.borderColor="black";
        }
        for (var i = 0; i < paras.length; i++) {
            paras[i].style.color="black";
        }
    }
    // lights off
    else {
        banner.src="../Media/Rasrotor_Banner_White.png";
        body.style.backgroundColor="black";
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.borderColor="white";
        }
        for (var i = 0; i < paras.length; i++) {
            paras[i].style.color="white";
        }
    }
}

