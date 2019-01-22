import PhoneCatalog from './phone-catalog.js';
import PhoneViewer from './phone-viewer.js';
import PhoneService from "../services/phone-service.js";
import Component from '../../component.js';

export default class PhonesPage extends Component {
    constructor({element}) {
        super({element});
        this._catalog = this.addSubComponent(PhoneCatalog, 'phone-catalog', 'div', {
            phones: PhoneService.getPhones(),
            onPhoneSelected: id => {
                this._catalog.hide();

                const phone = PhoneService.getPhone(id);
                this._viewer.show(phone);
            }
        });
        this._viewer = this.addSubComponent(PhoneViewer, 'phone-viewer', 'div');
        this.render();
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
    }
}
