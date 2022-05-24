import { generalFunctions } from "./general";

export const headerFunctions = (() => {

    // Private variables/functions

    const _newNavLink = (name, target) => {

        const getName  = () => name;

    }

    // Public variables/functions

    const buildHeader = () => {

        const header = document.createElement('header');

        const wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');

        header.appendChild(wrap);

        generalFunctions.content.appendChild(header);

    }

    return {
        buildHeader
    }

})();