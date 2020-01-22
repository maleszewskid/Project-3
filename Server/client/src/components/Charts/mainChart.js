import React, { useState } from 'react';
import { LineChart, Chart } from 'react-chartkick';
import 'chart.js'

const MainChart = props => {
    return (
    <LineChart data={props.data}/>
    )
}

export default MainChart;