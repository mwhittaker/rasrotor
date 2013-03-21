function preview(obj) {
    var previewPic = document.getElementById("previewPic"); // The eventual preview picture
    var url = obj.getAttribute("href"); // the url of the picture to preview
//    var dimPic = new Image(); // the dimension testing pic

    // calculate dimensions
//    dimPic.src = url;
//    var delWidth = (520-dimPic.width)/2;
//    var delHeight = (390-dimPic.height)/2;    

    // assign url to preview
    previewPic.src = url;

    // set height and width according to dimension measurements
//    if (delWidth < delHeight) {
//        previewPic.style.width = "520px";
//        previewPic.style.height = "auto";
//        preview.style.marginTop = delHeight.toString();
//    }
//    else {
//        previewPic.style.height = "390px";
//        previewPic.style.width = "auto";
//    }
    
    // make visible
    previewPic.style.visibility = "visible";
}

function deview() {
    var previewPic = document.getElementById("previewPic");
    previewPic.style.visibility = "hidden";
    previewPic.src = "../Media/Pixel.gif";
}
