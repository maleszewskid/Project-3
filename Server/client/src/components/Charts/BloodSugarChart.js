import React, { useState } from 'react';
import { LineChart, Chart } from 'react-chartkick';
import 'chart.js'

const BloodSugarChart = props => {
    return (
        <>
            <h2 className='mx-2' >{props.data[0].name}</h2>
            <LineChart className='p-2' data={props.data} />
        </>
    )
}

export default BloodSugarChart;