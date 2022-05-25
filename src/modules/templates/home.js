import { generalFunctions } from "../general";
import homeHero from '../../assets/img/brunch-home.jpg';

export const homeFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = generalFunctions.createModule('home');
        
        module.appendChild( generalFunctions.createHero('Brunch Bowl', 'Satisfy your breakfast cravings with delicious brunch bowls', homeHero) );


        return module;

    }

    return {
        buildTemplate
    }

})();