import React, {Component} from 'react'
// import Link from 'next/link';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import styles from './index.module.scss';
import CodeIcon from '../assets/images/icons/code.svg';
import SyncIcon from '../assets/images/icons/sync.svg';
import MobileIcon from '../assets/images/icons/mobile.svg';
import MoneyIcon from '../assets/images/icons/money.svg';
import Arrow from '../assets/images/icons/arrow-right-white.svg';
import Wrapper from '../components/Wrapper'
// import Slider from 'react-slick';
// import FEATURES_HOME_QUERY from '../apollo/queries/feature/feature-home.js';
// import Query from '../components/Query';
// import HomeFeature from '../components/features/HomeFeature';
// import Lottie from 'react-lottie';
// import animationData from '../lottie/home-hero';
// import * as animationData from '../lottie/test.json'
// import * as animationData from '../lottie/home2.json'

// import animationData from '../lottie/home-test.json'

class Home extends Component {
  render() {
    // const sliderSettings = {
    //   infinite: true,
    //   dots: false,
    //   arrows: true,
    //   slidesToShow: 3.5,
    //   slidesToScroll: 1,
    // }
    //
    // const animationOptions = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: animationData.default,
    //   rendererSettings: {
    //     // preserveAspectRatio: 'xMidYMid slice',
    //     preserveAspectRatio: 'xMidYMid meet',
    //
    //     // progressiveLoad: true,
    //   },
    // };
    return (
      <Wrapper>
        {/*<Header type='dark' />*/}

        <section className={`${styles.hero} container`}>
          {/* <div className={styles.lottie}>
          <Lottie options={animationOptions}
            height={1080}
            width={1923}
          />
        </div> */}
          <div className={styles.content}>
            <h1>Premium Real Estate Websites</h1>
            <ul>
              <li><img src={CodeIcon} />Fully Managed, built for you</li>
              <li><img src={SyncIcon} />Automatic IDX Listings</li>
              <li><img src={MobileIcon} />Fast, premium, mobile-first designs</li>
              <li><img src={MoneyIcon} />Focused on Lead Generation</li>
            </ul>
            <div className={styles.buttonWrapper}>
              <a href='/pricing'><button className='btn primary'>See plans <img src={Arrow} /></button></a>
              <a href='/'><button className='btn outline-light'>Request demo</button></a>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <ul className={styles.social}>
              <li><a href='https://www.facebook.com/Setsail-Realty-109349094122580' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-f"></i></a></li>
              <li><a href='https://instagram.com/'><i className="fab fa-instagram"></i></a></li>
              <li><a href='https://twitter.com/'><i className="fab fa-twitter"></i></a></li>
            </ul>

            <ol className={styles.process}>
              <li>1. Headshots</li>
              <li>2. Bio</li>
              <li>3. Website, Business Card, FB Cover, Signature</li>
            </ol>
          </div>
        </section>

        <section className={`${styles.features} container`}>
          <div className={styles.content}>
            <h1>Features to help you close sales</h1>
            <div>
              <p>All of your listings will now have a gorgeous landing page, showing big photos of the unit, highlighting the most important information.</p>
              <a href='/features'><button className='btn outline-secondary'>View All Features</button></a>
            </div>
          </div>

          {/*<Query query={FEATURES_HOME_QUERY}>*/}
          {/*  {({ data: { features } }) => {*/}
          {/*    return (*/}
          {/*      <>*/}
          {/*        <Slider {...sliderSettings} className={`home-slider ${styles.slider}`}>*/}
          {/*          {features && features.map(feature => (*/}
          {/*            <HomeFeature key={feature.id} feature={feature} />*/}
          {/*          ))}*/}
          {/*        </Slider>*/}
          {/*      </>*/}
          {/*    )*/}
          {/*  }}*/}
          {/*</Query>*/}
        </section>

        <section className={`${styles.how} container`}>
          <div className={styles.content}>
            <h1>Website built for you. Fast. Automated.</h1>
            <p>Our local Vancouver team takes care of your headshots, interviews you for sales copy on the site, and builds your branding assets.</p>
            <a href='/'><button className='btn outline-light'>See how it works</button></a>
          </div>
        </section>
        {/*<Footer />*/}
      </Wrapper>
    )
  }
}

export default Home