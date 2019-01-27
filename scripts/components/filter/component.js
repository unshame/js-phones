import { ComponentMap } from 'my-crappy-components';
import SearchField from '../search-field/component.js';
import SelectField from '../select-field/component.js';
import defaultTemplate from './template.ejs';

export default class Filter extends ComponentMap {

    constructor({ element, childrenData: { attributes }, template = defaultTemplate }) {
        super({ element, template });

        this._searchField = this.addChild({
            component: SearchField,
            name: 'search-field'
        });
        this._searchField.subscribe(
            'change',
            () => void this.dispatch('change', this.getValues())
        );

        this._selectField = this.addChild({
            component: SelectField,
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