function loadNavbar() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar').innerHTML = xhr.responseText;
            loadFooter();
        }
    };
    xhr.send();
}
function loadJs() {
    loadNavbar();
}
function loadFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './footer.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
        }
        loadJsonData();
    };
    xhr.send();
}