var a = document.getElementsByTagName('a');
for (var i = 0; i < a.length; ++i) {
    a[i].title = a[i].href;
    a[i].href = "javascript:void(0);";
}