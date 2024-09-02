import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import ButtonComponent from "../../../components/tags/button";
import DashboardHeaderText from "../../../components/header/dashboard";
import { useGetorderQuery, useGetordersQuery } from "../../../features/order";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import { ObjectProps } from "../../../types";
import { shortenText } from "../../../utils";
import { useProduct } from "../../../hooks";

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-200",
  Completed: "bg-green-200",
  Cancelled: "bg-red-200",
  "In Progress": "bg-blue-200",
};

const OrderPage: React.FC = () => {
  const { data, isLoading } = useGetordersQuery();

  const [id, setId] = useState("");

  const { data: order } = useGetorderQuery(id, {
    skip: id === "",
  });

  console.log(id);

  const { data: product, setData } = useProduct();

  useEffect(() => {
    if (order?.data) {
      setData(order?.data);
    }
  }, [order]);

  console.log(product);

  console.log(data);
  return (
    <div className="">
      <div className="mb-5">
        <DashboardHeaderText
          title="Order Details"
          description="View your past and recent orders"
        />
      </div>
      {isLoading ? (
        <SectionLoader />
      ) : data?.data?.docs?.length === 0 ? (
        <EmptySectionComponent title="order" />
      ) : (
        <div className=" md:overflow-x-hidden overflow-x-scroll">
          <Table variant="striped" className="w-full border border-gray-300">
            <Thead>
              <Tr>
                <Th> ID</Th>
                <Th>Price</Th>
                <Th>Order Date</Th>
                <Th>Status</Th>
                <Th>Location</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.data?.docs.map((order: ObjectProps) => (
                <Tr key={order?._id}>
                  <Td>{shortenText(order?._id, 10)}</Td>
                  <Td>${order?.totalPrice?.toFixed(2)}</Td>
                  <Td>{new Date(order?.createdAt).toLocaleString()}</Td>
                  <Td>
                    <span
                      className={`px-2 py-1 rounded ${
                        statusColors[order?.status]
                      }`}
                    >
                      {order?.status}
                    </span>
                  </Td>
                  <Td>{shortenText(order?.address, 10)}</Td>
                  <Td>
                    <ButtonComponent
                      onClick={() => {
                        setId(order?._id);
                      }}
                      mode="light"
                    >
                      view{" "}
                    </ButtonComponent>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
