import React, {useState, useEffect} from 'react'
import styles from './CountryPicker.module.css'
import {FormControl, NativeSelect } from '@mui/material'
import {fetchCountries} from '../../api'

export default function CountryPicker({handleCountryChange}) {

  const [Country, setCountry] = useState([])

  useEffect(()=>{
    const fetchAPI = async () => {
      const allCountries = await fetchCountries();

      setCountry(allCountries.data.countries);
    }
    fetchAPI()
  }, [setCountry])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>Global</option>
        {Country.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
      </NativeSelect>
    </FormControl>
  )
}
