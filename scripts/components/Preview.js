import Component from "../Component.js";
import defaultTemplate from '../templates/preview.js';

export default class Preview extends Component {

    constructor({ element, data, template = defaultTemplate, onItemSelected, onAddToCart }) {
        super({ element, template, data });
        this.element.addEventListener('click', (event) => {
            if (event.target.closest('.btn')) {
                onAddToCart(this.data.name);
            }
            if (event.target.closest('a[href]')) {
                onItemSelected(this.data.id);
            }
        });
    }
}
