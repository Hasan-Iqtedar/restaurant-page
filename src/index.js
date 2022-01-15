import loadContact from './contact';
import initializeContent, {loadHome} from './home';
import loadMenu from './menu';

console.log("Hello");
initializeContent();

let home = document.querySelector('#home');
let menu = document.querySelector('#menu');
let contact = document.querySelector('#contact');

home.addEventListener('click', loadHome.bind(this, document.querySelector('#main-content')));
menu.addEventListener('click', loadMenu);
contact.addEventListener('click', loadContact);