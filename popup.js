function killLinks(e) {
    chrome.tabs.executeScript(null,
        { file: "script.js" });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var startBtn = document.getElementById('start');
    startBtn.addEventListener('click', killLinks);
});