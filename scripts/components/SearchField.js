import Component from "../Component.js";

export default class SearchField extends Component {

    constructor({ element, data, template, onChange }) {
        super({ element, data, template });
        this.element.addEventListener('input', (event) => onChange(this.element.value, event));
    }

    get defaultTag() {
        return 'input';
    }

}