import { generalFunctions } from "./general";

export const headerFunctions = (() => {

    // Factories

    const _newNavLink = ( name ) => {

        const getName  = () => name;

        return {
            getName
        }

    }

    // Private variables/functions

    const _navLinks = [];

    const _createLogo = () => {

        const logo = document.createElement('logo');
        logo.setAttribute('class', 'logo');

        const circle = document.createElement('div');

        const logoTitle = document.createElement('span');
        logoTitle.innerText = 'Brunch Bowl';

        logo.appendChild(circle);
        logo.appendChild(logoTitle);

        return logo;

    } 

    const _createNav = () => {

        let nav = document.createElement('ul');
        nav.setAttribute('class', 'nav');

        const homeLink = _newNavLink('home');
        _navLinks.push(homeLink);

        const menuLink = _newNavLink('menu');
        _navLinks.push(menuLink);

        const contactLink = _newNavLink('contact');
        _navLinks.push(contactLink);


        for (let i = 0; i < _navLinks.length; i++){

            const navItem = document.createElement('li');

            const navLink = document.createElement('a');
            navLink.setAttribute('href', '#');

            navLink.innerText = _navLinks[i].getName();

            navItem.appendChild(navLink);

            nav.appendChild(navItem);

        }


        return nav;

    }


    // Public variables/functions

    const buildHeader = () => {

        const header = document.createElement('header');

        const wrap = generalFunctions.createWrap();

        wrap.appendChild( _createLogo() );

        wrap.appendChild( _createNav() );

        header.appendChild(wrap);

        return header;

    }

    return {
        buildHeader
    }

})();