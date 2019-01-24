export default function template(data) {
    let lis = data.map(({ name, amount }) => `<li data-item-name="${name}">${name} (${amount})</li>`);
    return `
        <p>Shopping Cart</p>
        <ul>
            ${lis.length > 0 ? lis.join('') : '<li>So empty...</li>'}
        </ul>`
}