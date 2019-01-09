import React from 'react';
import styled from 'styled-components/macro';

const StatusIndicator = ({ status }) => {
  console.log(status);
  switch (status) {
    case 'processed':
      return <PurpleBadge>Processed</PurpleBadge>;

    case 'picked_up':
      return <BlueBadge>Picked Up</BlueBadge>;

    case 'checked_in':
      return <PinkBadge>Checked In</PinkBadge>;

    case 'out_for_delivery':
      return <TurquoiseBadge>Out For Delivery</TurquoiseBadge>;

    case 'cancelled':
      return <RedBadge>Cancelled</RedBadge>;

    case 'exception':
      return <OrangeBadge>Exception</OrangeBadge>;

    case 'completed':
      return <GreenBadge>Completed</GreenBadge>;

    default:
      return <Badge>XXXX</Badge>;
  }
};

export default StatusIndicator;

const Badge = styled.label`
  color: white;
  background-color: lightgray;
  padding: 0.3rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
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
  background-color: #01cfc9;
`;
