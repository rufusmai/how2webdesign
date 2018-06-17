function unloadStylesheet() {
    let stylesheet = document.getElementsByTagName("link")[0];
    stylesheet.parentNode.removeChild(stylesheet);

    document.getElementById("unloadButton").disabled = true;
    document.getElementById("loadWindow").style.display = "flex";
}

function loadStylesheet() {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "css/main.css";

    document.head.appendChild(link);

    document.getElementById("unloadButton").disabled = false;
    document.getElementById("loadWindow").style.display = "none";
}

function addBorders() {
    let css = "* {border: 1px dashed black;}";
    let styleElement = document.createElement("style");
    styleElement.id = "borderStyle";
    styleElement.type = "text/css";

    if (styleElement.styleSheet){
      styleElement.styleSheet.cssText = css;
    } else {
      styleElement.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(styleElement);
    document.getElementById("addBorderButton").disabled = true;
}

function removeBorders() {
    let styleElement = document.getElementById("borderStyle");
    styleElement.parentElement.removeChild(styleElement);
    document.getElementById("addBorderButton").disabled = false;
}

function showModal(name) {
    let modal = document.getElementById(name);
    modal.style.display = "block";
}

function hideModal(name) {
    let modal = document.getElementById(name);
    modal.style.display = "none";
}

function scrollToObject(name) {
    let element = document.getElementById(name);
    element.scrollIntoView();
}

document.getElementById("global-find-form").onsubmit = function(event) {
    let section = document.getElementById("global-find").value;
    let element = document.getElementById(section);

    element.scrollIntoView();

    return false;
};

document.getElementById("contact-form").onsubmit = function(event) {
    let form = document.getElementById('contact-form');

    document.getElementById('contact-name').innerHTML = form.elements["name"].value;
    document.getElementById('contact-mail').innerHTML = form.elements["email"].value;
    document.getElementById('contact-adress').innerHTML = form.elements["adress"].value;

    showModal('contact-modal');

    return false;
};
