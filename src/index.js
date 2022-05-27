import './assets/scss/styles.scss';

/*

BEFORE DOING ANYTHING WRITE OUT YOUR PLAN


General Setup
    Start by creating headers and footers in their own modules
    Each tab will have its own module
        Factory to create tab modules?
    Have a general site setup/creation function which will call the header/footer/tab creation functions


Miscellaneous
    tab switching event listeners will need to be added after page load
        will first remove existing .module then add new one

NEW NOTES
    Potentially refactor all templates into one template file?
    Should createWrap be with createHero and createModule when two are module specific?

*/

import { pageLoad } from "./modules/pageLoad";
import { generalFunctions } from "./modules/general";
import { homeFunctions } from "./modules/templates/home";
import { menuFunctions } from "./modules/templates/menu";
import { contactFunctions } from "./modules/templates/contact";

const switchTabs = (() => {

    // Private variables/functions

    const _changeTab = (e) => {

        e.preventDefault();

        const link = e.currentTarget;
        const linkTarget = e.currentTarget.dataset.target;
        const navLinks = document.querySelectorAll('.nav a');
        const pageMainContent = document.querySelector('.main-content');

        navLinks.forEach( (navLink) => {
            navLink.classList.remove('active');
        });

        link.setAttribute('class', 'active');


        generalFunctions.clearContent(pageMainContent);

        switch(linkTarget) {

            case 'home':
                pageMainContent.appendChild( homeFunctions.buildTemplate() );
                break;

            case 'menu':
                pageMainContent.appendChild( menuFunctions.buildTemplate() );
                break;

            case 'contact':
                pageMainContent.appendChild( contactFunctions.buildTemplate() );

        }

        
    }

    // Public variables/functions

    const buildListeners = () => {

        const navLinks = document.querySelectorAll('.nav a');

        navLinks.forEach( (navLink) => {

            navLink.addEventListener('click', _changeTab );

        });

    }

    return {
        buildListeners
    }

})();


const triggerMenu = (() => {

    // Private variables/functions

    const _trigger = (e) => {

        e.preventDefault();

        const nav = document.querySelector('.nav');
        const trigger = e.currentTarget;

        nav.classList.toggle('active');
        trigger.classList.toggle('active');
 
    }

    // Public variables/functions

    const buildListeners = () => {

        const mmTrigger = document.querySelector('.mm-trigger');

        mmTrigger.addEventListener('click', _trigger );

    }

    return {
        buildListeners
    }

})();


// Site Initialization

pageLoad.buildInitialContent();

switchTabs.buildListeners();

triggerMenu.buildListeners();