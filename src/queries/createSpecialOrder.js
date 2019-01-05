import gql from 'graphql-tag';

export const CREATE_SPECIAL_ORDER = gql`
  mutation CreateOrder($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      name
      id
      access_level
      email
      token
    }
  }
`;
