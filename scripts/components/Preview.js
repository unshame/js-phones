import defaultTemplate from '../templates/preview.js';
import ElementPicker from './ElementPicker.js';

export default class Preview extends ElementPicker {

    constructor({ element, data, template = defaultTemplate }) {
        super({ element, template, data });
        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                this.dispatch('addToCart', this.data.name, this.element.querySelector('[data-element="preview"]'));
                event.preventDefault();
            }
        });
    }

    get defaultTag() {
        return 'li';
    }
}
