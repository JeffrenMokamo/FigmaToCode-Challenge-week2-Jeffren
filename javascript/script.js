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

    if(navBar.classList.contains('visibilityNavbar')){
        this.classList.remove('bi-list');
        this.classList.add('bi-x');
    }
    else{
        this.classList.add('bi-list');
        this.classList.remove('bi-x');
    }

})