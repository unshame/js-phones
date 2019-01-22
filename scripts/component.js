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
}
