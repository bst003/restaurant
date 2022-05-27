export const generalFunctions = (() => {

    // Private variables/functions



    // Public variables/functions


    const clearContent = (parent) => {

        while( parent.firstChild ){

            parent.removeChild( parent.firstChild );

        }

    }


    const createContentSection = ( title, ...description ) => {

        const contentSection = document.createElement('div');
        contentSection.classList.add('content-section', 'wrap', 'mini');

        const sectionTitle = document.createElement('h2');
        sectionTitle.setAttribute('class', 'center');
        sectionTitle.innerText = title;

        contentSection.appendChild(sectionTitle);
        

        const descriptionArray = description;

        for ( let i = 0; i < descriptionArray.length; i++){

            const sectionDescription = document.createElement('p');
            sectionDescription.innerText = descriptionArray[i];

            contentSection.appendChild(sectionDescription);

        }

        return contentSection;

    }


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


    const createModule = (title) => {

        const module = document.createElement('div');
        module.setAttribute('class', 'module');
        module.setAttribute('data-module', title);

        return module;

    }


    const createWrap = () => {

        const wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');

        return wrap;

    }


    return {
        clearContent,
        createContentSection,
        createHero,
        createModule,
        createWrap
    }


})();