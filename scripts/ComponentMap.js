import ComponentCollection from './ComponentCollection.js';

export default class ComponentMap extends ComponentCollection {

    constructor({ element, data, template }) {
        super({ element, data, template });
    }

    get data() {
        let data = this.children.reduce((obj, child) => {
            obj[child.id || child.name] = this.mapChild(child);
            return obj;
        }, {});
        return {
            ...data,
            ...super.data,
        };
    }

    set data(data) {
        super.data = data;
    }

    mapChild(child) {
        return child.dataAttributes;
    }
}
