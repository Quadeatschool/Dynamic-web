

const themeSelector = document.querySelector('#theme-selector'); // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const currentTheme = themeSelector.value;
const body = document.body;
const logo = document.querySelector('.logo');

if (currentTheme ==='dark')// if the value is dark then:
{body.classList.add('dark')// add the dark class to the body
logo.src = 'images/byui-logo_white.png'// change the source of the logo img to point to the white logo.
}
// otherwise
// remove the dark class
else// make sure the logo src is the blue logo.
{
    body.classList.remove('dark')
    logo.src = 'images/byui-logo_blue.webp'
}
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);


