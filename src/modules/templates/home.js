import { generalFunctions } from "../general";

export const homeFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = document.createElement('div');
        module.setAttribute('class', 'module');
        module.setAttribute('data-module', 'home');


        return module;

    }

    return {
        buildTemplate
    }

})();