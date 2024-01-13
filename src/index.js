import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'slim-select/dist/slimselect.css';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

let storedBreeds = [];

fetchBreeds()
    .then(data => {
        data.forEach(breed => {
            storedBreeds.push({ text: breed.name, value: breed.id });
        });
        new SlimSelect({
            select: breedSelect,
            data: storedBreeds
        });
    })
    .catch(e => console.log(e));

//console.log(storedBreeds)
    
breedSelect.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
    const breedId = event.currentTarget.value;
    fetchCatByBreed(breedId)
        .then(data => {
            const { url, breeds, wikipedia_url } = data[0];        
            catInfo.innerHTML = `<div>
            <img src="${url}" alt="${breeds[0].name}" width="400"/>
            </div>
            <div><h1>${breeds[0].name}</h1>
            <p>${breeds[0].description}</p>
            <p><span>Temperament:</span> ${breeds[0].temperament}</p>
            <a href="${breeds[0].wikipedia_url}" target="_blank">Link to Wikipedia page</a>
            </div>`
        })
    .catch(e=> console.log(e));
};

    
    


