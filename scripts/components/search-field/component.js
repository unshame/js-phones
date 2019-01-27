import { Component } from 'my-crappy-components';

export default class SearchField extends Component {

    constructor({ element, data, template }) {
        super({ element, data, template });
        this.element.addEventListener('input', (event) => void this.dispatch('change', this.element.value, event));
    }

    get defaultTag() {
        return 'input';
    }

}