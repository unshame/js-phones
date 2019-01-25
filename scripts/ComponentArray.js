import ComponentCollection from './ComponentCollection.js';

export default class ComponentArray extends ComponentCollection {

    constructor({ element, data, template }) {
        super({ element, data, template });
    }

    get data() {
        let data = this.filterChildren(this.children).map(child => this.mapChild(child));
        return Object.assign(data, super.data);
    }

    filterChildren(children) {
        return children;
    }

    mapChild(child) {
        return child;
    }
}
