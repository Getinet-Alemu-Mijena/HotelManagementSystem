import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Registration.module.css'; 

const Registration = () => {
  return (
    <>
    <nav className={styles.navigationBar}>
      <ul>
        <li><Link></Link></li>
      </ul>
    </nav>
    <div className={styles.conainer}>
    <form>
      <div className={styles.formGroup}>
        <label>First Name</label>
        <input type='text' placeholder='Enter Your First Name!'></input>
      </div>
    </form>
    </div>
    </>
  );
}

export default Registration
