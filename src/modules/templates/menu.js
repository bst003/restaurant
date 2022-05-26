import { generalFunctions } from "../general";
import menuHero from '../../assets/img/menu-hero.jpg';

export const menuFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = generalFunctions.createModule('menu');
        
        module.appendChild( generalFunctions.createHero('Menu', 'Our choices will always leave you satisfied', menuHero) );

        module.appendChild( 
            generalFunctions.createContentSection(
                'Our Options', 
                "Brunch Bowl offers a variety of culinary options, please let us know if there are any special allergens before making your order."            
            )
        );


        return module;

    }

    return {
        buildTemplate
    }

})();