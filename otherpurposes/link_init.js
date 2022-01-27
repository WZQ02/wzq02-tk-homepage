setTimeout("listfall()","16");
function listfall() {
    var lists = document.getElementsByClassName("li");
    for (var i=0; i < lists.length; i++) {//调整for循环代码，以防止IE下无法执行
        lists[i].style.opacity = "1.0";
        lists[i].style.top = i*80+"px";
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