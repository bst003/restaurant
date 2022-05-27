import './assets/scss/styles.scss';

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