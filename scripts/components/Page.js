import ComponentMap from '../ComponentMap.js';
import defaultTemplate from '../templates/page.js';

export default class Page extends ComponentMap {
    constructor({ 
        element,
        childrenData: { 
            catalogData = [],
            filterData = []
        }, 
        template = defaultTemplate
    }) {
        super({ element, template });
        this.setAutoRenderOptions({ render: false });

        this._catalog = this.addChild({
            name: 'catalog',
            options: {
                childrenData: catalogData,
                onItemSelected: id => this.showItem(id),
                onItemUnselected: () => this.hideItem(),
                onAddToCart: name => {
                    this._minicart.addItem(name);
                    this._minicart.render();
                }
            }
        });

        this._viewer = this.addChild({
            name: 'view'
        });

        this._minicart = this.addChild({
            name: 'minicart',
            tag: 'section'
        })

        this._filter = this.addChild({
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
        this._minicart.render();
        this._catalog.setFilter(this._filter.getValues());
        this._activeSubComponent.render();
    }

    mapChild(child) {
        return child.dataAttributes;
    }

}
