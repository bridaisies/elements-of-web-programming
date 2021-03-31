var idx = 0;
var cnt = null;

function slideShow() {
        var s = document.getElementsByClassName("slide");
        var ln = s.length;
        var x;
        for (x = 0; x < ln; x++) {
        s[x].style.display = "none";
}
        idx++;
        if (idx > ln) {
                idx = 1;
}
        s[idx - 1].style.display = "block";
        cnt = setTimeout(slideShow, 3000);
}

function startSlides(){
        idx = idx - 1;
        slideShow();
}

function stopSlides(){
        clearInterval(cnt);
}
