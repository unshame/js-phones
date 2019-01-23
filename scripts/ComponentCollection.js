import Component from "./Component.js";

export default class ComponentCollection extends Component {

    constructor({ element, template }) {
        super({ element, template });
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
        this.children.push({component, name, id});
        this.childrenById[id || name] = component;
        return component;
    }

    _embedChildren() {
        for (let { component, name, id } of this.children) {
            let dataId = id ? `[data-component-id="${id}"]` : '';
            let node = this.element.querySelector(`[data-component="${name}"]${dataId}`);

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