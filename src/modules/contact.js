import placeholder from "../img/placeholder.png"
import phoneNum from "../img/old-typical-phone.png"
import open from "../img/clock.png"

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const info = document.createElement('ul');
    info.classList.add('info');

    const address = document.createElement('li');
    address.classList.add('address');

    const addressIcon = document.createElement('img');
    addressIcon.src = placeholder;
    addressIcon.alt = 'location';

    const addressText = document.createElement('p');
    addressText.textContent = 'Bangkok, Thailand';

    address.appendChild(addressIcon);
    address.appendChild(addressText);
    info.appendChild(address);
    
    const time = document.createElement('li');
    time.classList.add('time');
    const timeIcon = document.createElement('img');
    timeIcon.src = open;
    timeIcon.alt = 'open time';

    const timeText = document.createElement('p')
    timeText.textContent = 'Open everyday 24hrs';

    time.appendChild(timeIcon);
    time.appendChild(timeText);
    info.appendChild(time);

    const phone = document.createElement('li');
    time.classList.add('phone');
    const phoneIcon = document.createElement('img');
    phoneIcon.src = phoneNum;
    phoneIcon.alt = 'phone number';

    const phoneText = document.createElement('p')
    phoneText.textContent = '12-123-12-121';

    phone.appendChild(phoneIcon);
    phone.appendChild(phoneText);
    info.appendChild(phone);

    contact.appendChild(info);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;