function preview(obj) {
    var previewPic = document.getElementById("previewPic"); // The eventual preview picture
    var url = obj.getAttribute("href"); // the url of the picture to preview
    var para = document.getElementById("demo");

   
    // create dimension image
//    var dim = new Image();
 //   dim.src = url;
//    dim.style.width = '390px';
//    dim.style.height = 'auto';

 //   var disp = (355-parseInt(dim.style.height))/2;
  
  
//    para.innerHTML = "url of image going into is: " + url + "; width is: " + dim.style.width + "; height is: " + dim.style.height;
     
    previewPic.src = url;
 //   previewPic.style.marginTop = disp;
    previewPic.style.visibility = "visible";
}

function deview() {
    var preview = document.getElementById("previewPic");
    
    //preview.src = null;
    previewPic.src = "../Media/Pixel.gif";
    //preview.style.visibility = "hidden";
}
