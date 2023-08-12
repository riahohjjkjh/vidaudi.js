var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Console: function() {
        return navigator.userAgent.match(/Xbox|Playstation/i);
    },
    smartTV: function() {
        return navigator.userAgent.match(/SMART-TV/i);
    },	
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    MacOSX: function() {
        return navigator.userAgent.match(/Macintosh/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Console() || isMobile.smartTV() || isMobile.Windows());
    }
};

var embedded = "m";
if (!isMobile.any()){
        embedded = "d";
}
			function g(t) {
				var e = new String("e");
				e.width = "100%"
				e.height = "100%";
				var r = "player="https://qatartv.akamaized.net/hls/live/2026574/qtv2/master.m3u8";
					n = "https://".concat(t, "/player.php"),
					a = "".concat(n, "?").concat(r),
					i = document.createElement("iframe");
				i.setAttribute("src", a), i.setAttribute("scrolling", "no"), i.setAttribute("frameborder", "0"), i.setAttribute("allow", "autoplay; fullscreen");
				var s = "allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
                                loaded = true;
console.log("initial2: "+loaded);
				return "function" == typeof document.hasStorageAccess && "function" == typeof document.requestStorageAccess && (s += " allow-storage-access-by-user-activation"), i.setAttribute("sandbox", s), e.width && i.setAttribute("width", String(e.width)), e.height && i.setAttribute("height", String(e.height)), i
			}
var loaded = false;
console.log("first: "+loaded);


    if (document.hidden){
console.log("started as hidden");
}else{
console.log("para3");
var para3 = g("voodc.com");
document.getElementById("zmqqbc-embed").appendChild(para3);
}

/*
function loadFrame() {
var para2 = g("voodc.com");
document.getElementById("zmqqbc-embed").appendChild(para2);
console.log("initial: "+loaded);
console.log("load frame");
}
*/
//if (loaded == false) {
//document.getElementById("zmqqbc-embed").appendChild(para);
//console.log("initial: "+loaded);
//}
//}


document.addEventListener("visibilitychange", function() {
console.log("visible: "+document.hidden);
    if (document.hidden){
console.log("h: "+loaded);
        console.log("Browser tab is hidden")
    } else {
if (loaded == false) {
var para4 = g("voodc.com");
document.getElementById("zmqqbc-embed").appendChild(para4);
loaded = true;
}
console.log("v: "+loaded);
        console.log("Browser tab is visible")
   }
});
