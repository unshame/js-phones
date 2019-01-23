import Page from './components/Page.js';
import fetchJSON from './fetcher.js';


fetchJSON('./phones/phones.json', (items) => {
    window.page = new Page({
        element: document.querySelector('[data-page-container]'),
        data: {
            items, 
            filterData: {
                attributes: [
                    { value: 'name', name: 'Alphabetical' },
                    { value: 'age', name: 'Newest' }
                ]
            }
        } 
    });
})