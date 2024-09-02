import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import ButtonComponent from "../../../components/tags/button";
import DashboardHeaderText from "../../../components/header/dashboard";
import { useGetordersQuery } from "../../../features/order";
import { ObjectProps } from "../../../types";
import { shortenText } from "../../../utils";

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-200",
  Completed: "bg-green-200",
  Cancelled: "bg-red-200",
  "In Progress": "bg-blue-200",
};

const AdminOrdersPage: React.FC = () => {
  const { data } = useGetordersQuery();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (data?.data) {
      setOrders(data?.data?.docs);
    }
  }, [data]);

  console.log(orders);

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
              <Th> ID</Th>
              <Th>Price</Th>
              <Th>Order Date</Th>
              <Th>Status</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((order: ObjectProps) => (
              <Tr key={order?._id}>
                <Td>{shortenText(order?._id, 10)}</Td>
                <Td>{order?.totalPrice}</Td>
                {/* <Td>${order.price.toFixed(2)}</Td> */}
                <Td>{new Date(order?.createdAt).toLocaleString()}</Td>
                <Td>
                  <span
                    className={`px-2 py-1 rounded ${
                      statusColors[order.status]
                    }`}
                  >
                    {order?.status}
                  </span>
                </Td>
                <Td> {shortenText(order?.createdBy?.email, 10)}</Td>
                <Td> {shortenText(order?.address, 10)}</Td>
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
