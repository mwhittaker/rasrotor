function preview(obj) {
    var pane = document.getElementById("preview"); // The eventual preview picture
    var urll = obj.getAttribute("href"); // the url of the picture to preview
    pane.style.backgroundImage = "url(" + urll + ")";
}

function deview() {
    var pane = document.getElementById("preview");
    pane.style.backgroundImage = "";
}
