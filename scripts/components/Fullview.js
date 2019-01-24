import defaultTemplate from '../templates/fullview.js'
import ComponentMap from "../ComponentMap.js";

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
                onAddToCart(this.data.name);
                event.preventDefault();
            }
            else if (event.target.closest('[data-action="back"]')) {
                onItemUnselected();
                event.preventDefault();
            }
        });
    }

    changePreview(thumb) {
        let url = thumb.dataset.url;
        let largeImg = this.element.querySelector('[data-element="preview"]');
        let img = new Image(thumb.clientWidth, thumb.clientHeight);
        img.classList.add('transitioning-img');

        let thumbRect = thumb.getBoundingClientRect();
        img.style.top = thumb.clientTop + window.pageYOffset + thumbRect.top + 'px';
        img.style.left = thumb.clientLeft + window.pageXOffset + thumbRect.left + 'px';
        let angle = Math.round(Math.random() * 60 + 100) * Math.sign(Math.random() - 0.5);
        img.style.transform = `rotate(${angle}deg)`;
        img.style.borderRadius = '50%';
        img.src = url;

        document.body.appendChild(img);

        img.style.width = largeImg.clientWidth - largeImg.clientLeft + 'px';
        img.style.height = largeImg.clientHeight - largeImg.clientTop + 'px';
        img.style.transform = '';
        img.style.borderRadius = '15px';

        let largeImgRect = largeImg.getBoundingClientRect();
        img.style.top = largeImg.clientTop + window.pageYOffset + largeImgRect.top + 'px';
        img.style.left = largeImg.clientLeft + window.pageXOffset + largeImgRect.left + 'px';

        img.addEventListener('transitionend', () => {
            setTimeout(() => {
                largeImg.src = img.src;
                img.remove();
            }, 50);
        });
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
