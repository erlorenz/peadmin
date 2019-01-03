import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      name
      id
      access_level
      email
      token
    }
  }
`;
