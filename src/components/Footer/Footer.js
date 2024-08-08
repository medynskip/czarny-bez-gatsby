import React from "react";

import facebook from "./../../images/facebook.svg";
import instagram from "./../../images/instagram.svg";
import mail from "./../../images/mail.svg";
import phone from "./../../images/phone.svg";
import twitter from "./../../images/twitter.svg";
import * as  styles from './Footer.module.scss';

const Footer = () => { 
  return (
    <footer>
      <div id="kontakt" className={styles.footer}>
        <div className={styles.footerContainer}>
          <h3>Kontakt:</h3>
          <p className={styles.footerText}>
            <b>„Czarny Bez” industrial folk metal band</b>
            <br />
            <span className={styles.textLine}>
              <img className={styles.icon} alt="telefon" src={phone} /> +48 503
              150 606
            </span>
            <span className={styles.textLine}>
              <img className={styles.icon} alt="email" src={mail} />
              grupaczarnybez@gmail.com
            </span>
            <span className={styles.textLine}>
              <img className={styles.icon} alt="facebook" src={facebook} />
              <a href="http://www.facebook.com/grupaczarnybez/">
                /grupaczarnybez
              </a>
            </span>
            <span className={styles.textLine}>
              <img className={styles.icon} alt="twitter" src={twitter} />
              <a href="https://twitter.com/CzarnyB">/CzarnyB</a>
            </span>
            <span className={styles.textLine}>
              <img className={styles.icon} alt="instagram" src={instagram} />
              <a href="http://www.instagram.com/czarnybez__official/">
                /czarnybez__official
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;