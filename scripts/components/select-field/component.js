import { Component } from 'my-crappy-components';

export default class SelectField extends Component {

    constructor({ element, data, template }) {
        super({ element, data, template });
        this.element.addEventListener('change', (event) => void this.dispatch('change', this.element.value, event));
    }

    get defaultTag() {
        return 'select';
    }

}
