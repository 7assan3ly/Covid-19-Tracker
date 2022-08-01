import React, { Component } from 'react'
import { fetchData } from './api'
import styles from './App.module.css'
import {Cards, Chart, CountryPicker} from './components'
import covidImg from '../src/img/covid.png'

export default class App extends Component {

  state = {
    data : {},
    country: ''
  }

  async componentDidMount () {
    const data = await fetchData()
    this.setState({data})
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country)
    this.setState({data, country})
  }

  render() {

    const {data} = this.state
    const {country} = this.state

    return (
      <div className={styles.container}>
        <img src={covidImg} className={styles.covidImg} alt='' />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
