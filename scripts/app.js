import fetchJSON from './fetcher.js';
import Page from './components/page/component.js';

initPage();

async function initPage() {
    let phones = await fetchJSON('./phones/phones.json');
    phones.forEach(phone => phone.urlBase = location.pathname + 'phones/');
    window.page = new Page({
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

