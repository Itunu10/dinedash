import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import {
  transactionsData,
  TransactionStatus,
} from "../../../data/transactions-data";
import DashboardHeaderText from "../../../components/header/dashboard";

const statusColors: Record<TransactionStatus, string> = {
  Pending: "bg-yellow-200",
  Completed: "bg-green-200",
  Failed: "bg-red-200",
  "In Progress": "bg-blue-200",
};

const AdminAllTransactionsPage: React.FC = () => {
  return (
    <>
      <div className="mb-5 ">
        <DashboardHeaderText
          title="Transaction Details"
          description="View all past and recent transactions"
        />
      </div>
      <div className=" md:overflow-x-hidden overflow-x-scroll ">
        <Table variant="striped" className="w-full border border-gray-300">
          <Thead>
            <Tr>
              <Th> Reference</Th>
              <Th>Order ID</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactionsData.map((transaction) => (
              <Tr key={transaction.transactionReference}>
                <Td>{transaction.transactionReference}</Td>
                <Td>{transaction.orderId}</Td>
                <Td>${transaction.amount.toFixed(2)}</Td>
                <Td>
                  <span
                    className={`px-2 py-1 rounded ${
                      statusColors[transaction.status]
                    }`}
                  >
                    {transaction.status}
                  </span>
                </Td>
                <Td>{new Date(transaction.date).toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminAllTransactionsPage;
