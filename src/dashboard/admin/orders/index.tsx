import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { orderData, OrderStatus } from "../../../data/order-data";
import ButtonComponent from "../../../components/tags/button";
import DashboardHeaderText from "../../../components/header/dashboard";

const statusColors: Record<OrderStatus, string> = {
  Pending: "bg-yellow-200",
  Completed: "bg-green-200",
  Cancelled: "bg-red-200",
  "In Progress": "bg-blue-200",
};

const AdminOrdersPage: React.FC = () => {
  return (
    <div className="">
      <div className="mb-5">
        <DashboardHeaderText
          title="Order Details"
          description="View all past and recent orders"
        />
      </div>
      <div className=" md:overflow-x-hidden overflow-x-scroll">
        <Table variant="striped" className="w-full border border-gray-300">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th> ID</Th>
              <Th>Price</Th>
              <Th>Order Date</Th>
              <Th>Status</Th>
              <Th>Email</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderData.map((order) => (
              <Tr key={order.orderId}>
                <Td>{order.category}</Td>
                <Td>{order.orderId}</Td>
                <Td>${order.price.toFixed(2)}</Td>
                <Td>{new Date(order.orderDate).toLocaleString()}</Td>
                <Td>
                  <span
                    className={`px-2 py-1 rounded ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </Td>
                <Td>{order.location}</Td>
                <Td>
                  <ButtonComponent mode="light">Dispute</ButtonComponent>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminOrdersPage;
