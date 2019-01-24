const components = {
    'catalog': './components/Catalog.js',
    'filter': './components/Filter.js',
    'minicart': './components/Minicart.js',
    'page': './components/Page.js',
    'preview': './components/Preview.js',
    'search-field': './components/SearchField.js',
    'select-field': './components/SelectField.js',
    'fullview': './components/Fullview.js',
    'element-picker': './components/ElementPicker.js'
};

async function loadComponents() {
    for(let [name, path] of Object.entries(components)) {
        if (typeof path == 'string') {
            components[name] = (await import(path)).default;
        }
    }
}

export default function newComponent(name, options) {
    return new components[name](options);
}

export {
    newComponent, loadComponents
}