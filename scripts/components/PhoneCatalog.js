import ComponentCollection from '../ComponentCollection.js';
import PhonePreview from './PhonePreviewer.js';

export default class PhoneCatalog extends ComponentCollection {

    constructor({element, phones, onPhoneSelected}) {
        super({element});
        for(let phone of phones) {
            this.addSubComponent({
                constructor: PhonePreview,
                name: 'phone-preview',
                id: phone.id,
                options: {phone, onPhoneSelected}
            });
        }

        this._subComponentsFiltered = [...this.subComponents];
    }

    generateHTML() {
        let phoneDivs = this._subComponentsFiltered.map(({ name, id }) => `<div data-component="${name}" data-component-id=${id}></div>`)
        return `
            <ul class="phones">
                ${phoneDivs.join('')}
            </ul>`;
    }

    filter({ query, order }) {
        if (!query) {
            this._subComponentsFiltered = [...this.subComponents];
        }
        else {
            this._subComponentsFiltered = this.subComponents.filter(({ component }) => {
                
                for (let word of query.toLowerCase().split(/\s/)) {
                    if (!component.phone.name.toLowerCase().includes(word)) {
                        return false;
                    }
                }

                return true;
            });
        }

        this._subComponentsFiltered.sort(({ component: ca }, { component: cb }) => {
            let a = String(ca.phone[order]).toLowerCase();
            let b = String(cb.phone[order]).toLowerCase();

            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
    }
}
