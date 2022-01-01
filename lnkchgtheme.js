setTimeout("autochangetheme()","32");
function autochangetheme() {
    var n = getCookie('userskin');
    var l1 = document.getElementById("l1");
    var l2 = document.getElementById("l2");
    var l3 = document.getElementById("l3");
    var l4 = document.getElementById("l4");
    var l5 = document.getElementById("l5");
    var l6 = document.getElementById("l6");
    var l7 = document.getElementById("l7");
    var l8 = document.getElementById("l8");
    var lb = document.getElementById("lb");
    if (n == "1") {
    	lb.style.boxShadow = "none";
        lb.style.border = "2px solid #676767";
        l1.style.boxShadow = "none";
        l1.style.border = "2px solid #676767";
        l2.style.boxShadow = "none";
        l2.style.border = "2px solid #676767";
        l3.style.boxShadow = "none";
        l3.style.border = "2px solid #676767";
        l4.style.boxShadow = "none";
        l4.style.border = "2px solid #676767";
        l5.style.boxShadow = "none";
        l5.style.border = "2px solid #676767";
        l6.style.boxShadow = "none";
        l6.style.border = "2px solid #676767";
        l7.style.boxShadow = "none";
        l7.style.border = "2px solid #676767";
        l8.style.boxShadow = "none";
        l8.style.border = "2px solid #676767";
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