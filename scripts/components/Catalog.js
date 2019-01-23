import ComponentCollection from '../ComponentCollection.js';
import Preview from './Preview.js';
import defaultTemplate from '../templates/catalog.js';

export default class Catalog extends ComponentCollection {

    constructor({ element, data, template = defaultTemplate, onItemSelected }) {
        super({ element, template });

        for(let datum of data) {
            this.addSubComponent({
                constructor: Preview,
                name: 'preview',
                id: datum.id,
                options: { data: datum, onItemSelected }
            });
        }

        this.setData(...this.children);
    }

    filter({ query, order }) {
        let data;
        if (!query) {
            data = [...this.children];
        }
        else {
            data = this.children.filter(({ component }) => {
                
                for (let word of query.toLowerCase().split(/\s/)) {
                    if (!component.getData().name.toLowerCase().includes(word)) {
                        return false;
                    }
                }

                return true;
            });
        }

        data.sort(({ component: ca }, { component: cb }) => {
            let a = String(ca.getData()[order]).toLowerCase();
            let b = String(cb.getData()[order]).toLowerCase();

            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });

        this.setData(data);
    }
}
