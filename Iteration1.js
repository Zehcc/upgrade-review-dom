/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

window.onload = () => {
    createCountries();
    createCars();
    createCountriesTwo();
    createButton();
};
const createCountries = () =>{
    let countriesList = document.createElement('ul')
    countries.forEach(country => {
        let countriesItem = document.createElement('li');
        countriesItem.textContent = country;
        countriesList.appendChild(countriesItem);
    }); 
    document.body.appendChild(countriesList);   
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

let removeME = document.querySelector('.fn-remove-me')

document.body.removeChild(removeME)

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const createCars = () => {
    let carsList = document.createElement('ul');
    let listDiv = document.querySelector('[data-function="printHere"]');
    cars.forEach(car => {
        let carItem = document.createElement('li')
        carItem.textContent = car;
        carsList.appendChild(carItem);
    });
    listDiv.appendChild(carsList)
}

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const createCountriesTwo = () => {
    let listContainer = document.createElement('div');
    listContainer.className = 'listContainer';
    let countriesListTwo = document.createElement('ul');
    countriesListTwo.className = 'countriesList'
    countries2.forEach(country => {
        let countryDiv = document.createElement('div')
        countryDiv.className = 'countryItem'
        let listTitle = document.createElement('h4');
        listTitle.className = 'listTitle';
        let listImg = document.createElement('img');
        listImg.className = 'listImg';
        let removeLastButton = document.createElement('button');
        removeLastButton.textContent = 'X';
        removeLastButton.addEventListener('click', () => removeLast(countryDiv));
        listTitle.textContent = country.title;
        listImg.src = country.imgUrl;
        countriesListTwo.appendChild(countryDiv)
        countryDiv.appendChild(listTitle);
        countryDiv.appendChild(listImg);
        countryDiv.appendChild(removeLastButton);
    });
    
    listContainer.appendChild(countriesListTwo);
    document.body.appendChild(listContainer)
    
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

let createButton = () => {
    let removeButton = document.createElement('button')
    removeButton.textContent = 'Click para eliminar el ultimo pais de la lista'
    removeButton.addEventListener('click', clickRemove)
    document.body.appendChild(removeButton)
}

let clickRemove = () => {
    let removeItem = document.querySelector('.countriesList')
    removeItem.removeChild(removeItem.lastChild)
}

let removeLast = (last) => {
    last.remove()
}

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

