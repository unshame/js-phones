import Catalog from './Catalog.js';
import View from './View.js';
import ItemService from "../services/ItemService.js";
import ComponentCollection from '../ComponentCollection.js';
import Filter from './Filter.js';

export default class Page extends ComponentCollection {
    constructor({element}) {
        super({element});
        this.setAutoRenderOptions({ render: false });

        this._catalog = this.addSubComponent({
            constructor: Catalog,
            name: 'catalog',
            options: {
                items: ItemService.getItems(),
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
                orderAttributes: [
                    { value: 'name', name: 'Alphabetical'},
                    { value: 'age', name: 'Newest' }
                ],
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

    generateHTML() {
        return `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <section data-component="filter"></section>
        
                <section>
                    <p>Shopping Cart</p>
                    <ul>
                        <li>Phone 1</li>
                        <li>Phone 2</li>
                        <li>Phone 3</li>
                    </ul>
                </section>
            </div>
        
            <!--Main content-->
            <div class="col-md-10">
                <div data-component="catalog"></div>
                <div data-component="viewer"></div>
            </div>
        </div>`;
    }
}
