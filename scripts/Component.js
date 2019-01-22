export default class Component {
    constructor({ element, hiddenClass = 'js-hidden' }) {
        this._ownsElement = !(element instanceof Element);
        this.element = this._ownsElement ? this._createElement(element) : element;
        this._hiddenClass = hiddenClass;
    }

    _createElement({ tag, name, id }) {
        let element = document.createElement(tag || this.defaultTag);

        if (name) {
            element.dataset.component = name;
        }

        if (id) {
            element.dataset.componentId = id;
        }

        return element;
    }

    render() {
        this.element.innerHTML = this.generateHTML();
    }

    generateHTML() {
        return '';
    }

    hide() {
        this.element.classList.add(this._hiddenClass);
    }

    show() {
        this.element.classList.remove(this._hiddenClass);
    }

    destroy() {
        if (this._ownsElement) {
            this.element.remove();
        }
        else {
            this.element.innerHTML = '';
        }
    }

    get defaultTag() {
        return 'div';
    }
} 
