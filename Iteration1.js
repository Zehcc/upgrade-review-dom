/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const createCountries = () =>{
    let countriesList = document.createElement('ul')
    countries.forEach(country => {
        countriesList.appendChild(country);
        return countriesList
    });    
}


