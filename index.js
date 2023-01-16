// ================================MENU SHOLW Y HIDDEN=======
const navMenu= document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');
// ===========MENU SHOW ==========
// Validate if constant exist
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// ===========MENU hidden ==========
// Validate if constant exist
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// ========================remove menu mobile==================
const navLink= document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// ===============================================Skills=======================
const skillsContent = document.getElementsByClassName('skills_content'),
skills_header = document.querySelectorAll('.skills_header')
function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}
skills_header.forEach((el) =>{
    el.addEventListener('click' , toggleSkills)
})
// =============================Qualification=================
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
             tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})
// ===================================================Services Modal==========
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})
// ===================================portfolio swiper================= 
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    pagination: {
        e1: '.swiper-pagination',
        clickable: true,
        slidePerView: true,
    },
});

// ================Testmonial=================
let swiperTestmonial = new Swiper('.testmonial_container' , {
    loop: true,
    grabCursor: true,
    spaceBetween: 18,

    pagination: {
        e1: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidePerView: 2,
        }
    }
});

// =====================Scroll Selections Active Link===============
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{  
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' +sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// ========================Change Background Header============
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ======================shoow scroll top=====================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 500) scrollUp.classList.add('show-scroll');
     else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ============dark light theme===============
const themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

if (selectedTheme){

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



// // ==========response of sending the message=====
let message = document.getElementById('send');
message.addEventListener('click' , function run() {
    alert('Message has been sent')
});
    
    // const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    // const btns = document.getElementById("btns");
    // btns.addEventListener('click', function () {
    //     let hexcolor = "#";
    //     for (let i = 0; i < 6; i++) {
    //         hexcolor  += hex[getRandomNumber()];
    //         console.log(hexcolor);
    //     }
    //     document.body.style.backgroundColor = hexcolor;
    // })
    // function getRandomNumber() {
    //     return Math.floor(Math.random()*hex.length)
    // }

