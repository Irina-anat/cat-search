import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup } from './createMarkup';
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
    .catch(err => console.log(err));

//console.log(storedBreeds)
    
breedSelect.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
    const breedId = event.currentTarget.value;
    console.log(breedId);
    fetchCatByBreed(breedId)
        .then(data => {
            catInfo.innerHTML = createMarkup(data[0]);
        })
        .catch(err => console.log(err));
};


    


