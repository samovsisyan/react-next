import React, {Component} from 'react'
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import styles from './how-it-works.module.scss';

import Img1 from '../assets/images/how-1.jpg';
import Img2 from '../assets/images/how-2.jpg';
import Img3 from '../assets/images/how-3.jpg';
import Img4 from '../assets/images/how-4.jpg';
import Img5 from '../assets/images/how-5.jpg';
import Img6 from '../assets/images/how-6.jpg';
import Img8 from '../assets/images/how-8.jpg';
import Img9 from '../assets/images/how-9.jpg';
import Wrapper from '../components/Wrapper'

class How extends Component {
  render() {
    const grids = [
      {
        id: 1,
        h2: <h2><strong>Headshots</strong> Photoshoot</h2>,
        text: 'Setsail Realty websites are made with user experience in mind. Regardless if its a phone, tablet, or a computer - the web experience must adapt to the user.',
        images: [Img1, Img2, Img3]
      },
      {
        id: 2,
        h2: <h2><strong>Bio</strong> Interview</h2>,
        text: 'Setsail Realty websites are made with user experience in mind. Regardless if its a phone, tablet, or a computer - the web experience must adapt to the user.',
        images: [Img4, Img5, Img6]

      },
      {
        id: 3,
        h2: <h2><strong>Branding</strong> Assets</h2>,
        text: 'Setsail Realty websites are made with user experience in mind. Regardless if its a phone, tablet, or a computer - the web experience must adapt to the user.',
        images: ['', Img8, Img9]

      },
    ]
    return (
      <Wrapper>
        {/*<Header type='light' />*/}

        <section className={`container ${styles.header}`}>
          <div className={styles.content}>
            <div>
              <h1>How it works</h1>
              <p>Easy, and taken care of.</p>
            </div>

            <div className={styles.steps}>
              {grids && grids.map(item =>
                <div key={item.id} className={styles.step}>
                  <span>{item.id}</span>
                  {item.h2}
                </div>
              )}

            </div>
          </div>

        </section>

        {grids && grids.map(item =>
          <section key={item.id} className={styles.stepSection}>
            <div className={styles.img}>
              {item.images && item.images.map((img, index) => (
                <img key={index} src={img} alt='How it works illustration' />
              ))}
            </div>
            <div className={styles.text}>
              <div className={styles.step}>
                <span>{item.id}</span>
                {item.h2}
              </div>
              <p>{item.text}</p>
            </div>


          </section>
        )}



        {/*<Footer />*/}


      </Wrapper>
    )
  }
}

export default How