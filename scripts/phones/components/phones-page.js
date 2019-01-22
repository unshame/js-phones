import PhoneCatalog from './phone-catalog.js';
import PhoneViewer from './phone-viewer.js';
import PhoneService from "../services/phone-service.js";
import ComponentCollection from '../../component-collection.js';

export default class PhonesPage extends ComponentCollection {
    constructor({element}) {
        super({element});
        this._catalog = this.addSubComponent(PhoneCatalog, 'phone-catalog', 'div', {
            phones: PhoneService.getPhones(),
            onPhoneSelected: id => this.showPhone(id),
            onPhoneUnselected: () => this.hidePhone()
        });
        this._viewer = this.addSubComponent(PhoneViewer, 'phone-viewer', 'div');
        this.activeSubComponent = this._catalog;
        this.render();
    }

    showPhone(id) {
        this._catalog.hide();
        this._viewer.setPhone(PhoneService.getPhone(id))
        this._viewer.show();
        this._viewer.render();
        this.activeSubComponent = this._viewer;
    }

    hidePhone() {
        this._viewer.hide();
        this._catalog.show();
        this._catalog.render();
        this.activeSubComponent = this._catalog;
    }

    render() {
        this.element.innerHTML = `
            <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <section>
                    <p>
                        Search:
                        <input>
                    </p>
        
                    <p>
                        Sort by:
                        <select>
                            <option value="name">Alphabetical</option>
                            <option value="age">Newest</option>
                        </select>
                    </p>
                </section>
        
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

        this.embedSubComponents();
        this.activeSubComponent.render();
    }
}
