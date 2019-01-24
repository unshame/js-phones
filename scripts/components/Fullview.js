import defaultTemplate from '../templates/fullview.js'
import ComponentMap from "../ComponentMap.js";

export default class Fullview extends ComponentMap {
    constructor({ element, data, template = defaultTemplate, onItemUnselected, onAddToCart }) {
        super({ element, data, template });
        
        this._elementPicker = this.addChild({
            name: 'element-picker',
            options: {
                data: data ? data.images : null,
                onElementPicked: (image) => this.setPreviewUrl(image.dataset.url)
            }
        })

        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                onAddToCart(this.data.name);
                event.preventDefault();
            }
            else if (event.target.closest('[data-action="back"]')) {
                onItemUnselected();
                event.preventDefault();
            }
        });
    }

    setPreviewUrl(url) {
        this.element
            .querySelector('[data-element="preview"]')
            .setAttribute('src', url);
    }

    set data(data) {
        super.data = data;
        if(data) {
            this._elementPicker.data = data.images;
        }
    }

    get data() {
        return super.data;
    }

    render() {
        super.render();
    }
}
