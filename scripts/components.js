export default {
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
        noTemplate: true
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
};
