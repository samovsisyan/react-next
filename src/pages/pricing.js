import React, {Component} from 'react'
// import Header from '../components/Header';
import styles from './pricing.module.scss';
import Wrapper from '../components/Wrapper'
// import SignupForm from '../components/signup/SignupForm';

class Pricing extends Component {
  render() {
    return (
      <Wrapper>
        {/*<Header type='light' />*/}
        <section className={`container ${styles.header}`}>
          <div className={styles.content}>
            <h1>Simple,<br />All-inclusive Pricing</h1>

            <div className={styles.listGrid}>
              <ul>
                <h3>Website</h3>
                <li>Fully Managed, built for you</li>
                <li>Automatic IDX Listings</li>
                <li>Fast, premium, mobile-first designs</li>
                <li>Focused on Lead Generation</li>
              </ul>
              <ul>
                <h3>Branded Assets</h3>
                <li>Business Cards</li>
                <li>Facebook Cover</li>
                <li>Email Signature</li>
              </ul>
              <ul>
                <h3>Support</h3>
                <li>No contracts / minimums</li>
                <li>No cancellation fees</li>
                <li>No setup fee</li>
              </ul>
              <ul>
                <h3>Bio</h3>
                <li>Interview bla bla</li>
              </ul>
              <ul>
                <h3>Headshots</h3>
                <li>Photoshoot bla bla</li>
              </ul>
            </div>

          </div>
          {/*<SignupForm />*/}
        </section>

        <section className={`container ${styles.signup}`}>
          <h1>Sign Up</h1>

        </section>

      </Wrapper>
    )
  }
}

export default Pricing