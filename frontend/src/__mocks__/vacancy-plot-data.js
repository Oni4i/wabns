import faker from 'faker';

const randomVacanciesCountWithLabels = () => {
    const numberOfData = faker.datatype.number({min: 10, max: 10});

    return {
        labels: Array(numberOfData).fill(0).map((val, index) => {
            const currDate = new Date();

            currDate.setDate(currDate.getDate() + index);

            return currDate.toISOString().split('T')[0];
        }),
        vacancies_count: Array(numberOfData).fill(0).map(() => faker.random.number())
    }
}

export const vacancyPlotData = [
    {
        trackId: 1,
        ...randomVacanciesCountWithLabels()
    },
    {
        trackId: 2,
        ...randomVacanciesCountWithLabels()
    },
    {
        trackId: 3,
        ...randomVacanciesCountWithLabels()
    },
];
