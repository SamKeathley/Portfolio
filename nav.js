document.write('\
<div id="navigation" class="nav-wrapper">\
    <a class="logo" href="/"><h2>S</h2></a>\
    <nav>\
    <button id="hamburger" class="hamburger"><i class="fas fa-bars"></i></button>\
        <ul id="nav-links" class="nav-links">\
            <li><a class="about" rel="about" href="/about.html"><i class="fas fa-crow"></i></i></a></li>\
            <li><a class="skills" rel="skills" href="/skills.html"><i class="fas fa-brain"></i></a></li>\
            <li><a class="projects" rel="projects" href="/projects.html"><i class="fas fa-terminal"></i></a><li>\
            <li><a href="mailto: keathleysam@gmail.com"><i class="fas fa-envelope"></i></a></li>\
        </ul>\
   </nav>\
        <ul class="social">\
            <li><a href="#"><i class="fab fa-github"></i></a></li>\
            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>\
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>\
            </ul>\
    </div>');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.toggle('show');
});

// function(e) {
//     e.preventDefault();
//     if (!$(this).hasClass('active')) {
//       if (app.ui.pageLoad($(this).attr('href'), $(this).attr('rel'))) {
//         $('#nav_bar nav a.active').removeClass('active');
//         $(this).addClass('active');
//         window.history.pushState("", "", $(this).attr('href'));
//       }
//     }
//     $('a.logo').removeClass('active');
//     return false;
//   }