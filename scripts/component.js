export default class Component {
    constructor({ element, _hiddenClass = 'js-hidden'}) {
        this.element = element instanceof Element ? element : this.createElement(element);
        this._hiddenClass = _hiddenClass;
    }

    createElement({ tag, name, id }) {
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
        throw new Error('Not implemented');
    }

    hide() {
        this.element.classList.add(this._hiddenClass);
    }

    show() {
        this.element.classList.remove(this._hiddenClass);
    }

    get defaultTag() {
        return 'div';
    }
}
