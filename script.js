var a = document.getElementsByTagName('a');

for (var i = 0; i < a.length; ++i) {

    // fix err on update
    if (a[i].href != "javascript:void(0);") {
        a[i].title = a[i].href;
        a[i].href = "javascript:void(0);";
    }
}
