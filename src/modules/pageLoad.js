import { headerFunctions } from "./header";
import { footerFunctions } from "./footer";

import { homeFunctions } from "./templates/home";

export const pageLoad = (() => {

    // Private variables/functions
    const _content = document.querySelector('#content');

    const _createMainContent = () => {

        const mainContent = document.createElement('div');
        mainContent.setAttribute('class', 'main-content');

        return mainContent;

    }

    // Public variables/functions

    const buildInitialContent = () => {

        _content.appendChild( headerFunctions.buildHeader() );

        const pageMainContent = _createMainContent();
        pageMainContent.appendChild( homeFunctions.buildTemplate() );

        _content.appendChild(pageMainContent);

        _content.appendChild( footerFunctions.buildFooter() );

    }


    return {
        buildInitialContent
    }


})();