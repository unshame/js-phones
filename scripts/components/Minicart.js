import defaultTemplate from '../templates/minicart.js';
import Component from '../Component.js';

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
        })
    }

    addItem(name) {
        let item = this.data.find(item => item.name == name);
        if (item) {
            item.amount++;
        }
        else {
            this.data.push({ name, amount: 1 });
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
}