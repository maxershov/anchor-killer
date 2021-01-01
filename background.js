var state = false;

// check saved state and apply on page update
chrome.tabs.onUpdated.addListener(function (tabId) {

    if (state) {
        chrome.tabs.executeScript(tabId, { file: "script.js" });
    }
});


function enableHref() {

    chrome.browserAction.setIcon({ path: "img/icon16.png" })
    chrome.tabs.executeScript(null, { file: "fix.js" });
}

function disableHref() {

    chrome.tabs.executeScript(null, { file: "script.js" });
    chrome.browserAction.setIcon({ path: "img/iconActive16.png" })
}


// check or save state from popup 
chrome.runtime.onMessage.addListener(function (request, sendResponse) {

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
