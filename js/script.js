const nav = document.querySelector('nav')
const header = document.querySelector('header')
const main = document.querySelector('main')
const hamburger = document.querySelector('#hamburger')

// toggle navbar
hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('nav-toggle')
    header.classList.toggle('toggle')
    main.classList.toggle('none')


    // change toggle icon to bars or close on click
    if(e.target.classList.contains('fa-times')) {
        e.target.classList.remove('fa-times')
        e.target.classList.add('fa-bars')
    } 
    else if(e.target.classList.contains('fa-bars')){
        e.target.classList.remove('fa-bars')
        e.target.classList.add('fa-times')
    }
})