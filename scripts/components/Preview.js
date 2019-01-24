import defaultTemplate from '../templates/preview.js';
import ElementPicker from "./ElementPicker.js";

export default class Preview extends ElementPicker {

    constructor({ element, data, template = defaultTemplate, onElementPicked, onAddToCart }) {
        super({ element, template, data, onElementPicked });
        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                onAddToCart(this.data.name);
                event.preventDefault();
            }
        });
    }

    get defaultTag() {
        return 'li';
    }
}
