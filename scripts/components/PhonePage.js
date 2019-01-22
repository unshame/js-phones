import PhoneCatalog from './PhoneCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import PhoneService from "../services/PhoneService.js";
import ComponentCollection from '../ComponentCollection.js';
import PhoneFilter from './PhoneFilter.js';

export default class PhonesPage extends ComponentCollection {
    constructor({element}) {
        super({element});
        this.setAutoRenderOptions({ render: false });

        this._catalog = this.addSubComponent({
            constructor: PhoneCatalog,
            name: 'phone-catalog',
            options: {
                phones: PhoneService.getPhones(),
                onPhoneSelected: id => this.showPhone(id),
                onPhoneUnselected: () => this.hidePhone()
            }
        });

        this._viewer = this.addSubComponent({
            constructor: PhoneViewer,
            name: 'phone-viewer'
        });

        this._filter = this.addSubComponent({
            constructor: PhoneFilter,
            name: 'phone-filter',
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

    showPhone(id) {
        this._catalog.hide();
        this._viewer.setPhone(PhoneService.getPhone(id))
        this._viewer.show();
        this._viewer.render();
        this._activeSubComponent = this._viewer;
    }

    hidePhone() {
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
                <section data-component="phone-filter"></section>
        
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
                <div data-component="phone-catalog"></div>
                <div data-component="phone-viewer"></div>
            </div>
        </div>`;
    }
}
