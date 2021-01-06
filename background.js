var state = false;
var tabNum = "";


// check saved state and apply on page update
chrome.tabs.onUpdated.addListener(function (tabId) {
    if (tabNum === tabId) {
        if (state) {
            disableHref();
        }
    }
});


function enableHref() {

    chrome.tabs.executeScript(tabNum, { file: "fix.js" });
    chrome.browserAction.setIcon({
        path: {
            "16": "img/icon16.png",
            "32": "img/icon32.png",
            "48": "img/icon48.png",
            "128": "img/icon128.png"
        }
    });
}


function disableHref() {

    chrome.tabs.executeScript(tabNum, { file: "script.js" });

    chrome.browserAction.setIcon({
        path: {
            "16": "img/iconActive16.png",
            "32": "img/iconActive32.png",
            "48": "img/iconActive48.png",
            "128": "img/iconActive128.png"
        }
    });
}



// disable ext after tab close
chrome.tabs.onRemoved.addListener(function (tabid, removed) {

    chrome.browserAction.setIcon({
        path: {
            "16": "img/icon16.png",
            "32": "img/icon32.png",
            "48": "img/icon48.png",
            "128": "img/icon128.png"
        }
    });
})


// save state from popup and call func
chrome.runtime.onMessage.addListener(function (request) {

    state = request.payload;
    tabNum = request.tabNum;
    if (state) {
        disableHref();
    } else {
        enableHref();
    }
});
