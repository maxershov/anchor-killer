var checkboxState = false;
var tabNum = "";


// pass active TabId to the background.js  
chrome.tabs.query({  active: true, currentWindow:true}, function (tabs){
    var currentTab = tabs[0];
    tabNum = currentTab.id;

    // enable on click on icon
    chrome.runtime.sendMessage({ payload: true, tabNum: tabNum });
});


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');

    checkbox.checked = true;


    checkbox.addEventListener('change', function (e) {
        if (e.target.checked) {
            chrome.runtime.sendMessage({ payload: true, tabNum:tabNum });

        } else {
            chrome.runtime.sendMessage({ payload: false, tabNum: tabNum });
        }

        window.close()
    });


    // open new tab for my page
    var myLink = document.getElementById('link');
    myLink.addEventListener('click', function (e) {
        chrome.tabs.create({ url: e.target.href })
    });
});






