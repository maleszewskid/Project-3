import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js'

const SentimentChart = props => {
    return (
        <>
            <h2 className='m-auto'>Mood</h2>
            <LineChart data={props.data} />
        </>
    )
}

export default SentimentChart;