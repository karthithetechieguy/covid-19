import React from 'react';
import { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './countryPicker.module.css'
import { ICountryData } from './../../interfaces/apiInterface';
import { fetchCountries } from './../../api';
const CountryPicker = (props: { handleCountryChange: any }) => {
    let countriesArray: Array<ICountryData>;
    countriesArray = []
    const [countries, setFetchedCountries] = useState(countriesArray);

    useEffect(
        () => {
            const fetchData = async () => {
                let response = await fetchCountries();
                countriesArray = response.data;

                setFetchedCountries(countriesArray)

            }
            fetchData();
        }, [setFetchedCountries]
    )


    return (
        <div className={styles.container}>
            {countries.length ? <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="India" onChange={(e: any) => props.handleCountryChange(e.target.value)}>
                    {countries.map((e: any, i: number) => <option key={i} value={e.Slug}>{e.Country}</option>)}
                </NativeSelect>
            </FormControl> : <h5>Loading graph</h5>}

        </div>
    )
}


export default CountryPicker;