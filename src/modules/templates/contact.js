import { generalFunctions } from "../general";
import contactHero from '../../assets/img/contact-hero.jpg';

export const contactFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = generalFunctions.createModule('menu');
        
        module.appendChild( generalFunctions.createHero('Contact', 'Feel free to reach out any time', contactHero) );

        module.appendChild( 
            generalFunctions.createContentSection(
                "We'd love to hear from you", 
                "Here are Brunch Bowl we're always excited to hear from our customers. Use any of the below contact methonds to reach us!"            
            )
        );


        return module;

    }

    return {
        buildTemplate
    }

})();