let timestamp = null;

function fetchJSON(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(obj => callback(obj));
}

function abortAndFetchJSON(url, callback) {
    let curTimestamp = timestamp = Date.now();
    fetchJSON(url, (obj) => {
        if (curTimestamp == timestamp) {
            callback(obj);
        }
    })
}

export default fetchJSON;
export {
    fetchJSON, abortAndFetchJSON
};
