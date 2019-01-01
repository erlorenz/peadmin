import gql from 'graphql-tag';

export default token => {
  return {
    query: gql`
        {
            checkToken(token) {
                success
                message
            }
        }
      
      `,
  };
};
