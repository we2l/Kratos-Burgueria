const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]')

function openMenu (event) {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
}


menuButton.addEventListener('click', openMenu)


const linksInternos = document.querySelectorAll('a[href^="#"]')

function scroll (event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scroll)
})