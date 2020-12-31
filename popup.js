var checkboxState = false;

chrome.runtime.sendMessage({
    payload: "check"
}, function (response) {
    checkboxState = response.payload;

    var checkbox = document.getElementById('checkbox');
    checkbox.checked = checkboxState;
});


function killLinks() {
    chrome.tabs.executeScript(null, { file: "script.js" });

    chrome.runtime.sendMessage({ payload: true });

    window.close();
}

function fixLinks() {
    chrome.tabs.executeScript(null, { file: "fix.js" });

    chrome.runtime.sendMessage({ payload: false });

    window.close();
}


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function (e) {
        if (e.target.checked) {
            killLinks();
        } else {
            fixLinks();
        }
    });

    var myLink = document.getElementById('link');
    myLink.addEventListener('click', function (e) {
        chrome.tabs.create({ url: e.target.href })
    });
});






