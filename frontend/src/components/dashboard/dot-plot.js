import {useEffect, useState} from "react";
import {Line} from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        },
    },
    scales: {
        y: {
            ticks: {
                stepSize: 5
            },
            min: 0
        }
    }
};

export const DotPlot = ({labels, datasets, title, ...props}) => {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        setChartData(() => {
            return {
                labels,
                datasets
            }
        });
    }, [labels, datasets])

    return (
        <>
            <Line
                options={{
                    ...options,
                    plugins: {
                        ...options.plugins,
                        title: {
                            display: !!title,
                            text: title
                        }
                    }
                }}
                data={chartData}
                {...props}
            />
        </>
    )
};
