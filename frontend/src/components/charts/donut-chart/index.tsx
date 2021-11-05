import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { saleSum } from 'types/saleSum'
import { URL_BASE_DEV, URL_BASE_PROD } from 'utils/request'

type IChartData = {
  labels: string[],
  series: number[],
}

const DonutChart = () => {

  const [chartData, setChartData] = useState<IChartData>({ labels: [], series: [] })

  useEffect(() => {
    axios.get(`${URL_BASE_PROD}/sales/amount-by-seller`)
      .then(response => {
        const data = response.data as saleSum[];
        const apiLabels = data.map(amount => amount.sellerName);
        const apiSeries = data.map(amount => amount.sum);

        setChartData({ labels: apiLabels, series: apiSeries });
      })
  }, []);

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  // }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  )
}

export default DonutChart;