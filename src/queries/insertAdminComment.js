import gql from 'graphql-tag';

export const INSERT_ADMIN_COMMENT = gql`
  mutation insertAdminComment(
    $customer_order_id: ID
    $special_order_id: ID
    $admin_user_id: ID!
    $comment_body: String!
  ) {
    insertAdminComment(
      customer_order_id: $customer_order_id
      special_order_id: $special_order_id
      admin_user_id: $admin_user_id
      comment_body: $comment_body
    ) {
      success
      message
    }
  }
`;
