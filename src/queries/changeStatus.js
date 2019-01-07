import gql from 'graphql-tag';

export const CHANGE_STATUS = gql`
  mutation ChangeStatus(
    $status: String!
    $customer_order_id: ID
    $special_order_id: ID
  ) {
    changeStatus(
      status: $status
      customer_order_id: $customer_order_id
      special_order_id: $special_order_id
    ) {
      twilio {
        success
        message
      }
    }
  }
`;
