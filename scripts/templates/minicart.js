export default function template(data) {
    let lis = data.map(({ name, amount }) => `<li data-item-name="${name}">${name} (${amount})</li>`);
    return lis.length === 0 ? '' : `
        <p>Shopping Cart</p>
        <ul>
            ${lis.join('')}
        </ul>`
}