let timestamp = null;

async function fetchJSON(url) {
    let response = await fetch(url);
    return await response.json();
}

async function abortAndFetchJSON(url) {
    let curTimestamp = timestamp = Date.now();
    let obj = await fetchJSON(url);

    if (curTimestamp == timestamp) {
        return obj;
    }

    throw new Error('Request aborted');
}

export default fetchJSON;
export {
    fetchJSON, abortAndFetchJSON
};
