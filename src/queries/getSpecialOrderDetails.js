import gql from 'graphql-tag';

export const GET_SPECIAL_ORDER = gql`
  query GetSpecialOrderDetails($id: ID!) {
    getSpecialOrderDetails(special_order_id: $id) {
      status
      total_price
      name
      id
      created_at
      pickup_date
      return_date
      email
      hotel
      phone
      room
      starch
      special_instructions
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
      text_sent
      receipt_sent
      customerOrderItems {
        description
        id
        slug
        quantity
        price
      }
    }
  }
`;
