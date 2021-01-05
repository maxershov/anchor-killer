var checkboxState = false;


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');

    // enable on click on icon
    chrome.runtime.sendMessage({ payload: true });
    checkbox.checked = true;


    checkbox.addEventListener('change', function (e) {

        if (e.target.checked) {
            chrome.runtime.sendMessage({ payload: true });

        } else {
            chrome.runtime.sendMessage({ payload: false });
        }

        window.close()
    });


    // open new tab for my page
    var myLink = document.getElementById('link');
    myLink.addEventListener('click', function (e) {
        chrome.tabs.create({ url: e.target.href })
    });
});






