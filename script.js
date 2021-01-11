var a = document.getElementsByTagName('a');

var style = document.createElement('style');
style.textContent = ".disabled-link-ext:hover { color: gray !important; cursor:not-allowed; }";
document.head.append(style);

for (var i = 0; i < a.length; ++i) {

    // fix err on update
    if (a[i].href != "javascript:void(0);") {

        // save init attrs 
        a[i].setAttribute('ext-use', true);
        a[i].setAttribute('ext-target', a[i].target);
        a[i].setAttribute('ext-title', a[i].title);

        a[i].title = a[i].href;
        a[i].target = "_self"
        a[i].href = "javascript:void(0);";
        a[i].classList.add('disabled-link-ext');
    }
}
