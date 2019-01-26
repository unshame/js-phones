import { Component } from '/scripts/my-crappy-components/index.js';

export default class Test extends Component {
    constructor(options) {
        super(options);
        this.data = {
            filter: '',
            minicart: '',
            catalog: '',
            fullview: ''
        };
        this.render();
    }
}