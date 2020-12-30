var state = false;

// check saved state and apply on page update
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (state) chrome.tabs.executeScript(tabId, { file: "script.js" });
});


// save state from popup 
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    state = request.payload;
})