import React from 'react';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';

const ErrorPage: React.FunctionComponent = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['error-title']}>
        Error 404<br></br>Oops! We are unable to find what you're searching for!
      </div>
      <div className={styles['return-div']}>
        <Link to={{ pathname: '/' }}>
          <div className={styles['return-btn']}>Return to home page</div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
