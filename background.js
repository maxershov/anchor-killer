var state = false;


// check saved state and apply on page update
chrome.tabs.onUpdated.addListener(function (tabId) {

    if (state) {
        disableHref();
    }
});


function enableHref() {

    chrome.tabs.executeScript(null, { file: "fix.js" });
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

    chrome.tabs.executeScript(null, { file: "script.js" });

    chrome.browserAction.setIcon({
        path: {
            "16": "img/iconActive16.png",
            "32": "img/iconActive32.png",
            "48": "img/iconActive48.png",
            "128": "img/iconActive128.png"
        }
    });
}


chrome.browserAction.onClicked.addListener(function () {
    disableHref();
});


// disable ext after tab close
chrome.tabs.onRemoved.addListener(function (tabid, removed) {
    enableHref();
})

// save state from popup and call func
chrome.runtime.onMessage.addListener(function (request) {

    state = request.payload;

    if (state) {
        disableHref();
    } else {
        enableHref();
    }
});
