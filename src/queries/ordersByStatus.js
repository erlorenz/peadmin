import gql from 'graphql-tag';

export const ORDERS_BY_STATUS = gql`
  query GetOrdersByStatus($status: [String!]!) {
    getCustomerOrdersByStatus(status: $status) {
      name
      hotel
      pickup_date
      return_date
      status
      id
      total_price
    }
  }
`;
