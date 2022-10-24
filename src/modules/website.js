import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import logo from "../img/logo.jpg";


function createHeader() {
const header = document.createElement('header');
header.classList.add('header');

const logoImg = new Image();
logoImg.classList.add('logo')
logoImg.src = logo;

header.appendChild(logoImg);
header.appendChild(createNav());

return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button-nav');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return setActiveBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button-nav');
    menuBtn.textContent = 'Menu'
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return setActiveBtn(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.textContent = 'Contact'
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return setActiveBtn(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

    function createMain() {
        const main = document.createElement('main');
        main.classList.add('main');
        main.setAttribute('id', 'main');
        return main;
    }

    function createFooter() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const cr = document.createElement('p');
        cr.textContent = 'Created by Chanatinart.k';

        footer.appendChild(cr);

        return footer;
    }

    function initWebsite() {
        const content = document.querySelector('#content');

        content.appendChild(createHeader());
        content.appendChild(createMain());
        content.appendChild(createFooter());

        setActiveBtn(document.querySelector('.button-nav'));
        loadHome();
    }

    export default initWebsite;