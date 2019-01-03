import React from 'react';
import styles from './AdminLoading.module.scss';

const AdminLoading = (authContext, data, loading) => {
  if (data) {
    console.log('Data from checktoken:', data);
    return <div>DATA : {data}</div>;
  }
  return <div className={styles.layout}>LOADING</div>;
};

export default AdminLoading;
