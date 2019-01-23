import ComponentCollection from "../ComponentCollection.js";
import SearchField from './SearchField.js';
import SelectField from './SelectField.js';

export default class Filter extends ComponentCollection {

    constructor({ element, data, childrenData: { attributes }, onChange }) {
        super({ element, data });

        this._searchField = this.addSubComponent({
            constructor: SearchField,
            name: 'search-field',
            options: {
                onChange: () => onChange(this.getValues())
            }
        });

        this._selectField = this.addSubComponent({
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

    generateHTML() {
        return `
            <p>
                Search:
                <input data-component="search-field">
            </p>

            <p>
                Sort by:
                <select data-component="select-field">
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                </select>
            </p>`;
    }

}