import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => this.props.history.push('/'), 3000);
  }, []);

  return <h1>NOT FOUND</h1>;
};

export default NotFound;
