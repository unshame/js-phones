import Component from "../../Component.js";

export default class SelectField extends Component {

    constructor({ element, orderAttributes, onChange }) {
        super({ element });
        this._orderAttributes = orderAttributes;
        this.element.addEventListener('change', (event) => onChange(this.element.value, event));
    }

    generateHTML() {
        return this._orderAttributes.map(({ name, value }) => `<option value="${value}">${name}</option>`).join('');
    }

    get defaultTag() {
        return 'select';
    }

}
