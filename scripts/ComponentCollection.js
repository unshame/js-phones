import Component from "./Component.js";

export default class ComponentCollection extends Component {

    constructor({ element, data, template }) {
        super({ element, data, template });
        this.children = [];
        this.childrenById = {};
        this._autoEmbedChildren = true;
        this._autoRenderChildren = true;
    }

    setAutoRenderOptions({ embed = true, render = true }) {
        this._autoEmbedChildren = embed;
        this._autoRenderChildren = render;
    }

    addSubComponent({
        constructor,
        name, id, tag,
        options = {}
    }) {
        options.element = { tag, name, id };
        let component = new constructor(options);
        let dataId = id ? `data-component-id="${id}"` : '';
        let selector = `[data-component="${name}"]${ dataId ? '[' + dataId + ']' : '' }`;
        let dataAttributes = `data-component="${name}" ${dataId}`;
        let componentInfo = { component, name, id, selector, dataAttributes };
        Object.freeze(componentInfo);
        this.children.push(componentInfo);
        this.childrenById[id || name] = componentInfo;
        return component;
    }

    _embedChildren() {
        for (let { component, name, id, selector } of this.children) {
            
            let node = this.element.querySelector(selector);

            if(node) {
                node.replaceWith(component.element);
            }
        }
    }

    _renderChildren() {
        for (let { component } of this.children) {
            component.render();
        }
    }

    render() {
        super.render();

        if (this._autoEmbedChildren) {
            this._embedChildren();
        }

        if (this._autoRenderChildren) {
            this._renderChildren();
        }
    }

    destroy(alwaysRemove, alwaysRemoveSub) {

        for (let { component } of this.children) {
            component.destroy(alwaysRemoveSub);
        }

        super.destroy(alwaysRemove);
    }
}