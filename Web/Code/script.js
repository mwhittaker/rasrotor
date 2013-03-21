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

