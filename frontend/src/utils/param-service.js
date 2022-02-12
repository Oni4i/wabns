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
        result[paramName] = dates[paramName].toISOString().slice(0,10);
    })

    return result;
}
