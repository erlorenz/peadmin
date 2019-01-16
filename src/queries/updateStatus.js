import gql from 'graphql-tag';

export const UPDATE_STATUS = gql`
  mutation updateStatus(
    $status: String!
    $customer_order_id: ID
    $special_order_id: ID
  ) {
    updateStatus(
      status: $status
      customer_order_id: $customer_order_id
      special_order_id: $special_order_id
    ) {
      twilio {
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
