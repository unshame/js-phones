module.exports = function (source) {
    return 'import ejs from "ejs"; export default ejs.compile(`' + source + '`)';
}
