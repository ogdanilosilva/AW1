window.onload = function () {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    var closeButton = document.getElementById("closeButton");
    closeButton.onclick = function () {
        popup.style.display = "none";
    };
};
