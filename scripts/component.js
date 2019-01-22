export default class Component {
    constructor({element, _hiddenClass = 'js-hidden'}) {
        this.element = element;
        this._hiddenClass = _hiddenClass;
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

    createElement(tag, componentName) {
        let element = document.createElement('div');

        if(componentName) {
            element.dataset.component = 'phone-catalog';
        }

        return element;
    }
}
