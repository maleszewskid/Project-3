import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js'

const SentimentChart = props => {
    return (
        <>
            <h2 className='mx-auto'>Mood</h2>
            <LineChart className='p-2' data={props.data} download={true}/>
        </>
    )
}

export default SentimentChart;