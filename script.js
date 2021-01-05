var a = document.getElementsByTagName('a');

var style = document.createElement('style');
style.textContent = ".disabled-link-ext:hover { color: gray !important; cursor:not-allowed; }";
document.head.append(style);

for (var i = 0; i < a.length; ++i) {

    // fix err on update
    if (a[i].href != "javascript:void(0);") {
        a[i].title = a[i].href;
        a[i].href = "javascript:void(0);";
        a[i].classList.add('disabled-link-ext');
    }
}
