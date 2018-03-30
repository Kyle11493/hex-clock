function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

	hh = Math.round(h*10.624);
    hh = h.toString(16);
    hh = formatHexValue(hh);
	
	mm = Math.round(m*4.25);
    mm = m.toString(16);
    mm = formatHexValue(mm);
	
	ss = Math.round(s*4.25);
    ss = s.toString(16);
    ss = formatHexValue(ss)
	
	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + "<br/>" + "#" + hh + ":" + mm + ":" + ss;
		
	
    document.getElementById('obojajMe').style.backgroundImage = "linear-gradient(#" + hh + "" + mm + "" + ss + ", white)";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function formatHexValue(value) {
    if(value.length === 1) {
        return "0" + value;
    } else {
        return value;
    }
}