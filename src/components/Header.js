// import Link from 'next/link';
// import styles from './Header.module.scss';
// import Query from '../components/Query';
// import MENU_QUERY from '../apollo/queries/menu/menu.js';
// import Logo from '../assets/images/logos/logo-white.png';
// import { useRouter } from 'next/router'
//
//
// const Header = (props) => {
//     // const router = useRouter();
//     return (
//         <header className={`${styles.appHeader} ${styles[props.type]}`}>
//             <Link href='/'>
//                 <a href=''>
//                     <img src={Logo} alt='Setsail Realty logo' className={styles.logo} />
//                 </a>
//             </Link>
//
//             <Query query={MENU_QUERY}>
//                 {({ data: { menuItems } }) => {
//
//                     return (
//                         <nav className={styles.nav}>
//                             <ul>
//                                 {menuItems.map(menuItem => (
//                                     <li key={menuItem.id}>
//                                         <Link href={`/${menuItem.slug}`}>
//                                             <a className={router.pathname === '/' + menuItem.slug ? styles.active : ''}>
//                                                 {menuItem.button ?
//                                                     <button className='btn outline-primary'>{menuItem.name}</button>
//                                                     :
//                                                     <span>{menuItem.name}</span>
//                                                 }
//                                             </a>
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     )
//                 }}
//             </Query>
//
//
//
//         </header >
//
//     );
// };
//
// export default Header;

import React, {Component} from 'react'
// import Link from 'next/link';
import styles from './Header.module.scss';
// import Query from '../components/Query';
// import MENU_QUERY from '../apollo/queries/menu/menu.js';
import Logo from '../assets/images/logos/logo-white.png';
// import { useRouter } from 'next/router'

class Header extends Component {
  render() {
    return (
      <header className={`${styles.appHeader}`}>
        <h1>---Header---</h1>
        <a href='/'>
          <a href=''>
            <img src={Logo} alt='Setsail Realty logo' className={styles.logo} />
          </a>
        </a>

        {/*<Query query={MENU_QUERY}>*/}
        {/*  {({ data: { menuItems } }) => {*/}

        {/*    return (*/}
        {/*      <nav className={styles.nav}>*/}
        {/*        <ul>*/}
        {/*          {menuItems.map(menuItem => (*/}
        {/*            <li key={menuItem.id}>*/}
        {/*              <Link href={`/${menuItem.slug}`}>*/}
        {/*                <a className={router.pathname === '/' + menuItem.slug ? styles.active : ''}>*/}
        {/*                  {menuItem.button ?*/}
        {/*                    <button className='btn outline-primary'>{menuItem.name}</button>*/}
        {/*                    :*/}
        {/*                    <span>{menuItem.name}</span>*/}
        {/*                  }*/}
        {/*                </a>*/}
        {/*              </Link>*/}
        {/*            </li>*/}
        {/*          ))}*/}
        {/*        </ul>*/}
        {/*      </nav>*/}
        {/*    )*/}
        {/*  }}*/}
        {/*</Query>*/}



      </header >
    )
  }
}

export default Header