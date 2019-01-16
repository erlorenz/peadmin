import gql from 'graphql-tag';

export const CHECK_TOKEN = gql`
  query checkToken {
    checkToken {
      name
      id
      access_level
      email
    }
  }
`;
