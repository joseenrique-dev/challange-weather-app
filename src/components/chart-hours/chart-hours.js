import { Line } from '@ant-design/charts';
import buildChartData from "../../services/buildChartData";
export default function ChartHours({generalData}){
    const data = buildChartData(generalData);
    console.log("result", data)
    // const data = [
    //     {year   : '1991', value1: 3 },
    //     { year: '1992', value: 4 },
    //     { year: '1993', value: 3.5 },
    //     { year: '1994', value: 5 },
    //     { year: '1995', value: 4.9 },
    //     { year: '1996', value: 6 },
    //     { year: '1997', value: 7 },
    //     { year: '1998', value: 9 },
    //     { year: '1999', value: 13 },
    //   ];
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
            xAxis: {
                grid: {
                  line: {
                    style: {
                      stroke: 'black',
                      lineWidth: 2,
                      lineDash: [4, 5],
                      strokeOpacity: 0.7,
                      shadowColor: 'black',
                      shadowBlur: 10,
                      shadowOffsetX: 5,
                      shadowOffsetY: 5,
                      cursor: 'pointer'
                    }
                  }
                }
              },
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