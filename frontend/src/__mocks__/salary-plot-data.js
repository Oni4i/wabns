import faker from 'faker';

const randomSalaryWithLabels = () => {
    const numberOfData = faker.datatype.number({min: 10, max: 10});

    const fakeData = Array(numberOfData).fill(0).reduce((prev) => {
        const salaries = Array(numberOfData).fill(0).map(() => faker.datatype.number({min: 40000, max: 180000}))
        salaries.sort();

        const lowMiddle = Math.floor((salaries.length - 1) / 2);
        const highMiddle = Math.ceil((salaries.length - 1) / 2);
        const median = (salaries[lowMiddle] + salaries[highMiddle]) / 2;

        prev.min_salaries.push(Math.min(...salaries));
        prev.max_salaries.push(Math.max(...salaries));
        prev.median_salaries.push(median);
        prev.average_salaries.push([...salaries].reduce((a,b) => a + b) / salaries.length)

        return prev;
    }, {min_salaries: [], max_salaries: [], median_salaries: [], average_salaries: []})

    return {
        labels: Array(numberOfData).fill(0).map((val, index) => {
            const currDate = new Date();

            currDate.setDate(currDate.getDate() + index);

            return currDate.toISOString().split('T')[0];
        }),
        datasets: [
            ...Object.keys(fakeData).map((key) => ({
                data: fakeData[key],
                borderColor: faker.commerce.color(),
                backgroundColor: faker.commerce.color(),
                label: faker.random.word(),
            }))
        ]
    }
}

export const salaryPlotData = [
    {
        trackId: 1,
        ...randomSalaryWithLabels()
    },
    {
        trackId: 2,
        ...randomSalaryWithLabels()
    },
    {
        trackId: 3,
        ...randomSalaryWithLabels()
    },
];
