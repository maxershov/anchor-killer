var a = document.getElementsByTagName('a');
for (var i = 0; i < a.length; ++i) {

    if (a[i].getAttribute('ext-use')) {

        a[i].href = a[i].title;
        a[i].title = a[i].getAttribute('ext-title');
        a[i].classList.remove('disabled-link-ext');
        a[i].target = a[i].getAttribute('ext-target');

        // clean up 
        a[i].removeAttribute('ext-use');
        a[i].removeAttribute('ext-title');
        a[i].removeAttribute('ext-target');
    }
}
