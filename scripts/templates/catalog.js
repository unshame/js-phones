export default function template(data) {
    return `
        <ul class="phones">
            ${data.map(({ name, id }) => `<li class="thumbnail" data-component="${name}" data-component-id=${id}></div>`).join('')}
        </ul>`;
}