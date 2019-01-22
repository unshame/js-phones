import ComponentCollection from '../../component-collection.js';
import PhonePreview from './phone-preview.js';

export default class PhoneCatalog extends ComponentCollection {
    constructor({element, phones, onPhoneSelected}) {
        super({element});
        for(let phone of phones) {
            this.addSubComponent(PhonePreview, 'phone-preview-' + phone.id, 'div', {
                phone, onPhoneSelected
            });
        }
    }

    render() {
        let phoneDivs = Object.keys(this.subComponents).map(name => `<div data-component="${name}"></div>`)
        this.element.innerHTML = `
        <ul class="phones">
            ${phoneDivs.join('')}
        </ul>`;
        this.embedSubComponents();
        this.renderSubComponents();
    }
}
