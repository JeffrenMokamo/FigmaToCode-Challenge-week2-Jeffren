const btnScroll = document.querySelector('.scroll-top');
const btnViewNav = document.getElementById('btnNav');

const navBar = document.querySelector('header nav');

btnScroll.addEventListener('click', function(){

    window.scroll({

        top: 0,
        left: 0,
        behavior: "smooth"

    })

})

btnViewNav.addEventListener('click', function(){

    navBar.classList.toggle('visibilityNavbar');

})