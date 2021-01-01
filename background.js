var state = false;


// check saved state and apply on page update
chrome.tabs.onUpdated.addListener(function (tabId) {

    if (state) {
        disableHref();
    }
});


function enableHref() {

    chrome.tabs.executeScript(null, { file: "fix.js" });
    chrome.browserAction.setIcon({path: {
        "16": "img/icon16.png",
        "32": "img/icon32.png",
        "48": "img/icon48.png",
        "128": "img/icon128.png"
    }});
}


function disableHref() {

    chrome.tabs.executeScript(null, { file: "script.js" });
    
    chrome.browserAction.setIcon({path: {
        "16": "img/iconActive16.png",
        "32": "img/iconActive32.png",
        "48": "img/iconActive48.png",
        "128": "img/iconActive128.png"
    }});
}


// check or save state from popup 
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.payload !== "check") {
        state = request.payload;

        if (state) {
            disableHref();
        } else {
            enableHref();
        }

    } else {
        sendResponse({ payload: state });
        return true;
    }
});
