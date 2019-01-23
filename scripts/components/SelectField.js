import Component from "../Component.js";

function defaultTemplate(data) {
    return data.map(({ name, value }) => `<option value="${value}">${name}</option>`).join('');
}

export default class SelectField extends Component {

    constructor({ element, data, template = defaultTemplate, onChange }) {
        super({ element, data, template });
        this.element.addEventListener('change', (event) => onChange(this.element.value, event));
    }

    get defaultTag() {
        return 'select';
    }

}
