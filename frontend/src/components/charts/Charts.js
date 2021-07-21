import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis'

const Charts = () => {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
    return (
        <div  className={{ marginTop: "20px"}}>
            <XYPlot height={400} width={400}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
                <VerticalBarSeries data={data} color="#f65a6f" />
                <VerticalBarSeries data={data} color="#3a3e41" />
                <VerticalBarSeries data={data} color="#38e1b0" />
            </XYPlot>
         </div>
    );
};

export default Charts;
