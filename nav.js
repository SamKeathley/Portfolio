document.write('\
<div id="navigation" class="nav-wrapper">\
    <a class="logo" href="/"><img src="images/logo.png" alt="cool s logo"></img></a>\
    <nav>\
    <button id="hamburger" class="hamburger" aria-label="Main navigation."><i class="fas fa-bars" aria-hidden="true"></i></button>\
        <ul id="nav-links" class="nav-links">\
            <a rel="home" href="/" aria-label="Home"><i class="fas fa-home" aria-hidden="true"></i><b>HOME</b></a>\
            <a rel="about" href="/about.html" aria-label="Learn about me."><i class="fas fa-book-open" aria-hidden="true"></i><b>ABOUT</b></a>\
            <a rel="skills" href="/skills.html" aria-label="These are my skills."><i class="fas fa-terminal" aria-hidden="true"></i><b>SKILLS</b></a>\
            <a rel="projects" href="/projects.html" aria-label="My recent projects."><i class="fas fa-project-diagram" aria-hidden="true"></i><b>PROJECTS</b></a>\
            <a rel="contact" href="/contact.html" aria-label="Contact me."><i class="fas fa-envelope" aria-hidden="true"></i><b>CONTACT</b></a>\
        </ul>\
   </nav>\
        <ul class="social">\
            <li><a href="https://github.com/SamKeathley" aria-label="Visit my GitHub."><i class="fab fa-github" aria-hidden="true"></i></a></li>\
            <li><a href="https://www.linkedin.com/in/sam-keathley/" aria-label="Connect with me on LinkedIn."><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>\
            <li><a href="https://twitter.com/SamKeathley" aria-label="Find me on Twitter."><i class="fab fa-twitter" aria-hidden="true"></i></a></li>\
            </ul>\
    </div>');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.toggle('show');
});
