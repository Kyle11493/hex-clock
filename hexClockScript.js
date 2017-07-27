﻿function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        "#" + h + "" + m + "" + s;
    document.getElementById('obojajMe').style.backgroundImage = "linear-gradient(#" + h + "" + m + "" + s + ", white)";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}