export default function template(data) {
    return `
        <p>
            Search:
            <input ${data['search-field']}>
        </p>

        <p>
            Sort by:
            <select ${data['select-field']}></select>
        </p>`;
}