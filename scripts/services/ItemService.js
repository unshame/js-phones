import phones from '../../phones/phones.js';

let ItemService = {
    getItems() {
        return phones;
    },

    getItem(id) {
        return 'phone ' + id
    }
};

export default ItemService