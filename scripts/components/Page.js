import Catalog from './Catalog.js';
import View from './View.js';
import ComponentCollection from '../ComponentCollection.js';
import Filter from './Filter.js';
import defaultTemplate from '../templates/page.js';

export default class Page extends ComponentCollection {
    constructor({ 
        element,
        data,
        childrenData: { 
            catalogData = [],
            filterData = []
        }, 
        template = defaultTemplate
    }) {
        super({ element, data, template });
        this.setAutoRenderOptions({ render: false });

        this._catalog = this.addSubComponent({
            constructor: Catalog,
            name: 'catalog',
            options: {
                childrenData: catalogData,
                onItemSelected: id => this.showItem(id),
                onItemUnselected: () => this.hideItem()
            }
        });

        this._viewer = this.addSubComponent({
            constructor: View,
            name: 'viewer'
        });

        this._filter = this.addSubComponent({
            constructor: Filter,
            name: 'filter',
            tag: 'section',
            options: {
                childrenData: filterData,
                onChange: (values) => {
                    this._catalog.setFilter(values);
                    this._catalog.render();
                }
            }
        });

        this._activeSubComponent = this._catalog;
        super.render();
        this._filter.render();
        this._catalog.setFilter(this._filter.getValues());
        this._catalog.render();
    }

    showItem(id) {
        this._catalog.hide();
        this._viewer.setItem(ItemService.getItem(id))
        this._viewer.show();
        this._viewer.render();
        this._activeSubComponent = this._viewer;
    }

    hideItem() {
        this._viewer.hide();
        this._catalog.show();
        this._catalog.render();
        this._activeSubComponent = this._catalog;
    }

    render() {
        super.render();
        this._filter.render();
        this._activeSubComponent.render();
    }

    get data() {
        return this.children.reduce((obj, child) => {
            obj[child.id || child.name] = child.dataAttributes;
            return obj;
        }, {});
    }

}
