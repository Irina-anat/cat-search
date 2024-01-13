const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_ZXvXnN3nLIiVAMYsFosudfyRXWXuiSEi6HJhbZIzZhQtawavdsyjEdVTjhSqCXMm';

function fetchBreeds() {
    const URL = `${BASE_URL}/breeds?api_key=${API_KEY}`
    return fetch(URL).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        //console.log(resp)
        return resp.json();
    }); 
};

function fetchCatByBreed(breedId) {
    const URL = `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    return fetch(URL)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            //console.log(resp)
            return resp.json();
        });  
};


export { fetchBreeds, fetchCatByBreed };