import React from 'react';
import styled from 'styled-components/macro';

const StatusIndicator = ({ status, ...props }) => {
  switch (status) {
    case 'processed':
      return <PinkBadge {...props}>Processed</PinkBadge>;

    case 'picked_up':
      return <PurpleBadge {...props}>Picked Up</PurpleBadge>;

    case 'checked_in':
      return <BlueBadge {...props}>Checked In</BlueBadge>;

    case 'out_for_delivery':
      return <TurquoiseBadge {...props}>Out For Delivery</TurquoiseBadge>;

    case 'cancelled':
      return <RedBadge {...props}>Cancelled</RedBadge>;

    case 'exception':
      return <OrangeBadge {...props}>Exception</OrangeBadge>;

    case 'completed':
      return <GreenBadge {...props}>Completed</GreenBadge>;

    default:
      return <Badge {...props}>XXXX</Badge>;
  }
};

export default StatusIndicator;

const Badge = styled.label`
  color: white;
  background-color: lightgray;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
  width: 125px;
  display: inline-block;
  text-align: center;
  font-size: 0.8rem;
`;

const PurpleBadge = styled(Badge)`
  background-color: #ab8ce4;
`;

const GreenBadge = styled(Badge)`
  background-color: #00c292;
`;

const OrangeBadge = styled(Badge)`
  background-color: #ffb463;
`;

const PinkBadge = styled(Badge)`
  background-color: #e781b9;
`;

const BlueBadge = styled(Badge)`
  background-color: #6c99ff;
`;

const RedBadge = styled(Badge)`
  background-color: #ff7a7a;
`;

const TurquoiseBadge = styled(Badge)`
  background-color: #02c7c2;
`;
