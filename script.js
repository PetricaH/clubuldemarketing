const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainMenu.classList.toggle('active');
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Get the cookie alert element
var cookieAlert = document.getElementById('cookieAlert');

// Get the accept button
var acceptCookie = document.getElementById('acceptCookie');

// Check if the user has accepted the cookie
if (localStorage.getItem('cookieAccepted') === null) {
    cookieAlert.style.display = 'block';
}

// When the user clicks "Got it," hide the cookie alert and set a cookie
acceptCookie.addEventListener('click', function() {
    cookieAlert.style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
});
