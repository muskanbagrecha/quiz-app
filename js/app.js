// Toggle theme
function toggleTheme() {
    let theme = document.querySelector('link');
    console.log(theme);
    if (theme.getAttribute('href') === 'https://card-input.netlify.app/lighttheme.css') {
        console.log('light');
        theme.setAttribute('href', 'https://card-input.netlify.app/darktheme.css');
    } else {
        theme.setAttribute('href','https://card-input.netlify.app/lighttheme.css');
    }
}