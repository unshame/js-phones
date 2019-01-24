import ComponentMap from '../ComponentMap.js';
import defaultTemplate from '../templates/page.js';
import { abortAndFetchJSON } from '../fetcher.js';

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
        
        let onAddToCart = (name, thumb) => {
            this._minicart.addItem(name);
            this._minicart.render(thumb);
        }

        this._catalog = this.addChild({
            name: 'catalog',
            options: {
                childrenData: catalogData,
                onElementPicked: link => this.showItem(link.dataset.url),                
                onAddToCart
            }
        });

        this._fullview = this.addChild({
            name: 'fullview',
            options: {
                onItemUnselected: () => this.hideItem(),
                onAddToCart
            }
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

    showItem(url) {
        abortAndFetchJSON(url + '.json')
            .then( data => {
                this._catalog.hide();
                this._filter.hide();
                this._fullview.data = data;
                this._fullview.show();
                this._fullview.render();
                this._activeSubComponent = this._fullview;
            })
            .catch((err) => {
                console.warn(err)
            });
    }

    hideItem() {
        this._fullview.hide();
        this._filter.show();
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
}
