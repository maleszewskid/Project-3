import React, { useState } from 'react';
import { LineChart, Chart } from 'react-chartkick';
import 'chart.js'

const SentimentChart = props => {
    console.log(props)
    return (
        <>
            <h2 className='m-auto'>Mood</h2>
            <LineChart data={props.data} />
        </>
    )
}

export default SentimentChart;