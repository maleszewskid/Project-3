import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js'

const HeartRateChart = props => {
    return (
        <>
            <h2 className='mx-auto' >Heart Rate</h2>
            <LineChart className='p-2' data={props.data} download={true}/>
        </>
    )
}

export default HeartRateChart;