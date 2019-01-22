import Component from "../../Component.js";

export default class PhonePreview extends Component {

    constructor({element, phone, onPhoneSelected}) {
        super({element});
        this.phone = phone;
        this.element.addEventListener('click', (event) => {
            if(event.target.closest('a')) {
                onPhoneSelected(this.phone.id);
            }
        });
    }

    render() {
        let phone = this.phone;
        this.element.innerHTML = `
            <li class="thumbnail"
                data-element="phone"
                data-phone-id="${phone.id}">
                
                <a href="#!/phones/${phone.id}" class="thumb">
                <img alt="${phone.name}" src="${phone.imageUrl}">
                </a>
                
                <div class="phones__btn-buy-wrapper">
                    <a class="btn btn-success">
                        Add
                    </a>
                </div>
                
                <a href="#!/phones/${phone.id}">${phone.name}</a>
                
                <p>${phone.snippet}</p>
            </li>`
    }
}
