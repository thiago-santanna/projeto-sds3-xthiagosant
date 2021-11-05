import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { URL_BASE_PROD } from 'utils/request';
import { SaleSumSuccessDto } from 'types/saleSuccess';
import { myRound } from 'utils/formatNumber';

type SeriesDataType = {
    name: string,
    data: number[],
}

type ChartData = {
    labels: {
        categories: string[],
    },
    series: SeriesDataType[],
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })

    useEffect(() => {
        axios.get(`${URL_BASE_PROD}/sales/success-by-seller`)
            .then(response => {
                const data = response.data as SaleSumSuccessDto[];
                const apiLabels = data.map(success => success.sellerName);
                const apiSeries = data.map(success => myRound(100.0 * success.sumDeals / success.sumVisited, 1));

                setChartData({
                    labels: {
                        categories: apiLabels,
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: apiSeries,
                        }
                    ]
                })
            })
    }, []);


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    // const mockData = {
    //     labels: {
    //         categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //     },
    //     series: [
    //         {
    //             name: "% Sucesso",
    //             data: [43.6, 67.1, 67.7, 45.6, 71.1]
    //         }
    //     ]
    // };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    )
}

export default BarChart;