export const generalFunctions = (() => {

    // Private variables/functions



    // Public variables/functions

    const createWrap = () => {

        const wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');

        return wrap;

    }


    return {
        createWrap
    }


})();