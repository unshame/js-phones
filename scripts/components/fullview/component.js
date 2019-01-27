import { ComponentMap } from 'my-crappy-components';
import ElementPicker from '../element-picker/component.js';

import throwImage from '../../image-thrower.js';
import defaultTemplate from './template.ejs';

export default class Fullview extends ComponentMap {
    constructor({ element, data, template = defaultTemplate }) {
        super({ element, data, template });

        this._elementPicker = this.addChild({
            component: ElementPicker,
            name: 'element-picker',
            options: {
                data:  {
                    elements: data ? data.images : null
                }
            }
        });

        this._elementPicker.subscribe('elementPicked', (thumb) => void this.changePreview(thumb));

        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                this.dispatch('addToCart', this.data.name, this.element.querySelector('[data-element="preview"]'));
                event.preventDefault();
            }
            else if (event.target.closest('[data-action="back"]')) {
                this.dispatch('close');
                event.preventDefault();
            }
        });
    }

    async changePreview(thumb) {
        let preview = this.element.querySelector('[data-element="preview"]');
        let url = thumb.dataset.url;
        await throwImage(
            thumb,
            preview,
            url,
            false
        );
        preview.src = url;
    }

    set data(data) {
        super.data = data;
        if(data) {
            this._elementPicker.data.elements = data.images;
        }
    }

    get data() {
        return super.data;
    }
}
