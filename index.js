function scrollValue() {
    var navbar = document.getElementById('nav');
    var logo = document.getElementById('logo');
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var a4 = document.getElementById('a4');
    var a5 = document.getElementById('a5');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
        logo.classList.remove("logocolor");
        a1.classList.remove("acolor");
        a2.classList.remove("acolor");
        a3.classList.remove("acolor");
        a4.classList.remove("acolor");
        a5.classList.remove("acolor");

    } else {
        navbar.classList.add('BgColour');
        logo.classList.add('logocolor');
        a1.classList.add("acolor");
        a2.classList.add("acolor");
        a3.classList.add("acolor");
        a4.classList.add("acolor");
        a5.classList.add("acolor");
    }
}

window.addEventListener('scroll', scrollValue);