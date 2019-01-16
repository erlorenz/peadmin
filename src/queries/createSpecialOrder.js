import gql from 'graphql-tag';

export const CREATE_SPECIAL_ORDER = gql`
  mutation createSpecialOrder(
    $stripeToken: String!
    $name: String!
    $company: String!
    $total_price: Int!
    $email: String!
    $description: String!
    $phone: String!
  ) {
    createSpecialOrder(
      stripeToken: $stripeToken
      name: $name
      company: $company
      total_price: $total_price
      email: $email
      phone: $phone
      description: $description
    ) {
      database {
        success
        message
      }
    }
  }
`;
