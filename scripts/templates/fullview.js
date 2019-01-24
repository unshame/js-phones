export default function template(data) {
    let imgs = data.images.map(img => `
        <li>
            <img src="${img}">
        </li>`);

    return `
        <img class="phone" src="${data.images[0]}" data-element="preview">
        <button data-action="back">Back</button>
        <button data-action="add-to-cart">Add to basket</button>

        <h1>${data.name}</h1>

        <p>${data.description}</p>

        <ul class="phone-thumbs" ${data['element-picker']}></ul>`
}
