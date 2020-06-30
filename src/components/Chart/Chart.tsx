import React from 'react';

import { useEffect, useState } from 'react';

import { Line, Bar } from 'react-chartjs-2';
import { IGlobalState } from './../../interfaces/common';
import { ICountryWiseStats } from './../../interfaces/apiInterface';
import styles from './Chart.module.css';
const Chart = (props: { globalData: IGlobalState }) => {
    let stateValue: IGlobalState = {};
    stateValue = props.globalData;
    const [dailyData, setDailyData] = useState(stateValue);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(stateValue);
        };
        fetchAPI();

    });
    const lineChart = (
        dailyData.countryWiseStats ?
            (<Line
                data={{
                    labels: dailyData.countryWiseStats?.map((data: ICountryWiseStats) => new Date(data.Date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.countryWiseStats?.map((data: ICountryWiseStats) => data.Confirmed),
                        label: "Confirmed",
                        borderColor:"#0074D9",
                        fill:true
                    },{
                        data: dailyData.countryWiseStats?.map((data: ICountryWiseStats) => data.Deaths),
                        label: "Deaths",
                        borderColor:"#FF4136",
                        fill:true

                    },{
                        data: dailyData.countryWiseStats?.map((data: ICountryWiseStats) => data.Active),
                        label: "Active",
                        borderColor:"#B10DC9",
                        fill:true

                    },{
                        data: dailyData.countryWiseStats?.map((data: ICountryWiseStats) => data.Recovered),
                        label: "Recovered",
                        borderColor:"#2ECC40",
                        fill:true

                    }]
                }}
            />) : null
    );


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;