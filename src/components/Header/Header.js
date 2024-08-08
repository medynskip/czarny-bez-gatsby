import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState} from "react";
// import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu';

import * as  styles from './Header.module.scss';
// import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className={styles.header} id="header-wrap">
      <nav className={styles.topMenu}>
        <div className={styles.logoContainer}>
          <img className={styles.logoImage} alt="logo" src={`logo.jpg`} />
          {/* <img className={styles.logoImage} alt="logo" src={logo} /> */}
        </div>

        <Menu 
          onOpen={() => {
            setMenuOpen(prev => !prev);
          }} 
          onClose={() => {
            setMenuOpen(prev => !prev);
          }} 
          isOpen={menuOpen} 
          width={ '380px' } 
          right
          pageWrapId={"page-wrap"} 
          outerContainerId={"gatsby-focus-wrapper"}
          
        >
          <div className={styles.burgerHead}>
            <h2 className={styles.burgerTitle}>Czarny Bez</h2>
            <span>Nawiguj do:</span>
          </div>
          <AnchorLink to="/#bio" title="O nas" onAnchorLinkClick={() => {
            setMenuOpen(false);
          }}>
            Bio
          </AnchorLink>
          <AnchorLink to="/#teledyski" title="Video" onAnchorLinkClick={() => {
            setMenuOpen(false);
          }}>
            Teledyski
          </AnchorLink>
          <AnchorLink to="/#koncerty" title="Koncerty" onAnchorLinkClick={() => {
            setMenuOpen(false);
          }}>
            Koncerty
          </AnchorLink>
          <AnchorLink to="/#merch" title="Merch" onAnchorLinkClick={() => {
            setMenuOpen(false);
          }}>
            Merch
          </AnchorLink>
          <AnchorLink to="/#kontakt" title="Kontakt" onAnchorLinkClick={() => {
            setMenuOpen(false);
          }}>
            Kontakt
          </AnchorLink>
        </Menu>

        {/* <ul className={styles.navigation}>
        <li className={styles.navigationElement}>
          <AnchorLink to="/#bio" title="O nas">
            Bio
          </AnchorLink>
        </li>
        <li className={styles.navigationElement}>
          <AnchorLink to="/#teledyski" title="Video">
            Teledyski
          </AnchorLink>
        </li>
        <li className={styles.navigationElement}>
          <AnchorLink to="/#koncerty" title="Koncerty">
            Koncerty
          </AnchorLink>
        </li>
        <li className={styles.navigationElement}>
          <AnchorLink to="/#merch" title="Merch">
            Merch
          </AnchorLink>
        </li>
        <li className={styles.navigationElement}>
          <AnchorLink to="/#kontakt" title="Kontakt">
            Kontakt
          </AnchorLink>
        </li>
      </ul>  */}
      </nav>
    </header> 
  );
};

export default Header;
