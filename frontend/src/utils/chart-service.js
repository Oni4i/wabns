export const initialChart = () => {
    return {
        labels: [],
        datasets: []
    };
}

export const addLabel = (chart, label) => {
    chart.labels = chart.labels ? [...chart.labels, label] : [label];

    return chart;
}

export const addDataset = (chart, dataset) => {
    const {label, data, borderColor, backgroundColor, ...others} = dataset;

    const addedDataset = Object.assign(dataset, {
        label: label ?? '',
        data: data ?? [],
        borderColor: borderColor ?? 'rgb(255, 99, 132)',
        backgroundColor: backgroundColor ?? 'rgba(255, 255, 255)',
        ...others
    });

    chart.datasets = chart.datasets.length ? [...chart.datasets, addedDataset] : [addedDataset];

    return chart;
}

export const removeDataset = (chart, filterCallback) => {
    chart.datasets = chart.datasets.filter(filterCallback);

    return chart;
}

export const changeLabels = (chart, labels) => {
    chart.labels = labels;

    return chart;
}

export const createChart = async ({callback, labels, chartOptions}) => {
    const data = await callback();

    const chart = initialChart();
    chart.labels = labels;
    chart.datasets(Object.assign(chart, chartOptions), data);

    return chart;
}
