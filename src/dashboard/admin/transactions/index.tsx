import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import { useGettransactionsQuery } from "../../../features/transactions";
import { ObjectProps } from "../../../types";
import { formatDate, shortenText } from "../../../utils";
import ApprovePaymentComponent from "../../../components/modals/approve-payment-modal";
import ButtonComponent from "../../../components/tags/button";
import { useModal } from "../../../hooks";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-200",
  completed: "bg-green-200",
  failed: "bg-red-200",
  "In Progress": "bg-blue-200",
};

const AdminTransactionsPage: React.FC = () => {
  const { data: transactions, isLoading } = useGettransactionsQuery();

  const [data, setData] = useState<ObjectProps>({});

  const { modal, setModal } = useModal();

  const handleApprovePayment = (data: ObjectProps) => {
    setData(data);
    setModal({ ...modal, isOpenApprovePayment: true });
  };

  return (
    <>
      <ApprovePaymentComponent data={data} />
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
                <Th>ID</Th>
                <Th>Method</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Email</Th>
                <Th>Date</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions?.data?.docs?.map((transaction: ObjectProps) => (
                <Tr key={transaction?._id}>
                  <Td>{shortenText(transaction?._id || "", 8)}</Td>
                  <Td>{transaction?.paymentMethod}</Td>
                  <Td>
                    ${transaction?.amount && transaction?.amount?.toFixed(2)}
                  </Td>
                  <Td>
                    <span
                      className={`px-2 py-1 rounded ${
                        statusColors[transaction?.status]
                      }`}
                    >
                      {transaction?.status}
                    </span>
                  </Td>
                  <Td>
                    {transaction?.createdBy &&
                      shortenText(transaction?.createdBy?.email || "", 8)}
                  </Td>
                  <Td>
                    {transaction?.createdAt &&
                      formatDate(transaction?.createdAt)}
                  </Td>
                  <Td>
                    {transaction?.status === "pending" ? (
                      <ButtonComponent
                        onClick={() => handleApprovePayment(transaction)}
                        mode="light"
                      >
                        Approve Payment
                      </ButtonComponent>
                    ) : (
                      <ButtonComponent
                        onClick={() => handleApprovePayment(transaction)}
                      >
                        View Details
                      </ButtonComponent>
                    )}
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

export default AdminTransactionsPage;
