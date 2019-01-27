import { Component } from 'my-crappy-components';
import defaultTemplate from './template.ejs';

export default class Test extends Component {
    constructor({ element, data, template = defaultTemplate }) {
        super({ element, data, template });
        this.data = {
            filter: '',
            minicart: '',
            catalog: '',
            fullview: ''
        };
        this.render();
    }
}
