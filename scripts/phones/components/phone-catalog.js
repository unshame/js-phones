import Component from '../../component.js';

export default class PhoneCatalog extends Component {
    constructor({element, phones, onPhoneSelected}) {
        super({element});
        this._phones = phones;
        this._onPhoneSelected = onPhoneSelected;
        this.render();
        this.element.addEventListener('click', ev => {
            this._onPhoneClick(ev)
        });
    }

    _onPhoneClick(ev) {
        ev.preventDefault();
        const phoneElement = ev.target.closest('[data-element="phone"]');
        if (!phoneElement) {
            return;
        }

        this._onPhoneSelected(phoneElement.dataset.phoneId)
    }

    render() {
        this.element.innerHTML = `
        <ul class="phones">
            ${this._phones.map(phone => `
                <li class="thumbnail"
                    data-element="phone"
                    data-phone-id="${phone.id}">
                    
                    <a href="#!/phones/${phone.id}" class="thumb">
                      <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>
                    
                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success">
                            Add
                        </a>
                    </div>
                    
                    <a href="#!/phones/${phone.id}">${phone.name}</a>
                    
                    <p>${phone.snippet}</p>
                </li>`).join('')}
        </ul>`;
    }
}
