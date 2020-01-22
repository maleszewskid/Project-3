import React, { useState } from 'react';
import { LineChart, Chart } from 'react-chartkick';
import 'chart.js'

const BloodPressureChart = props => {
    console.log(props);
    return (
        <>
            <h2 className='mx-auto'>Blood Pressure</h2>
            <LineChart className='my-2' data={props.data} />
        </>
    )
}

export default BloodPressureChart;