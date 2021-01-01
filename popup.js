var checkboxState = false;


chrome.runtime.sendMessage({
    payload: "check"
}, function (response) {

    checkboxState = response.payload;

    var checkbox = document.getElementById('checkbox');
    checkbox.checked = checkboxState;
});



document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', function (e) {

        if (e.target.checked) {
            chrome.runtime.sendMessage({ payload: true });

        } else {
            chrome.runtime.sendMessage({ payload: false });
        }

        window.close()
    });

    var myLink = document.getElementById('link');
    myLink.addEventListener('click', function (e) {
        chrome.tabs.create({ url: e.target.href })
    });
});






