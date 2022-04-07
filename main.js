function init() {
    var url = window.location.href;
    autochangetheme();
    if (url.indexOf("flag") != -1) {
        changeanimation();
    }
    else {
        sectionseq();
    }
    if (url.indexOf("eng") != -1) {
        v1();
    }
}
function clearprompt() {
    var prompt = document.getElementById("prompt");
    prompt.style.animation = "";
    prompt.style.display = "none";
}
function clearprompt2() {
	var prompt2 = document.getElementById("prompt2");
	prompt2.style.animation = "";
    prompt2.style.display = "none";
}
function help1() {
    var prompt = document.getElementById("prompt");
    if (prompt.style.display == "block") {
        prompt.style.animation = "llaf 0.31s ease 1";
        setTimeout("clearprompt()","300");
    }
    else {
        prompt.style.display = "block";
    }
}
function help2() {
    var prompt = document.getElementById("prompt");
    var prompt2 = document.getElementById("prompt2");
    if (prompt2.style.display == "block") {
        prompt2.style.animation = "llaf2 0.31s ease 1";
        setTimeout("clearprompt2()","300");
    }
    else {
        if (prompt.style.display == "block") {
        	prompt.style.animation = "llaf 0.31s ease 1";
        	setTimeout("clearprompt()","300");
        }
        prompt2.style.display = "block";
    }
}
function changeanimation() {
    var board = document.getElementsByClassName("board")[0];
    var outlinks = document.getElementsByClassName("outlinks")[0];
    var s1 = document.getElementById("section1");
    var s2 = document.getElementById("section2");
    var s3 = document.getElementById("section3");
    var s4 = document.getElementById("section4");
    board.style.animation = "boardfall 0.5s cubic-bezier(0, 0.67, 0, 1) 1"
    outlinks.style.animation = "linksfall 0.5s cubic-bezier(0, 0.67, 0, 1) 1"
    s1.style.animation = "none"
    s2.style.animation = "none"
    s3.style.animation = "none"
    s4.style.animation = "none"
}
function changetheme() {
    var url = window.location.href;
    var n = getCookie('userskin');
    var chgskin = document.getElementById("chgskin");
    var skin = document.getElementById("current_skin");
    if (n == "1") {
        setCookie('userskin',"",365)
        if (url.indexOf("zh") != -1) {
            chgskin.innerText = "简约主题";
        }
        else {
            chgskin.innerText = "High Contrast Skin";
        }
        skin.href = "./style.css";
    }
    else {
        setCookie('userskin',1,365);
        autochangetheme();
    }
}
function autochangetheme() {
    var url = window.location.href;
    var n = getCookie('userskin');
    var chgskin = document.getElementById("chgskin");
    var skin = document.getElementById("current_skin");
    if (n == "1") {
        if (url.indexOf("zh") != -1) {
            chgskin.innerText = "默认主题";
        }
        else {
            chgskin.innerText = "Default Skin";
        }
        skin.href = "./style_hicon.css";
    }
}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
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
function sectionseq() {
    var hp1 = document.getElementById("help1");
    var s2 = document.getElementById("section2");
    var s3 = document.getElementById("section3");
    var s4 = document.getElementById("section4");
    hp1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "none";
    s4.style.display = "none";
    setTimeout(function(){s2.style.display = "";},"200");
    setTimeout(function(){s3.style.display = "";},"400");
    setTimeout(function(){hp1.style.display = "";},"600");
    setTimeout(function(){s4.style.display = "";},"600");
}