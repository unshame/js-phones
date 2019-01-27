import { Component } from 'my-crappy-components';

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