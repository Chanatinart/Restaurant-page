import meal from '../img/meal.jpg';

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = 
    `<div id="home" class="home">
    <div class="description">
    <h1>Discover</h1>
    <h2>Comfort Food with a Twist</h2>
    <p>We serve best authentic Thai cuisine and expectations for cleanliness, service and decor to enjoy at authentic thai restaurant.</p>
    </div>

    <div class = "picture">
    <img class = "meal" src="https://content.api.news/v3/images/bin/a5a6b73ca2ab4a09aead12daad1bc9ee" />
    </div>
    </div>`;

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;