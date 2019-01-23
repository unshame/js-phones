import ComponentCollection from "./ComponentCollection.js";

export default class ComponentArray extends ComponentCollection {

    constructor({ element, template }) {
        super({ element, data: null, template });
    }

    get data() {
        return this.filterChildren(this.children);
    }

    filterChildren(children) {
        return children;
    }
}
