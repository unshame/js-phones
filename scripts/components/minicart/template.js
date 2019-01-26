export default function template(data) {
    let lis = data.map(({ name, amount }) => `
    <li class="minicart-item"
        data-action="pick"
        data-item-name="${name}"
        data-element="item">${name} (${amount})</li>`);
    return `
        <p>Shopping Cart</p>
        <ul>
            ${lis.length > 0 ? lis.join('') : '<li>So empty...</li>'}
        </ul>`;
}