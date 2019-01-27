import { Component } from 'my-crappy-components';
import defaultTemplate from './template.ejs';

export default class SelectField extends Component {

    constructor({ element, data, template = defaultTemplate }) {
        super({ element, data, template });
        this.element.addEventListener('change', (event) => void this.dispatch('change', this.element.value, event));
    }

    get defaultTag() {
        return 'select';
    }

}
