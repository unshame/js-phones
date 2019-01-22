import Component from "../Component.js";

export default class Preview extends Component {

    constructor({element, item, onItemSelected}) {
        super({element});
        this.item = item;
        this.element.addEventListener('click', (event) => {
            if(event.target.closest('a')) {
                onItemSelected(this.item.id);
            }
        });
    }

    generateHTML() {
        let item = this.item;
        return `
            <li class="thumbnail"
                data-element="phone"
                data-item-id="${item.id}">
                
                <a href="#!/phones/${item.id}" class="thumb">
                <img alt="${item.name}" src="${item.imageUrl}">
                </a>
                
                <div class="phones__btn-buy-wrapper">
                    <a class="btn btn-success">
                        Add
                    </a>
                </div>
                
                <a href="#!/phones/${item.id}">${item.name}</a>
                
                <p>${item.snippet}</p>
            </li>`
    }
}
