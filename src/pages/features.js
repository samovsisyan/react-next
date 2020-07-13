import React, {Component} from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import styles from './features.module.scss'
import Wrapper from '../components/Wrapper'
// import Query from '../components/Query'
// import FEATURES_QUERY from '../apollo/queries/feature/features'
// import MainFeature from '../components/features/MainFeature'

class Features extends Component {
  render() {
    return (
      <Wrapper>
        {/*<Header type='dark'/>*/}
        <section className={`${styles.hero} container`}>
          <div className={styles.content}>
            <h1>Your New Website Does More</h1>
            <p>Setsail Realty websites are made with user experience in mind. Regardless if its a phone, tablet, or a
              computer - the web experience must adapt to the user.</p>
          </div>

        </section>

        <section>
          {/*<Query query={FEATURES_QUERY}>*/}
          {/*  {({data: {features}}) => {*/}
          {/*    return (*/}
          {/*      <div className={styles.featuresGrid}>*/}
          {/*        {features && features.map(feature => (*/}
          {/*          <MainFeature key={feature.id} feature={feature}/>*/}
          {/*        ))}*/}
          {/*      </div>*/}
          {/*    )*/}
          {/*  }}*/}
          {/*</Query>*/}

        </section>
        <section className={`container ${styles.benefits}`}>
          <h1>Many more benefits</h1>
          <ul>
            <li>Fast AWS Server</li>
            <li>CDN</li>
            <li>Security Standards Compliant</li>
            <li>Weekly Backups</li>
            <li>Custom Emails</li>
            <li>24/7 Support</li>
            <li>Mobile Responsiveness</li>
            <li>Constantly growing features</li>
            <li>CRM Integration</li>
            <li>Listing Support</li>
            <li>No Contracts</li>
            <li>Multilingual</li>
          </ul>
        </section>
        {/*<Footer/>*/}
      </Wrapper>
    )
  }
}

export default Features