import gql from 'graphql-tag';

export const GET_CUSTOMER_ORDERS_BY_STATUS = gql`
  query GetCustomerOrdersByStatus(
    $status: [String!]!
    $orderBy: String
    $direction: String
  ) {
    getCustomerOrdersByStatus(
      status: $status
      orderBy: $orderBy
      direction: $direction
    ) {
      name
      hotel
      pickup_date
      return_date
      status
      id
      total_price
      created_at
    }
  }
`;
