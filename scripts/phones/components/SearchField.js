import Component from "../../Component.js";

export default class SearchField extends Component {

    constructor({ element, onChange }) {
        super({ element });
        this.element.addEventListener('input', (event) => onChange(this.element.value, event));
    }

    render() {
        
    }

}