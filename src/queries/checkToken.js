import gql from 'graphql-tag';

export const CHECK_TOKEN = gql`
  query CheckToken {
    checkToken {
      name
      id
      access_level
      email
    }
  }
`;
