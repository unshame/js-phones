import Catalog from './Catalog.js';
import View from './View.js';
import ComponentCollection from '../ComponentCollection.js';
import Filter from './Filter.js';
import defaultTemplate from '../templates/page.js';

export default class Page extends ComponentCollection {
    constructor({ 
        element, 
        data: { 
            items = [],
            filterData = []
        }, 
        template = defaultTemplate
    }) {
        super({ element, template });
        this.setAutoRenderOptions({ render: false });

        this._catalog = this.addSubComponent({
            constructor: Catalog,
            name: 'catalog',
            options: {
                data: items,
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
                data: filterData,
                onChange: (values) => {
                    this._catalog.filter(values);
                    this._catalog.render();
                }
            }
        });

        this._activeSubComponent = this._catalog;
        this.render();
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
        this._catalog.filter(this._filter.getValues());
        this._activeSubComponent.render();
    }
}
