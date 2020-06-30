import React from 'react'; 
import styles from './Cards.module.css';
import {IApiSummaryResponse,IApiSummaryGlobalResponse} from './../../interfaces/apiInterface';
import {Card,CardContent,Typography,Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { typography } from 'material-ui/styles';

const Cards= (props:{summaryData:IApiSummaryResponse }) =>
{
    const lastUpdate=props.summaryData.Date; 
    if(props.summaryData.Global.NewConfirmed < 0)
        return <h5>"loading .."</h5>

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>NewConfirmed</Typography >
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={props.summaryData.Global.NewConfirmed}
                                    duration={2.5}
                                    separator=","
                                />
                                </Typography >
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} | {new Date(lastUpdate).toLocaleTimeString()} IST</Typography >
                            <Typography variant="body2">Number of active cases of COVID-19</Typography >
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>TotalConfirmed</Typography >
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={props.summaryData.Global.TotalConfirmed}
                                    duration={2.5}
                                    separator=","
                                />
                                </Typography >
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} | {new Date(lastUpdate).toLocaleTimeString()} IST</Typography >
                            <Typography variant="body2">Number of active cases of COVID-19</Typography >
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>NewDeaths</Typography >
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={props.summaryData.Global.NewDeaths}
                                    duration={2.5}
                                    separator=","
                                />
                                </Typography >
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} | {new Date(lastUpdate).toLocaleTimeString()} IST</Typography >
                            <Typography variant="body2">Number of active cases of COVID-19</Typography >
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>TotalDeaths</Typography >
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={props.summaryData.Global.TotalDeaths}
                                    duration={2.5}
                                    separator=","
                                />
                                </Typography >
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} | {new Date(lastUpdate).toLocaleTimeString()} IST</Typography >
                            <Typography variant="body2">Number of active cases of COVID-19</Typography >
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>NewRecovered</Typography >
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={props.summaryData.Global.NewRecovered}
                                    duration={2.5}
                                    separator=","
                                />
                                </Typography >
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} | {new Date(lastUpdate).toLocaleTimeString()} IST</Typography >
                            <Typography variant="body2">Number of active cases of COVID-19</Typography >
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                            <Typography color="textSecondary" gutterBottom>TotalRecovered</Typography >
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={props.summaryData.Global.TotalRecovered}
                                    duration={2.5}
                                    separator=","
                                />
                                </Typography >
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} | {new Date(lastUpdate).toLocaleTimeString()} IST</Typography >
                            <Typography variant="body2">Number of active cases of COVID-19</Typography >
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    )
}

export default Cards;