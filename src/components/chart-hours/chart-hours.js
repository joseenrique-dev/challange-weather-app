import { Line } from '@ant-design/charts';
import buildChartData from "../../services/buildChartData";
export default function ChartHours({generalData}){
    const data = buildChartData(generalData);
    
      const config = {
        data,
        height: 400,
        xField: 'hour',
        yField: 'temp',
        point: {
          size: 5,
          shape: 'diamond',
        },
        label: {
          style: {
            fill: '#aaa',
            cursor: 'pointer',
            fontSize: 15    
          },
        },
      };

    return (
        <>
            <Line {...config} />
        </>
    );
}