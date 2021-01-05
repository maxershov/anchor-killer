var a = document.getElementsByTagName('a');
for (var i = 0; i < a.length; ++i) {
    a[i].href = a[i].title;
    a[i].classList.remove('disabled-link-ext');
}
