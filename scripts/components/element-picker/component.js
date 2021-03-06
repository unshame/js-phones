import { Component } from 'my-crappy-components';
import defaultTemplate from './template.ejs';

export default class ElementPicker extends Component {

    constructor({ element, data, template = defaultTemplate }) {
        super({ element, data, template });
        this.element.addEventListener('click', (event) => {
            let target = event.target.closest('[data-action="pick"]');
            if (target) {
                this.dispatch('elementPicked', target);
                event.preventDefault();
            }
        });
    }

    get defaultTag() {
        return 'ul';
    }
}
