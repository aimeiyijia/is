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