const ejs = require('ejs');

module.exports = function (source) {

    let template = ejs.compile(source, {
        strict: false,
        client: true
    });

    return `module.exports = ${template}`;
}
