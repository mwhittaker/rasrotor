/*******************************************************************************
 * File          : script.js
 * Author        : Michael Whittaker
 * Email         : mjw297@cornell.edu
 * Last Modified : 2013-03-21 
 ******************************************************************************/

/*******************************************************************************
 * Inverts the color scheme from white to black and vice-versa.
 ******************************************************************************/
function hitTheLights(obj) {
    var banner = document.getElementById("bannerPic");
    var body = document.getElementById("body");
    var articles = document.getElementsByTagName("article");
    var paras = document.getElementsByTagName("p");
    var links = document.getElementsByTagName("a");

    // lights on
    if (banner.src.match("White")) {
        banner.src="../Media/Rasrotor_Banner.png";
        body.style.backgroundColor="white";
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.borderColor = "black";
        }
        for (var i = 0; i < paras.length; i++) {
            paras[i].style.color = "black";
        }
        for (var i = 0; i < links.length; i++) {
            if (links[i].className != "nav-option") {
                links[i].style.background = "white";
            }
        }
    }
    // lights off
    else {
        banner.src="../Media/Rasrotor_Banner_White.png";
        body.style.backgroundColor="black";
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.borderColor = "white";
        }
        for (var i = 0; i < paras.length; i++) {
            paras[i].style.color = "white";
        }
        for (var i = 0; i < links.length; i++) {
            if (links[i].className != "nav-option") {
                links[i].style.background = "black";
            }
        }
    }
}

