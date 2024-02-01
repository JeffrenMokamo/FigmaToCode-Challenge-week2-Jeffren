const btnScroll = document.querySelector('.scroll-top');

btnScroll.addEventListener('click', function(){

    window.scroll({

        top: 0,
        left: 0,
        behavior: "smooth"

    })

})
