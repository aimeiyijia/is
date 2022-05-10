let platform = "unknow";
if (system === "windows" || system === "macos" || system === "linux") {
    platform = "desktop"; // 桌面端
} else if (system === "android" || system === "ios" || testUa(/mobile/g)) {
    platform = "mobile"; // 移动端
}

// let isWeixin = ua.indexOf('micromessenger') !== -1;
function isWxmini(){
  
}
function isDesktop(){}
function isWeb(){}
function isMobile(){}

var os = function() { 
    var ua = navigator.userAgent, 
    isWindowsPhone = /(?:Windows Phone)/.test(ua), 
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, 
    isAndroid = /(?:Android)/.test(ua), 
    isFireFox = /(?:Firefox)/.test(ua), 
    isChrome = /(?:Chrome|CriOS)/.test(ua), 
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)), 
    isPhone = /(?:iPhone)/.test(ua) && !isTablet, 
    isPc = !isPhone && !isAndroid && !isSymbian; 
    return { 
     isTablet: isTablet, 
     isPhone: isPhone, 
     isAndroid : isAndroid, 
     isPc : isPc 
    }; 
  }();
  