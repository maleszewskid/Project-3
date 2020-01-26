import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js'
import '../dataManipulator/index'
const BloodPressureChart = props => {
    
    return (
        <>
            <h2 className='mx-auto'>Blood Pressure</h2>
            <LineChart className='my-2' data={props.data} download={true}/>
            <div style="display:none" id="chartPNG"></div>
        </>
    )
}

export default BloodPressureChart;