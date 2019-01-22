export default class Component {
    constructor({element, _hiddenClass = 'js-hidden'}) {
        this.element = element;
        this._hiddenClass = _hiddenClass;
        this.subComponents = {};
    }

    addSubComponent(componentConstructor, name, tag = 'div', options = {}) {
        options.element = this.createElement('div', name);
        let component = new componentConstructor(options);
        this.subComponents[name] = component;
        return component;
    }

    embedSubComponents() {
        for(let [name, component] of Object.entries(this.subComponents)) {
            this.element.querySelector(`[data-component="${name}"]`).replaceWith(component.element);
        }
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
