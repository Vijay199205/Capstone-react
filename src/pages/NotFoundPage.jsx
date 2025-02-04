import React from 'react'
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
   

    <div className={styles.container}>
        <h1 className={styles.heading}> 404 </h1>
        <p className={styles.text}>
        Oops! Page Not found.
        </p>
        <p className={styles.subtext}>
        The page your looking for might have been removed or had its name changed, or is temporay unavaialbe
        </p>
        <Link to="/" className={styles.link}>Go to HomePage</Link>
    </div>
  )
}

export default NotFoundPage
