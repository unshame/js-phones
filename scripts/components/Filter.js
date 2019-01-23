import ComponentMap from "../ComponentMap.js";
import SearchField from './SearchField.js';
import SelectField from './SelectField.js';
import defaultTemplate from '../templates/filter.js'

export default class Filter extends ComponentMap {

    constructor({ element, childrenData: { attributes }, template = defaultTemplate, onChange }) {
        super({ element, template });

        this._searchField = this.addChild({
            constructor: SearchField,
            name: 'search-field',
            options: {
                onChange: () => onChange(this.getValues())
            }
        });

        this._selectField = this.addChild({
            constructor: SelectField,
            name: 'select-field',
            options: {
                data: attributes,
                onChange: () => onChange(this.getValues())
            }
        })
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