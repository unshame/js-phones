let timestamp = null;

function fetchJSON(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        });
}

function abortAndFetchJSON(url) {
    let curTimestamp = timestamp = Date.now();
    return fetchJSON(url).then((obj) => {

        if (curTimestamp == timestamp) {
            return obj;
        }

        return Promise.reject('Request aborted');
    })
}

export default fetchJSON;
export {
    fetchJSON, abortAndFetchJSON
};
