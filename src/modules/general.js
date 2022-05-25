export const generalFunctions = (() => {

    // Private variables/functions



    // Public variables/functions

    const createHero = ( title, description, image) => {


        const hero = document.createElement('div');
        hero.setAttribute('class', 'hero');
        hero.style.backgroundImage = `url(${image})`;

        const wrap = createWrap();

        const heroTitle = document.createElement('p');
        heroTitle.setAttribute('class', 'h1');
        heroTitle.innerText = title;

        const heroDescription = document.createElement('p');
        heroDescription.innerText = description;

        wrap.appendChild(heroTitle);
        wrap.appendChild(heroDescription);

        hero.appendChild(wrap);

        return hero;

    }

    const createWrap = () => {

        const wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');

        return wrap;

    }


    return {
        createHero,
        createWrap
    }


})();