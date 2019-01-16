import gql from 'graphql-tag';

export const GET_SPECIAL_ORDER = gql`
  query getSpecialOrder($id: ID!) {
    getSpecialOrder(id: $id) {
      status
      total_price
      id
      description
      company
      name
      created_at
      email
      phone
      stripe_charge
      stripe_customer
      adminComments {
        created_at
        comment_body
        name
      }
      picked_up
      checked_in
      out_for_delivery
      completed
      refunds {
        amount
        stripe_refund
      }
      additionalCharges {
        amount
        stripe_charge
      }
    }
  }
`;
