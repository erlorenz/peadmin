import gql from 'graphql-tag';

export const GET_CUSTOMER_ORDER = gql`
  query getCustomerOrder($id: ID!) {
    getCustomerOrder(id: $id) {
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
        id
      }
      picked_up
      checked_in
      out_for_delivery
      completed
      refunds {
        amount
        stripe_refund
        created_at
        id
      }
      additionalCharges {
        amount
        stripe_charge
        created_at
        id
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
