console.log("workings")
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
})


var typed = new Typed('#yourcity', {
  // strings:city,
  strings:['<i>Web developer</i>','<i>App developer</i>','<i>DSA</i>','<i>Python Developer</i>'],
  typeSpeed: 200,
});
