import React from 'react';

import desktopImage from './../../images/czarny_bez_desktop.jpg';
import mobileImage from './../../images/czarny_bez_mobile.jpg';
import * as styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.heroImageDesktop} src={desktopImage} alt="Czarny Bez"/>
      <img className={styles.heroImageMobile} src={mobileImage}  alt="Czarny Bez"/>
    </div>
  );
};

export default Hero;