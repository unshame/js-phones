export default function template(data) {
    return data.map(({ name, value }) => `<option value="${value}">${name}</option>`).join('');
}