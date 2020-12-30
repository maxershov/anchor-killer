var port = chrome.runtime.connect({ name: "background" });



function killLinks(e) {
    chrome.tabs.executeScript(null, { file: "script.js" });

    chrome.runtime.sendMessage({ payload: true });

    window.close();
}

function stop(e) {
    // chrome.tabs.executeScript(null, { file: "fix.js" });

    chrome.runtime.sendMessage({ payload: false });

    window.close();
}


document.addEventListener('DOMContentLoaded', function () {
    var startBtn = document.getElementById('start');
    startBtn.addEventListener('click', killLinks);

    var stopBtn = document.getElementById('stop');
    stopBtn.addEventListener('click', stop);
});



