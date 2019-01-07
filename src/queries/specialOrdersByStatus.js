import gql from 'graphql-tag';

export const SPECIAL_ORDERS_BY_STATUS = gql`
  query GetSpecialOrdersByStatus(
    $status: [String!]!
    $orderBy: String
    $direction: String
  ) {
    getSpecialOrdersByStatus(
      status: $status
      orderBy: $orderBy
      direction: $direction
    ) {
      name
      company
      phone
      total_price
      status
      id
      created_at
    }
  }
`;
