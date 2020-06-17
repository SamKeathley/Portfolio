document.write('\
<div id="navigation" class="nav-wrapper">\
    <a class="logo" href="/"><h2>S</h2></a>\
    <nav>\
    <button id="hamburger" class="hamburger"><i class="fas fa-bars"></i></button>\
        <ul id="nav-links" class="nav-links">\
            <a rel="home" href="/"><i class="fas fa-home"></i><b>HOME</b></a>\
            <a rel="about" href="/about.html"><i class="fas fa-crow"></i><b>ABOUT</b></a>\
            <a rel="skills" href="/skills.html"><i class="fas fa-brain"></i><b>SKILLS</b></a>\
            <a rel="projects" href="/projects.html"><i class="fas fa-terminal"></i><b>PROJECTS</b></a>\
            <a rel="contact" href="/contact.html"><i class="fas fa-envelope"></i><b>CONTACT</b></a>\
        </ul>\
   </nav>\
        <ul class="social">\
            <li><a href="https://github.com/SamKeathley"><i class="fab fa-github"></i></a></li>\
            <li><a href="https://www.linkedin.com/in/sam-keathley/"><i class="fab fa-linkedin-in"></i></a>\
            <li><a href="https://twitter.com/SamKeathley"><i class="fab fa-twitter"></i></a></li>\
            </ul>\
    </div>');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.toggle('show');
});
