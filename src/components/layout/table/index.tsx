import { Table, TableContainer, Tbody, Thead, Th } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const TableLayoutComponent: React.FC<{
  children: ReactNode;
  headers: Array<string>;
}> = ({ children, headers }) => {
  return (
    <TableContainer className="border rounded-md">
      <Table variant="striped">
        <Thead className="bg-gay-50">
          {headers.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Thead>
        <Tbody className="text-sm text-gray-600">{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableLayoutComponent;
