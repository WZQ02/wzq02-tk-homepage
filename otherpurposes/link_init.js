setTimeout("listfall()","16");
function listfall() {
    var lists = document.getElementsByClassName("li");
    icount = 0;
    for (var i of lists) {
        i.style.opacity = "1.0";
        i.style.top = icount*80+"px";
        icount++;
    }
}
function jump() {
    var url = window.location.href;
    if (url.indexOf("fromen") != -1) {
        window.location.href = "http://wzq02.tk/new_eng.html?flag=1";
    }
    else {
        window.location.href = "http://wzq02.tk/new_zhcn.html?flag=1";
    }
}