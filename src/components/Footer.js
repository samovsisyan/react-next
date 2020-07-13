import React, {Component} from 'react'
import styles from './Footer.module.scss';
// import Link from 'next/link';
// import Query from '../components/Query';
// import FOOTER_MENU_QUERY from '../apollo/queries/menu/footerMenu.js';
import FooterLogo from '../assets/images/logos/logo-footer.png';

class Footer extends Component {
    render() {
        return (
          <div>
              <h1>---Footer---</h1>
                <section className={`container ${styles.signup}`}>
                    <h1>Sign up today</h1>
                    <a href='/'><a><button className='btn primary'>See Plans</button></a></a>
                </section>

                <footer className={`${styles.appFooter} container`}>
                    <div className={styles.before}>
                        <a href='/'><a><button className='btn'>Request demo</button></a></a>
                        <span></span>

                    </div>

                    <div className={styles.footerFlex}>
                        <div className={`${styles.col} ${styles.footerLeft}`}>
                            <div>
                                <h3>Phone</h3>
                                <a href='tel:+16048129407'>(604) 812-9407</a>
                                <h3>Navigation</h3>
                            {/*    <Query query={FOOTER_MENU_QUERY}>*/}
                            {/*        {({ data: { menuItems } }) => {*/}

                            {/*        return (*/}
                            {/*            <nav className={styles.nav}>*/}
                            {/*                <ul>*/}
                            {/*                    {menuItems.map(menuItem => (*/}
                            {/*                        <li key={menuItem.id}>*/}
                            {/*                            <Link href={`/${menuItem.slug}`}>*/}
                            {/*                                <a>{menuItem.name}</a>*/}
                            {/*                            </Link>*/}
                            {/*                        </li>*/}
                            {/*                    ))}*/}
                            {/*                </ul>*/}
                            {/*            </nav>*/}
                            {/*        )*/}
                            {/*    }}*/}
                            {/*</Query>*/}
                        </div>
                        <p className={styles.copy}>© {new Date().getFullYear()} Setsail. All rights reserved</p>
                    </div>

                    <div className={styles.col}>
                        <div>
                            <h3>Enquiries</h3>
                            <a href='mailto:team@setsailrealty.ca'>team@setsailrealty.ca</a>
                            <h3>Follow us</h3>
                            <ul className={styles.social}>
                                <li><a href='https://www.facebook.com/Setsail-Realty-109349094122580' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
                                <li><a href='https://instagram.com/'>Instagram</a></li>
                                <li><a href='https://twitter.com/'>Twitter</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.footerRight} ${styles.col}`}>
                        <div>
                            <img src={FooterLogo} alt='Setsail Realty logo' />
                            <p>Designed by Setsail in <strong>Beautiful British Columbia</strong></p>

                            <a href='/'><a><button className='btn light'>Request demo</button></a></a>
                        </div>

                        <p>Subsidiary of <strong>Setsail Canada</strong></p>
                    </div>
                </div>
            </footer>
          </div>
        )
    }
}

export default Footer