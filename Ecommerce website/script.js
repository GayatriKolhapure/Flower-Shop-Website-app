document.addEventListener('DOMContentLoaded',function(){
    // for search
    document.addEventListener('click', function(event){
        if(event.target.closest('.nav-search')){
            document.querySelector('.search-bar').classList.add('search-bar-active');   
        }else if(event.target.closest('.search-cancel')){
            document.querySelector('.search-bar').classList.remove('search-bar-active');
        }
    });
    // for login signup
    document.addEventListener('click', function(event){
        // check if clicked element has the class 'nav-user' or 'already-account'
        if(event.target.closest('.nav-user', '.already-account')){
            const forElement = document.querySelector('.form');
            forElement.classList.add('login-active');
            forElement.classList.remove('sign-up-active');
        }
        //check if clicked element has the class 'sign-up-btn'
        if(event.target.closest('.sign-up-btn')){
            const forElement = document.querySelector('.form');
            forElement.classList.remove('login-active');
            forElement.classList.add('sign-up-active');
        }
         //check if clicked element has the class 'form-cancel'
        if(event.target.closest('.form-cancel')){
            const forElement = document.querySelector('.form');
            forElement.classList.remove('login-active');
            forElement.classList.remove('sign-up-active');
        }
    });
    // for fix header
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function(){
        const currentScrollY = window.scrollY;

        if(currentScrollY === 0){
            header.classList.remove('header-fix');
        }
        else if(currentScrollY < lastScrollY){
            header.classList.add('header-fix');
        }else{
            header.classList.remove('header-fix');
        }
        lastScrollY = currentScrollY;
    });


});