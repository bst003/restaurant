import { headerFunctions } from "./header";

export const pageLoad = (() => {

    // Private variables/functions
    const _message = 'this is private';

    // Public variables/functions

    const buildInitialContent = () => {

        headerFunctions.buildHeader();

    }

    const testFunction = () => {

        console.log(`hello world - ${_message}`);

    }

    return {
        buildInitialContent
    }


})();