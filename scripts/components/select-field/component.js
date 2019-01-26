import Component from '../../my-crappy-components/Component.js';

export default class SelectField extends Component {

    constructor({ element, data, template }) {
        super({ element, data, template });
        this.element.addEventListener('change', (event) => this.dispatch('change', this.element.value, event));
    }

    get defaultTag() {
        return 'select';
    }

}
