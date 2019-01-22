import ComponentCollection from '../ComponentCollection.js';
import Preview from './Preview.js';

export default class Catalog extends ComponentCollection {

    constructor({element, items, onItemSelected}) {
        super({element});
        for(let item of items) {
            this.addSubComponent({
                constructor: Preview,
                name: 'preview',
                id: item.id,
                options: { item, onItemSelected }
            });
        }

        this._subComponentsFiltered = [...this.subComponents];
    }

    generateHTML() {
        let itemDivs = this._subComponentsFiltered.map(({ name, id }) => `<div data-component="${name}" data-component-id=${id}></div>`)
        return `
            <ul class="phones">
                ${itemDivs.join('')}
            </ul>`;
    }

    filter({ query, order }) {
        if (!query) {
            this._subComponentsFiltered = [...this.subComponents];
        }
        else {
            this._subComponentsFiltered = this.subComponents.filter(({ component }) => {
                
                for (let word of query.toLowerCase().split(/\s/)) {
                    if (!component.item.name.toLowerCase().includes(word)) {
                        return false;
                    }
                }

                return true;
            });
        }

        this._subComponentsFiltered.sort(({ component: ca }, { component: cb }) => {
            let a = String(ca.item[order]).toLowerCase();
            let b = String(cb.item[order]).toLowerCase();

            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
    }
}
