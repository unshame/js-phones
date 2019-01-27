import { ComponentMap } from 'my-crappy-components';

export default class Filter extends ComponentMap {

    constructor({ element, childrenData: { attributes }, template }) {
        super({ element, template });

        this._searchField = this.addChild({
            name: 'search-field'
        });
        this._searchField.subscribe(
            'change',
            () => void this.dispatch('change', this.getValues())
        );

        this._selectField = this.addChild({
            name: 'select-field',
            options: {
                data: {
                    elements: attributes
                }
            }
        });
        this._selectField.subscribe(
            'change',
            () => void this.dispatch('change', this.getValues())
        );
    }

    getValues() {
        return {
            query: this._searchField.element.value,
            order: this._selectField.element.value
        };
    }
}