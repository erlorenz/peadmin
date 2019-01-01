import React from 'react';
import styles from './AdminLoading.module.scss';

const AdminLoading = ({ checkToken, token }) => {
  checkToken(token);
  return <div className={styles.layout} />;
};

export default AdminLoading;
