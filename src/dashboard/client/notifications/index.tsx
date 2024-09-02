import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import DashboardHeaderText from "../../../components/header/dashboard";
import {
  useGetnotificationsQuery,
  useUpdatenotificationMutation,
} from "../../../features/notifications";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import { ObjectProps } from "../../../types";
import { errorHandler, shortenText } from "../../../utils";
import { useCustomToast } from "../../../utils/toast";

const statusColors: Record<string, string> = {
  Unread: "bg-yellow-200",
  Read: "bg-green-200",
};

const NotificationsPage: React.FC = () => {
  const { data: notifications, isLoading } = useGetnotificationsQuery();

  const [updatenotification] = useUpdatenotificationMutation();
  const showToast = useCustomToast();

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await updatenotification({
        id,
        values: { isRead: true },
      });
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Notification",
        description: "Motifications marked as read",
      });
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        description,
        title: "Error",
        status: "error",
      });
    }
  };

  return (
    <>
      <div className="mb-5">
        <DashboardHeaderText
          title="Notifications"
          description="View all notifications"
        />
      </div>
      {isLoading ? (
        <SectionLoader />
      ) : notifications?.data?.docs?.length === 0 ? (
        <EmptySectionComponent title="notifications" />
      ) : (
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
              {notifications?.data.docs?.map((notification: ObjectProps) => (
                <Tr key={notification._id}>
                  <Td>{shortenText(notification._id, 10)}</Td>

                  <Td>{notification.message}</Td>

                  <Td>{new Date(notification?.createdAt).toLocaleString()}</Td>
                  <Td>
                    <span
                      className={`px-2 py-1 rounded ${
                        statusColors[notification.status]
                      }`}
                    >
                      {notification?.isRead ? (
                        <span className="bg-primary-light rounded-md text-primary-default p-2">
                          {" "}
                          read{" "}
                        </span>
                      ) : (
                        <span className="bg-red-100 rounded-md text-red-500 p-2">
                          {" "}
                          unread{" "}
                        </span>
                      )}
                    </span>
                  </Td>

                  <Td>
                    {!notification?.isRead && (
                      <Button
                        size="sm"
                        colorScheme="blue"
                        onClick={() => handleMarkAsRead(notification?._id)}
                      >
                        Mark as Read
                      </Button>
                    )}
                    {notification?.isRead && (
                      <Button size="sm" colorScheme="green">
                        Read
                      </Button>
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

export default NotificationsPage;
