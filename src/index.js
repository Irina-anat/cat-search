import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup } from './createMarkup';
import SlimSelect from 'slim-select'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'slim-select/dist/slimselect.css';
import '../src/styles.css'

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


error.classList.add('is-hidden');

let storedBreeds = [];

fetchBreeds()
    .then(data => {
        data = data.filter(img => img.image?.url != null)
        data.forEach(breed => {
            storedBreeds.push({ text: breed.name, value: breed.id });
        });
        new SlimSelect({
            select: breedSelect,
            data: storedBreeds
        });
    })
    .catch(err => onError(err));

//console.log(storedBreeds)
    
breedSelect.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
    const breedId = event.currentTarget.value;
    catInfo.classList.add('is-hidden');
    loader.classList.remove('is-hidden');

   // console.log(breedId);
    fetchCatByBreed(breedId)
        .then(data => {
            //console.log(data)
            loader.classList.add('is-hidden');
            catInfo.classList.remove('is-hidden');
            catInfo.innerHTML = createMarkup(data[0]);
        })
        .catch(err=>onError(err));
};


function onError(err) {
    breedSelect.classList.add('is-hidden');
    loader.classList.add('is-hidden');

    Notify.failure('Oops! Something went wrong! Try reloading the page!',
        {
        position: 'center-center',
        timeout: 3000,
        width: '300px',
        fontSize: '22px'
    });
};

    


