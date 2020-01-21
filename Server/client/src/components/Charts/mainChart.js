import React, { useState } from 'react';
import { LineChart, Chart } from 'react-chartkick';
import 'chart.js'

const MainChart = props => {
    //Use state to select which data set we view:
    const [displayData, setData] = useState('all');
    // data = [
    //     {"name":"Workout", "data": {"2017-01-01": 3, "2017-01-02": 4, ...}},
    //     {"name":"Call parents", "data": {"2017-01-01": 5, "2017-01-02": 3, ...}}
    //   ];
    return (
    <LineChart data={props.heartRate}/>
    )
}

export default MainChart;