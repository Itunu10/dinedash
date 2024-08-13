import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import {
  notificationsData,
  NotificationStatus,
} from "../../../data/notifications-data";
import DashboardHeaderText from "../../../components/header/dashboard";

const statusColors: Record<NotificationStatus, string> = {
  Unread: "bg-yellow-200",
  Read: "bg-green-200",
};

const AdminNotificationsPage: React.FC = () => {
  const handleMarkAsRead = (notificationId: string) => {
    // Implement the logic to mark the notification as read
    console.log(`Marking notification ${notificationId} as read`);
  };

  return (
    <>
      <div className="mb-5">
        <DashboardHeaderText
          title="Notifications"
          description="View all notifications"
        />
      </div>
      <div className=" md:overflow-x-hidden overflow-x-scroll">
        <Table variant="striped" className="w-full border border-gray-300">
          <Thead>
            <Tr>
              <Th> ID</Th>

              <Th>Message</Th>

              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {notificationsData.map((notification) => (
              <Tr key={notification.notificationId}>
                <Td>{notification.notificationId}</Td>

                <Td>{notification.message}</Td>

                <Td>{new Date(notification.date).toLocaleString()}</Td>
                <Td>
                  <span
                    className={`px-2 py-1 rounded ${
                      statusColors[notification.status]
                    }`}
                  >
                    {notification.status}
                  </span>
                </Td>

                <Td>
                  {notification.status === "Unread" && (
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() =>
                        handleMarkAsRead(notification.notificationId)
                      }
                    >
                      Mark as Read
                    </Button>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminNotificationsPage;
