import componentLoader, { loadAndCreateComponent } from './my-crappy-components/component-loader.js';
import fetchJSON from './fetcher.js';

componentLoader({
    'catalog': {
        path: '/scripts/components/catalog/',
        dependencies: ['preview']
    },
    'filter': {
        path: '/scripts/components/filter/',
        dependencies: [
            'search-field',
            'select-field'
        ]
    },
    'minicart': {
        path: '/scripts/components/minicart/'
    },
    'page': {
        path: '/scripts/components/page/',
        dependencies: [
            'catalog',
            'fullview',
            'minicart',
            'filter'
        ]
    },
    'preview': {
        path: '/scripts/components/preview/'
    },
    'search-field': {
        path: '/scripts/components/search-field/',
    },
    'select-field': {
        path: '/scripts/components/select-field/',
    },
    'fullview': {
        path: '/scripts/components/fullview/',
        dependencies: [
            'element-picker'
        ]
    },
    'element-picker': {
        path: '/scripts/components/element-picker/'
    }
});

initPage();

async function initPage() {
    let phones = await fetchJSON('./phones/phones.json');
    phones.forEach(phone => phone.urlBase = '/phones/');
    window.page = loadAndCreateComponent('page', {
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

