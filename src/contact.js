let loadContact = () => {
    let main = document.querySelector('#main-content');
    main.innerHTML = '';
    let headline = document.createElement('h1');
    headline.classList.add('headline');
    headline.textContent = "Contact";

    let contactCard = document.createElement('div');
    contactCard.classList.add('card');

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Contact Us';
    cardTitle.classList.add('card-title');

    let contactDetails = document.createElement('p');
    contactDetails.innerHTML = '<b>Phone: </b> 111-111-1111<br><b>Email:</b> restaurant@restaurant';
    contactDetails.classList.add('card-description');
    
    contactCard.append(cardTitle, contactDetails);

    main.append(headline, contactCard);
}

export default loadContact;