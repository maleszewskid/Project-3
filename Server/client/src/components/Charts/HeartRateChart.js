import React, { useState } from 'react';
import { LineChart, Chart } from 'react-chartkick';
import 'chart.js'

const HeartRateChart = props => {
    return (
        <>
            <h2 className='m-auto' >{props.data[0].name}</h2>
            <LineChart data={props.data} />
        </>
    )
}

export default HeartRateChart;