import Component from "../Component.js";
import defaultTemplate from '../templates/preview.js';

export default class Preview extends Component {

    constructor({ element, data, template = defaultTemplate, onItemSelected }) {
        super({ element, template, data });
        this.element.addEventListener('click', (event) => {
            if(event.target.closest('a')) {
                onItemSelected(this.getData().id);
            }
        });
    }
}
