import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminLanding = () => {
  console.log('Redirected from landing');
  return <Redirect to="/admin/active" />;
};

export default AdminLanding;
