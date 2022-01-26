setTimeout("autochangetheme()","32");
function autochangetheme() {
    var n = getCookie('userskin');
    var lists = document.getElementsByClassName("li");
    if (n == "1") {
        icount = 0;
        for (var i of lists) {
            i.style.boxShadow = "none";
            i.style.border = "2px solid #676767";
        icount++;
        }
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}