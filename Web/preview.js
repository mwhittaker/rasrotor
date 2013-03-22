/*******************************************************************************
 * File          : preview.js
 * Author        : Michael Whittaker
 * Email         : mjw297@cornell.edu
 * Last Modified : 2013-03-21 
 ******************************************************************************/

/*******************************************************************************
 * Previews the moused over link in the preview pane.
 ******************************************************************************/
function preview(obj) {
    var pane = document.getElementById("preview"); // The eventual preview picture
    var urll = obj.getAttribute("href"); // the url of the picture to preview
    pane.style.backgroundImage = "url(" + urll + ")";
}

/*******************************************************************************
 * Clears the preview pane.
 ******************************************************************************/
function deview() {
    var pane = document.getElementById("preview");
    pane.style.backgroundImage = "";
}
