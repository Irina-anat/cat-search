function createMarkup(catData) {
    const { url, breeds } = catData;
    return `<div>
        <img src="${url || 'https://www.reelviews.net/resources/img/default_poster.jpg'}" alt="${breeds[0].name}" width="400"/>
    </div>
    <div>
        <h1>${breeds[0].name || 'No name'}</h1>
        <p>${breeds[0].description || 'Not found'}</p>
        <p><span>Temperament:</span> ${breeds[0].temperament}</p>
        <a href="${breeds[0].wikipedia_url}" target="_blank">Link to Wikipedia page</a>
    </div>`;
};

export { createMarkup };