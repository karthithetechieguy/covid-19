export interface IApiSummaryResponse {
    Global:IApiSummaryGlobalResponse,
    Date: Date | string;
}

export interface IApiSummaryGlobalResponse {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}



export interface ICountryWiseTotalData
{
    Country:string,      
    CountryCode:string,
    Slug:string,
    NewConfirmed:number,
    TotalConfirmed:number,
    NewDeaths:number,
    TotalDeaths:number,
    NewRecovered:number,
    TotalRecovered:number,
    Date:Date

}



export interface ICountryData
{
    Country:string,
    Slug:string,
    ISO2:string
}


export  interface ICountryWiseStats
{
    Confirmed:number,
    Deaths:number,
    Recovered:number,
    Active:number,
    Date:string
}

export  interface ICountryWiseStatsAll extends ICountryWiseStats
{
    Country:string,
    CountryCode:string,
    Province:string,
    City:string,
    CityCode:string,
    Lat:string,
    Lon:string
}