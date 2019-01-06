import gql from 'graphql-tag';

export const SPECIAL_ORDERS_BY_STATUS = gql`
  query GetSpecialOrdersByStatus($status: [String!]!) {
    getSpecialOrdersByStatus(status: $status) {
      name
      company
      phone
      total_price
      status
      id
    }
  }
`;
