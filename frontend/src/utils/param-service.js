export const preparePostParams = (data) => {
    const formData = new FormData();
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            formData.append(key, data[key]);
        }
    }

    return formData;
}

export const prepareGetParams = (data) => {
    let params = [];

    for (let d in data) {
        params.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }

    return params.join('&');
}

export const prepareDates = (dates) => {
    const result = {};

    Object.keys(dates).forEach(paramName => {
        result[paramName] = new Date(dates[paramName]).
        toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
        replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
    })

    return result;
}
