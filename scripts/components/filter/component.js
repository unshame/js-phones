import ComponentMap from '../../my-crappy-components/ComponentMap.js';

export default class Filter extends ComponentMap {

    constructor({ element, childrenData: { attributes }, template }) {
        super({ element, template });

        this._searchField = this.addChild({
            name: 'search-field'
        });
        this._searchField.subscribe(
            'change',
            () => this.dispatch('change', this.getValues())
        );

        this._selectField = this.addChild({
            name: 'select-field',
            options: {
                data: attributes
            }
        });
        this._selectField.subscribe(
            'change',
            () => this.dispatch('change', this.getValues())
        );
    }

    getValues() {
        return {
            query: this._searchField.element.value,
            order: this._selectField.element.value
        };
    }

    mapChild(child) {
        return child.dataAttributes;
    }

}