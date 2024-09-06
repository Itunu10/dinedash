import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import { useGettransactionsQuery } from "../../../features/transactions";
import { ObjectProps } from "../../../types";
import { formatDate, shortenText } from "../../../utils";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-200",
  completed: "bg-green-200",
  failed: "bg-red-200",
  "In Progress": "bg-blue-200",
};

const Transactionspage: React.FC = () => {
  const { data: transactions, isLoading } = useGettransactionsQuery();

  return (
    <>
      <div className="mb-5 ">
        <DashboardHeaderText
          title="Transaction Details"
          description="View your past and recent transactions"
        />
      </div>
      {isLoading ? (
        <SectionLoader />
      ) : transactions?.data?.docs?.length === 0 ? (
        <EmptySectionComponent title="transactions" />
      ) : (
        <div className=" md:overflow-x-hidden overflow-x-scroll ">
          <Table variant="striped" className="w-full border border-gray-300">
            <Thead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Payment Method</Th>

                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions?.data?.docs?.map((transaction: ObjectProps) => (
                <Tr key={transaction?._id}>
                  <Td>{shortenText(transaction?._id || "", 10)}</Td>
                  <Td>{transaction?.paymentMethod}</Td>
                  <Td>
                    ${transaction?.amount && transaction?.amount?.toFixed(2)}
                  </Td>
                  <Td>
                    <span
                      className={`px-2 py-1 rounded ${
                        statusColors[transaction.status]
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </Td>
                  <Td>
                    {transaction?.createdAt &&
                      formatDate(transaction?.createdAt)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Transactionspage;
