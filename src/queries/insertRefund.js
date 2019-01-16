import gql from 'graphql-tag';

export const INSERT_REFUND = gql`
  mutation insertRefund(
    $customer_order_id: ID
    $special_order_id: ID
    $admin_user_id: ID!
    $amount: Int!
    $stripe_charge: String!
    $name: String!
    $email: String!
  ) {
    insertRefund(
      customer_order_id: $customer_order_id
      special_order_id: $special_order_id
      admin_user_id: $admin_user_id
      amount: $amount
      stripe_charge: $stripe_charge
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
