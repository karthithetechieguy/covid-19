import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchSummaryData,fetchCountryWiseDayData} from './api';
import {ICountryWiseTotalData,IApiSummaryGlobalResponse} from './interfaces/apiInterface';
import {IGlobalState} from './interfaces/common';
class App extends React.Component<any,IGlobalState>{

    state={
        summaryData:{
            NewConfirmed:-1,
            TotalConfirmed:-1,
            NewDeaths:-1,
            TotalDeaths:-1,
            NewRecovered:-1,
            TotalRecovered:-1
        },
        countries:[],
        lastUpdate:'',
        countryWiseStats:[]
    }
    async componentDidMount()
    {
        let fetchedData:any= await fetchSummaryData();
        console.log(fetchedData)
        this.setState(
            {
                summaryData:fetchedData.Global,
                lastUpdate:fetchedData.Date,
                countries:fetchedData.Countries
            }
        )
        
    }


     handleCountry=async (slug:string)=>
    {
        let country:Array<ICountryWiseTotalData>=this.state.countries.filter((e:ICountryWiseTotalData)=> e.Slug === slug) ;
        let countrySummary:Array<ICountryWiseTotalData>  = this.state.countries.filter((e:ICountryWiseTotalData)=> e.Country === country[0].Country) ;
        let formattedSummary:IApiSummaryGlobalResponse={
            NewConfirmed:countrySummary[0].NewConfirmed,
            TotalConfirmed: countrySummary[0].TotalConfirmed,
            NewDeaths: countrySummary[0].NewDeaths,
            TotalDeaths: countrySummary[0].TotalDeaths,
            NewRecovered: countrySummary[0].NewRecovered,
            TotalRecovered: countrySummary[0].TotalRecovered
        }
        const countryWiseStats=await fetchCountryWiseDayData(slug);
        this.setState({
            summaryData:formattedSummary,
            countryWiseStats:countryWiseStats
        })
        
    }

    render(){
        const summaryData={
            Global:this.state.summaryData,
            Date:this.state.lastUpdate
        };
        return(
            <div className={styles.container}>
                <Cards summaryData={summaryData} ></Cards>
                <CountryPicker handleCountryChange={this.handleCountry}></CountryPicker>
                <Chart globalData={this.state}></Chart>
            </div>
        )
    }
}

export default App;

