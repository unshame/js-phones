import defaultTemplate from '../templates/minicart.js';
import Component from '../Component.js';
import throwImage from '../image-thrower.js';

export default class Minicart extends Component {

    constructor({ element, data = [], template = defaultTemplate }) {
        super({ element, data, template });
        this.element.addEventListener('mousedown', (event) => {
            let li = event.target.closest('li[data-item-name]');
            if (li) {
                this.removeItem(li.dataset.itemName);
                this.render();
                event.preventDefault();
            }
        });
        this._lastIndex = 0;
    }

    addItem(name, thumb) {
        let item = this.data.find(item => item.name == name);
        if (item) {
            item.amount++;
            this._lastIndex = this.data.indexOf(item);
        }
        else {
            this.data.push({ name, amount: 1 });
            this._lastIndex = this.data.length - 1;
        }
    }

    removeItem(name) {
        let index = this.data.findIndex(item => item.name == name);
        let item = this.data[index];
        item.amount--;
        if (item.amount === 0) {
            this.data.splice(index, 1);
        }
    }

    render(thumb) {
        super.render();
        if(thumb) {
            let item = this.element.querySelectorAll('[data-element="item"]')[this._lastIndex];
            if(item) {
                throwImage(thumb, item, thumb.src);
            }
        }
    }
}