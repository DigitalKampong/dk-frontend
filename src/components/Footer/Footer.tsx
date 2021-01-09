import React from 'react';
import fmasLogo from '../../images/fmas-logo.png';
import dscLogo from '../../images/dsc-logo.png';
import styles from './Footer.module.css';

const Footer: React.FunctionComponent = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-body']}>
        <h2>An initiative by</h2>
        <div>
          <div className={styles['image-div']}>
            <a href="http://www.fmas.org.sg/">
              <img className={styles['image-fmas']} src={fmasLogo} alt="" />
            </a>
          </div>
          <div className={styles['image-div']}>
            <a href="https://dsc.comp.nus.edu.sg/">
              <img className={styles['image-dsc']} src={dscLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
