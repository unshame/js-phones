import defaultTemplate from '../templates/fullview.js'
import ComponentMap from "../ComponentMap.js";
import throwImage from '../image-thrower.js'

export default class Fullview extends ComponentMap {
    constructor({ element, data, template = defaultTemplate, onItemUnselected, onAddToCart }) {
        super({ element, data, template });
        
        this._elementPicker = this.addChild({
            name: 'element-picker',
            options: {
                data: data ? data.images : null,
                onElementPicked: (thumb) => this.changePreview(thumb)
            }
        })

        this.element.addEventListener('click', (event) => {
            if (event.target.closest('[data-action="add-to-cart"]')) {
                onAddToCart(this.data.name, this.element.querySelector('[data-element="preview"]'));
                event.preventDefault();
            }
            else if (event.target.closest('[data-action="back"]')) {
                onItemUnselected();
                event.preventDefault();
            }
        });
    }

    changePreview(thumb) {
        let preview = this.element.querySelector('[data-element="preview"]');
        let url = thumb.dataset.url;
        throwImage(
            thumb,
            preview, 
            url, 
            false,
            () => preview.src = url
        );
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
