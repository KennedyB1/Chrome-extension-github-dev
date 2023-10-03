let sida = window.location.href;
// console.log(sida);
let pattern = 'github.com';
let result = sida.match(pattern);

if (sida = result) {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('.com', '.dev');
    window.location.replace(newUrl);
} else {
    console.log('Visit github to use this extension');
}

