export let addItem = (card, title, description) => {
    let cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    cardTitle.classList.add('card-title');

    let cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    cardDescription.classList.add('card-description');

    card.append(cardTitle, cardDescription);
}

let loadMenu = () => {

    let body = document.querySelector('body');
    body.style.cssText = 'height: 100%';

    let main = document.querySelector('#main-content');
    main.innerHTML = '';

    let headline = document.createElement('h1');
    headline.textContent = 'Menu';
    headline.classList.add('headline');

    let cards = [];

    cards.push(document.createElement('div'));
    cards.push(document.createElement('div'));
    cards.push(document.createElement('div'));

    cards[0].classList.add('card');
    cards[1].classList.add('card');
    cards[2].classList.add('card');


    addItem(cards[0], 'Pizza', 'Pepperoni sausage, tomato, mozzarella, oregano.' +
        ' Add jalapeños to your Americana for an extra £1.00');

    addItem(cards[1], 'Pasta', 'Penne Pasta with strips of chicken,' +
        ' bacon, sun dried tomatoes and peas in a creamy roquette pesto sauce.' +
        ' Topped with sun dried tomatoes and fresh roquette.');

    addItem(cards[2], 'Lasagne', 'Layers of pasta, ground beef, tomato and bechamel sauce.');

    main.append(headline, ...cards);

}

export default loadMenu;