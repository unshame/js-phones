export default function template(data) {
    return `
        <ul class="phones">
            ${data.map(({ name, id }) => `<div data-component="${name}" data-component-id=${id}></div>`).join('')}
        </ul>`;
}