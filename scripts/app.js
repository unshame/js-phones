import fetchJSON from './fetcher.js';
import newComponent, { loadComponents } from './new-component.js';

Promise.all([
    fetchJSON('./phones/phones.json'),
    loadComponents()
]).then(([items]) => {
    window.page = newComponent('page', {
        element: document.querySelector('[data-page-container]'),
        childrenData: {
            catalogData: items,
            filterData: {
                attributes: [
                    { value: 'name', name: 'Alphabetical' },
                    { value: 'age', name: 'Newest' }
                ]
            }
        }
    });
})
