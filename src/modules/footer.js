import { generalFunctions } from "./general";

export const footerFunctions = (() => {

    // Private variables/functions


    // Public variables/functions

    const buildFooter = () => {

        const footer = document.createElement('footer');

        const wrap = generalFunctions.createWrap();
        wrap.innerHTML = '&copy; Brunch Bowl';

        footer.appendChild(wrap);

        return footer;

    }

    return {
        buildFooter
    }

})();