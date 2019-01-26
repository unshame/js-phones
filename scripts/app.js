import componentLoader, { loadAndCreateComponent } from './my-crappy-components/index.js';
import fetchJSON from './fetcher.js';
import components from './components.js';

componentLoader(components);

initPage();

async function initPage() {
    let phones = await fetchJSON('./phones/phones.json');
    phones.forEach(phone => phone.urlBase = location.pathname + 'phones/');
    window.page = await loadAndCreateComponent('page', {
        element: document.querySelector('[data-page-container]'),
        childrenData: {
            catalogData: phones,
            filterData: {
                attributes: [
                    { value: 'name', name: 'Alphabetical' },
                    { value: 'age', name: 'Newest' }
                ]
            }
        }
    });

}

