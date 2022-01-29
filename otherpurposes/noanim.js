    function disableanimation() {
    	var body = document.body;
    	var board = document.getElementsByClassName("board")[0];
        var outlinks = document.getElementsByClassName("outlinks")[0];
        var s1 = document.getElementById("section1");
        var s2 = document.getElementById("section2");
        var s3 = document.getElementById("section3");
        var s4 = document.getElementById("section4");
        var l1 = document.getElementById("link1");
        var l2 = document.getElementById("link2");
        var l3 = document.getElementById("link3");
        var l4 = document.getElementById("link4");
        var l5 = document.getElementById("link5");
        var l6 = document.getElementById("link6");
        for (var i of [body,s1,s2,s3,s4,l1,l2,l3,l4,l5,l6]) {
            i.style.transition = "none";
        }
        for (var i of [board,outlinks,s1,s2,s3,s4]) {
            i.style.animation = "none";
        }
    }
