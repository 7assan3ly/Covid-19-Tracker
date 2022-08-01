import React from 'react'
import styles from './Cards.module.css'
// import {Box, Card, CardContent, Grid, Typography, } from '@mui/material'
import { Container, Row, Col } from 'react-grid-system';
import cx from 'classnames'
import CountUp from 'react-countup';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>





<Container>
  <Row>
    <Col sm={12} md={4}>
      <div className={cx(styles.card, styles.confirmed)}>
        <p className={styles.cardHead}>Infected</p>
        <h5 className={styles.cardCount}>
          <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
        </h5>
        <p className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</p>
        <span className={styles.cardInfo}>Number of active cases of COVID-19</span>
      </div>
    </Col>

    <Col sm={12} md={4}>
    <div className={cx(styles.card, styles.recovered)}>
        <p className={styles.cardHead}>Recovered</p>
        <h5 className={styles.cardCount}>
          <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
        </h5>
        <p className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</p>
        <span className={styles.cardInfo}>Number of recovered cases of COVID-19</span>
      </div>
    </Col>

    <Col sm={12} md={4}>
    <div className={cx(styles.card, styles.deaths)}>
        <p className={styles.cardHead}>Deaths</p>
        <h5 className={styles.cardCount}>
          <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
        </h5>
        <p className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</p>
        <span className={styles.cardInfo}>Number of deaths cases of COVID-19</span>
      </div>
    </Col>
  </Row>
</Container>

    </div>
  )
}
