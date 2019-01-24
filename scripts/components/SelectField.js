import Component from "../Component.js";

function defaultTemplate(data) {
    return data.map(({ name, value }) => `<option value="${value}">${name}</option>`).join('');
}

export default class SelectField extends Component {

    constructor({ element, data, template = defaultTemplate }) {
        super({ element, data, template });
        this.element.addEventListener('change', (event) => this.dispatch('change', this.element.value, event));
    }

    get defaultTag() {
        return 'select';
    }

}
