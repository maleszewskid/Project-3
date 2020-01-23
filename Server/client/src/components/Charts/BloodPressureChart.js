import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js'

const BloodPressureChart = props => {
    
    return (
        <>
            <h2 className='mx-auto'>Blood Pressure</h2>
            <LineChart className='my-2' data={props.data} download={true}/>
        </>
    )
}

export default BloodPressureChart;