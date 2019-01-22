import Component from "./Component.js";

export default class ComponentCollection extends Component {

    constructor({element}) {
        super({element});
        this.subComponents = [];
        this.subComponentsById = {};
        this._autoEmbedComponents = true;
        this._autoRenderComponents = true;
    }

    addSubComponent({
        constructor,
        name,
        id,
        tag,
        options = {}
    }) {
        options.element = { tag, name, id };
        let component = new constructor(options);
        this.subComponents.push({component, name, id});
        this.subComponentsById[id || name] = component;
        return component;
    }

    embedSubComponents() {
        for (let { component, name, id } of this.subComponents) {
            let dataId = id ? `[data-component-id="${id}"]` : '';
            let node = this.element.querySelector(`[data-component="${name}"]${dataId}`);

            if(node) {
                node.replaceWith(component.element);
            }
        }
    }

    renderSubComponents() {
        for (let { component } of this.subComponents) {
            component.render();
        }
    }

    render() {
        super.render();

        if (this._autoEmbedComponents) {
            this.embedSubComponents();
        }

        if (this._autoRenderComponents) {
            this.renderSubComponents();
        }
    }

}