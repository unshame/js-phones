import Component from './Component.js';

let components = null;

export default function setDefinitions(_components) {
    components = _components;
}

async function loadComponent(name) {
    console.log(`Loading component '${name}'`);
    let componentInfo = components[name];
    let { path, dependencies } = componentInfo;

    if (dependencies) {

        for(let dependecy of dependencies) {

            if (!componentIsLoaded(dependecy)) {
                await loadComponent(dependecy);
            }
        }
    }

    let componentPath = path + 'component.js';
    let templatePath = path + 'template.js';
    let component = (await import(componentPath)).default;
    let template;
    try {
        template = (await import(templatePath)).default;
    }
    catch(err){}

    Object.assign(componentInfo, {component, template});

    return componentInfo;
}

function componentIsLoaded(name) {
    return components[name].component && components[name].component instanceof Component;
}

async function loadAndCreateComponent(name, options) {

    if (!componentIsLoaded(name)) {
        await loadComponent(name);
    }

    return createComponent(name, options);
}

function createComponent(name, options = {}) {
    let { component, template } = components[name];
    return new component({ template, ...options });
}

export {
    loadComponent,
    loadAndCreateComponent,
    createComponent
}
