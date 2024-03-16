import { Chart as ChartJS, registerables, TooltipItem } from 'chart.js/auto'
import { Line as LineChart } from 'react-chartjs-2'
ChartJS.register(...registerables)

export default function Line() {
  return (
    <LineChart
      data={{
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
          {
            label: 'Quantidade de vezes que sua propaganda foi apresentada',
            data: [40, 60, 30, 32, 42, 22, 12, 66, 19, 52, 55, 88, 120, 22, 0, 0, 0, 0, 0, 0]
          }
        ]
      }}
      options={{
        elements: {
          line: {
            tension: 0.5
          }
        },
        plugins: {
          title: { text: 'Quantidade de vezes que sua propaganda foi apresentada', display: true, font: { size: 14 } },
          subtitle: { text: 'Apresentações', position: 'left', display: true, font: { size: 14 } },
          legend: {
            title: { text: 'Dias do mês', display: true, font: { size: 14 } },
            position: 'bottom',
            display: true,
            labels: { usePointStyle: true, font: { size: 14 } }
          },
          tooltip: {
            callbacks: {
              title: (context: TooltipItem<'line'>[]) => {
                return ''
              },
              label: (context: TooltipItem<'line'>) => {
                return `No dia ${context.label} sua propaganda foi apresentada ${context.raw} vezes.`
              }
            }
          }
        }
      }}
    />
  )
}
