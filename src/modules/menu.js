
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/appetizer/moo-krong-kraeng.jpg',
        'Moo Krong Kraeng',
        'Pork balls with caramelized coating. They are soft on the inside but slightly crispy on the outside, and served with syrup.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/chili-dip/nam-prik-goong-siab.jpg',
        'Nam Prik Goong Siab',
        'Smoked shrimp chili dip with shrimp paste relish.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/grilled-dishes/thai-wagyu-yang-samunprai.jpg',
        'Thai Wagyu Yang Samunprai',
        'Thai-style roast wagyu beef with herbs.'
    ));
        menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/thai-curry/gaeng-som-pu-kai-sai-nor-mai.jpg',
        'Gaeng Som Pu Kai Sai Nor Mai',
        'Spicy and sour yellow curry with serrated mud crab and pickled bamboo shoots.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/thai-dessert/pai-lin-krob.jpg',
        'Pai Lin Krob',
        'Water chestnut colored with butterfly pea flowers in coconut milk.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/thai-dessert/kanom-co-kati-sod-khao-pong.jpg',
        'Kanom Co Kati Sod Khao Pong',
        'Coconut caramelized sugar dumplings with coconut milk.'
    ));
    return menu;
}

function createMenuItem(src, name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodImage = document.createElement('img');
    foodImage.setAttribute('src', src);
     

    const foodName = document.createElement('h3');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;