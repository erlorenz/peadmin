import React from 'react';
import styled from 'styled-components/macro';

function Checklist() {
  return (
    <Table>
      <tbody>
        <CheckListRow>
          <CheckListTableData left>Correct</CheckListTableData>
          <CheckListTableData />
        </CheckListRow>
        <CheckListRow>
          <CheckListTableData left>Added</CheckListTableData>
          <CheckListTableData />
        </CheckListRow>
        <CheckListRow>
          <CheckListTableData left>Refunded</CheckListTableData>
          <CheckListTableData />
        </CheckListRow>
        <CheckListRow>
          <CheckListTableData left>Defective</CheckListTableData>
          <CheckListTableData />
        </CheckListRow>
      </tbody>
    </Table>
  );
}

export default Checklist;

const Table = styled.table`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  width: 250px;
  height: 200px;
  color: black;
  border: 2px solid black;
  display: none;

  @media print {
    display: table;
  }
`;

const CheckListRow = styled.tr``;

const CheckListTableData = styled.td`
  padding: 1rem 1rem;
  width: 50%;
  border: 1px solid black;
`;
