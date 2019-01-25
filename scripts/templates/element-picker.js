export default function template(data) {
    let imgs = data.map(url => `
        <li>
            <img src="${url}" data-action="pick" data-url="${url}">
        </li>`);

    return `
        <ul class="phone-thumbs">
            ${imgs.join('')}
        </ul>`;
}