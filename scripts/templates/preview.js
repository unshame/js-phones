export default function(data) {
    return `
        <li class="thumbnail"
            data-element="phone"
            data-item-id="${data.id}">
            
            <a href="#!/phones/${data.id}" class="thumb">
            <img alt="${data.name}" src="${data.imageUrl}">
            </a>
            
            <div class="phones__btn-buy-wrapper">
                <a class="btn btn-success">
                    Add
                </a>
            </div>
            
            <a href="#!/phones/${data.id}">${data.name}</a>
            
            <p>${data.snippet}</p>
        </li>`
}