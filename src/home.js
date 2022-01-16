
export function loadHome(main) {
    main.innerHTML = '';
    
    let body = document.querySelector('body');
    body.style.cssText = 'height: 100vh';

    let headline = document.createElement('h1');
    let about = document.createElement('p');

    headline.textContent = 'Restaurant';
    headline.classList.add('headline');

    about.innerHTML = 'The coolest place to retire after<br>' +
        'a long day of work to have a cup of coffee.';
    about.classList.add('about');

    main.append(headline, about);
}

let initializeContent = () => {
    let content = document.querySelector('#content');
    // content.innerHTML = '';

    let navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    let home = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');

    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    home.textContent = 'Home';
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    let main = document.createElement('main');
    main.id = 'main-content';

    loadHome(main);

    content.append(navBar, main);
    console.log("done");
}

export default initializeContent;