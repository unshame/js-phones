import { Component } from 'my-crappy-components';

export default class Preview extends Component {

    constructor({ element, data, template }) {
        super({ element, template, data });
        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                this.dispatch('addToCart', this.data.name, this.element.querySelector('[data-element="preview"]'));
                event.preventDefault();
            }
            else {
                let link = event.target.closest('[data-action="select"]');
                if(link) {
                    this.dispatch('select', link);
                    event.preventDefault();
                }
            }
        });
    }

    get defaultTag() {
        return 'li';
    }
}
