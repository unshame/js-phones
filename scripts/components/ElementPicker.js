import Component from '../Component.js';
import defaultTemplate from '../templates/element-picker.js';

export default class ElementPicker extends Component {

    constructor({ element, data, template = defaultTemplate, onElementPicked }) {
        super({ element, data, template });
        this.element.addEventListener('click', (event) => {
            let target = event.target.closest('[data-action="pick"]');
            if (target) {
                onElementPicked(target);
                event.preventDefault();
            }
        });
    }

    get defaultTag() {
        return 'ul';
    }
}
