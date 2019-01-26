import Component from '../../my-crappy-components/Component.js';

export default class Preview extends Component {

    constructor({ element, data, template }) {
        super({ element, template, data });
        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                this.dispatch('addToCart', this.data.name, this.element.querySelector('[data-element="preview"]'));
                event.preventDefault();
            }
            else if (event.target.closest('[data-action="select"]')) {
                this.dispatch('select', event.target);
                event.preventDefault();
            }
        });
    }

    get defaultTag() {
        return 'li';
    }
}
