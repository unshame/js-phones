import throwImage from '../../image-thrower.js';
import ElementPicker from '../element-picker/component.js';
import defaultTemplate from './template.ejs';

export default class Minicart extends ElementPicker {

    constructor({ element, data = { elements: [] }, template = defaultTemplate }) {
        super({ element, data, template });
        this.subscribe('elementPicked', (li) => {
            this.removeItem(li.dataset.itemName);
            this.render();
        });
        this._lastIndex = 0;
    }

    addItem(name, thumb) {
        let cart = this.data.elements;
        let item = cart.find(item => item.name == name);
        if (item) {
            item.amount++;
            this._lastIndex = cart.indexOf(item);
        }
        else {
            cart.push({ name, amount: 1 });
            this._lastIndex = cart.length - 1;
        }
    }

    removeItem(name) {
        let cart = this.data.elements;
        let index = cart.findIndex(item => item.name == name);
        let item = cart[index];
        item.amount--;
        if (item.amount === 0) {
            cart.splice(index, 1);
        }
    }

    render(thumb) {
        super.render();
        if(thumb) {
            let item = this.element.querySelectorAll('[data-element="item"]')[this._lastIndex];
            if(item) {
                throwImage(thumb, item, thumb.src, true);
            }
        }
    }

    get defaultTag() {
        return 'div';
    }
}