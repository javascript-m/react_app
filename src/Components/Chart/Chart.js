import React from 'react';
import { ColumnChart } from 'react-chartkick';
import 'chart.js';
import './Chart.css';

/*
    switch(props.type)
        calse 'column' .... display, send data as props
*/

const Chart = (props) => {
    return (
        <div>
            <div className='pageSubtitle'>My stats</div>
            <div className='chartHolder'>
                <ColumnChart
                    className='colChart'
                data={[["Sun", 32], ["Mon", 46], ["Tue", 28]]} />
            </div>
        </div>
    );
}

export default Chart;