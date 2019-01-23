import ComponentCollection from "./ComponentCollection.js";

export default class ComponentMap extends ComponentCollection {

    constructor({ element, template }) {
        super({ element, data: null, template });
    }

    get data() {
        return this.children.reduce((obj, child) => {
            obj[child.id || child.name] = this.mapChild(child);
            return obj;
        }, {});
    }

    mapChild(child) {
        return child;
    }
}
