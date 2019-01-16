import gql from 'graphql-tag';

export const INSERT_ADDITIONAL_CHARGE = gql`
  mutation insertAdditionalCharge(
    $customer_order_id: ID
    $special_order_id: ID
    $admin_user_id: ID!
    $amount: Int!
    $stripe_customer: String!
    $name: String!
    $email: String!
  ) {
    insertAdditionalCharge(
      customer_order_id: $customer_order_id
      special_order_id: $special_order_id
      admin_user_id: $admin_user_id
      amount: $amount
      stripe_customer: $stripe_customer
      name: $name
      email: $email
    ) {
      receiptEmail {
        success
        message
      }
      database {
        success
        message
      }
    }
  }
`;
