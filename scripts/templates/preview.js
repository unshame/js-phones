export default function(data) {
    let url = `${data.urlBase}${data.id}`;
    return `        
        <a href="#!${url}" data-url="${url}" class="thumb" data-action="pick">
            <img alt="${data.name}" src="${data.imageUrl}" data-element="preview">
        </a>
        
        <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success" data-action="add-to-cart">
                Add
            </a>
        </div>
        
        <a href="#!${url}" data-url="${url}" data-action="pick">${data.name}</a>
        
        <p>${data.snippet}</p>`;
}