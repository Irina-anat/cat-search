const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_ZXvXnN3nLIiVAMYsFosudfyRXWXuiSEi6HJhbZIzZhQtawavdsyjEdVTjhSqCXMm';

async function fetchBreeds() {
    const URL = `${BASE_URL}/breeds?api_key=${API_KEY}`
    const resp = await fetch(URL);
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return await resp.json(); 
};

async function fetchCatByBreed(breedId) {
    const URL = `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    const resp = await fetch(URL);
    if (!resp.ok) {
        throw new Error(resp.status);
    }
    return await resp.json();  
};


export { fetchBreeds, fetchCatByBreed };