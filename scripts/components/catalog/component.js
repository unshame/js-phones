import { ComponentArray } from 'my-crappy-components';
import Preview from '../preview/component.js';
import defaultTemplate from './template.ejs';

export default class Catalog extends ComponentArray {

    constructor({ element, childrenData = [], template = defaultTemplate }) {
        super({ element, template });

        for (let datum of childrenData) {
            let child = this.addChild({
                component: Preview,
                name: 'preview',
                id: datum.id,
                options: { data: datum }
            });
            child.bubble(this, 'select');
            child.bubble(this, 'addToCart');
        }

        this._filters = {};
    }

    setFilter(filters) {
        this._filters = { ...this._filters, ...filters };
    }

    filterChildren(children) {
        let { query, order } = this._filters;
        if (!query) {
            children = [...this.children];
        }
        else {
            children = this.children.filter(({ component }) => {

                for (let word of query.toLowerCase().split(/\s/)) {
                    if (!component.data.name.toLowerCase().includes(word)) {
                        return false;
                    }
                }

                return true;
            });
        }

        children.sort(({ component: ca }, { component: cb }) => {
            let a = String(ca.data[order]).toLowerCase();
            let b = String(cb.data[order]).toLowerCase();

            if (a > b) {return 1;}
            if (a < b) {return -1;}
            return 0;
        });

        return children;
    }
}
