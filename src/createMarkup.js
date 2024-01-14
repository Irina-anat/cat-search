function createMarkup(catData) {
    const { url, breeds } = catData;
    return `<div class="box-description">
    <div class="img-thumb"><img src="${url || 'https://www.reelviews.net/resources/img/default_poster.jpg'}" alt="${breeds[0].name}" width="500"/></div>
    <div>
        <h1 class="title">${breeds[0].name || 'No name'}</h1>
        <p class="description">${breeds[0].description || 'Not found'}</p>
        <p class="description"><span>Temperament:</span> ${breeds[0].temperament}</p>
        <a class="wikipedia-link" href="${breeds[0].wikipedia_url}" target="_blank">Link to Wikipedia page</a>
    </div>
    </div>`;
};

export { createMarkup };