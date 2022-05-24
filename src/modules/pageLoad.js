import { headerFunctions } from "./header";

export const pageLoad = (() => {

    // Private variables/functions
    const _content = document.querySelector('#content');
    const _message = 'this is private';

    // Public variables/functions

    const buildInitialContent = () => {

        _content.appendChild( headerFunctions.buildHeader() );

    }


    return {
        buildInitialContent
    }


})();