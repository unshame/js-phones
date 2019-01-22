import Component from "./component.js";

export default class ComponentCollection extends Component {

    constructor({element}) {
        super({element});
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
            let node = this.element.querySelector(`[data-component="${name}"]`);
            
            if(!node) {
                console.warn(`No node found for component ${name}`, component);
                continue;
            }

            node.replaceWith(component.element);
        }
    }

    renderSubComponents() {
        for(let component of Object.values(this.subComponents)) {
            component.render();
        }
    }

}