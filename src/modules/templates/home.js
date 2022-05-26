import { generalFunctions } from "../general";
import homeHero from '../../assets/img/brunch-home.jpg';

export const homeFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = generalFunctions.createModule('home');
        
        module.appendChild( generalFunctions.createHero('Brunch Bowl', 'Satisfy your breakfast cravings with delicious brunch bowls', homeHero) );

        module.appendChild( 
            generalFunctions.createContentSection(
                'Welcome to Brunch Bowl', 
                "Welcome to Brunch Bowl, the hottest new brunch spot in the entire country. We'll serve up any fun breakyfast and lunch style food that you can imagine. Our culinary artists have worked hard to polish their skills so that our customers never leave unsatisfied. Check out our menu to see everything we offer.",
                "We hope you stop by soon!"
            )
        );


        return module;

    }

    return {
        buildTemplate
    }

})();