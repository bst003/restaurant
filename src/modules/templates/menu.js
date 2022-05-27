import { generalFunctions } from "../general";
import menuHero from '../../assets/img/menu-hero.jpg';
import menuData from '../../assets/data/menu-data.json';

export const menuFunctions = (() => {

    // Private variables/functions

    const _buildMenu = ( array ) => {

        const menu = document.createElement('div');
        menu.classList.add( 'menu-items', 'wrap' );

        for( let i = 0; i < array.length; i++ ){

            const menuItem = document.createElement('div');
            menuItem.setAttribute('class', 'menu-item');

            const itemHeader = document.createElement('div');
            itemHeader.setAttribute('class', 'header');

            const itemTitle = document.createElement('p');
            itemTitle.setAttribute('class', 'title');
            itemTitle.innerText = array[i].name;

            itemHeader.appendChild(itemTitle);

            const itemPrice = document.createElement('span');
            itemPrice.setAttribute('class', 'price');
            itemPrice.innerText = "$" + array[i].price;

            itemHeader.appendChild(itemPrice);

            const itemDescription = document.createElement('p');
            itemDescription.setAttribute('class', 'description');
            itemDescription.innerText = array[i].description;

            menuItem.appendChild(itemHeader);
            menuItem.appendChild(itemDescription);

            menu.appendChild(menuItem);

        }

        return menu;

    }

    // Public variables/functions

    const buildTemplate = () => {

        const module = generalFunctions.createModule('menu');
        
        module.appendChild( generalFunctions.createHero('Menu', 'Our choices will always leave you satisfied', menuHero) );

        const contentContain = document.createElement('div');
        contentContain.setAttribute('class', 'content-contain');

        contentContain.appendChild( 
            generalFunctions.createContentSection(
                'Our Options', 
                "Brunch Bowl offers a variety of culinary options, please let us know if there are any special allergens before making your order."            
            )
        );

        contentContain.appendChild( _buildMenu(menuData) );

        module.appendChild(contentContain);

        return module;

    }

    return {
        buildTemplate
    }

})();