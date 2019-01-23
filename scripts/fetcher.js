let timestamp = null;

function fetchJSON(url, callback) {
    return fetch(url)
        .then(response => {
            return response.json()
        });
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
