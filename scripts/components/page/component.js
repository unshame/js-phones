import { ComponentMap } from 'my-crappy-components';
import Catalog from '../catalog/component.js';
import Minicart from '../minicart/component.js';
import Filter from '../filter/component.js';
import Fullview from '../fullview/component.js'

import { abortAndFetchJSON } from '../../fetcher.js';
import defaultTemplate from './template.ejs';

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
        };

        this._catalog = this.addChild({
            component: Catalog,
            name: 'catalog',
            options: {
                childrenData: catalogData
            }
        });
        this._catalog.subscribe('select', link => void this.showItem(link.dataset.url));
        this._catalog.subscribe('addToCart', onAddToCart);

        this._fullview = this.addChild({
            component: Fullview,
            name: 'fullview'
        });

        this._fullview.subscribe('close', () => void this.hideItem());
        this._fullview.subscribe('addToCart', onAddToCart);

        this._minicart = this.addChild({
            component: Minicart,
            name: 'minicart',
            tag: 'section'
        });

        this._filter = this.addChild({
            component: Filter,
            name: 'filter',
            tag: 'section',
            options: {
                childrenData: filterData
            }
        });
        this._filter.subscribe('change', (values) => {
            this._catalog.setFilter(values);
            this._catalog.render();
        });

        this._activeSubComponent = this._catalog;
        this.render();
    }

    async showItem(url) {
        let data;

        try {
            data = await abortAndFetchJSON(url + '.json');
        }
        catch(err) {
            console.warn(err);
        }

        if (!data) {
            return;
        }

        this._catalog.hide();
        this._filter.hide();
        this._fullview.data = data;
        this._fullview.show();
        this._fullview.render();
        this._activeSubComponent = this._fullview;
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
