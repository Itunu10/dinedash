import { Td, Tr } from "@chakra-ui/react";
import DashboardHeaderText from "../../../components/header/dashboard";
import TableLayoutComponent from "../../../components/layout/table";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import { useGetprofilesQuery } from "../../../features/auth";
import { formatDate } from "../../../utils";
import { ObjectProps } from "../../../types";

const AdminAllCustomersPage = () => {
  const { data: profiles, isLoading } = useGetprofilesQuery();
  console.log(profiles);
  return (
    <div>
      <DashboardHeaderText title="Customers" description="View all customers" />
      {isLoading ? (
        <SectionLoader />
      ) : profiles?.data?.docs?.length === 0 ? (
        <EmptySectionComponent title="customers" />
      ) : (
        <TableLayoutComponent
          headers={["Created Date", "Name", "Email", "phone", "Status"]}
        >
          {profiles?.data?.docs?.map((detail: ObjectProps) => {
            return (
              <Tr>
                <Td>{detail?.createdAt && formatDate(detail?.createdAt)}</Td>
                <Td>
                  {detail?.firstName} {detail?.lastName}
                </Td>

                <Td>{detail?.createdBy?.email}</Td>
                <Td>{detail?.createdBy?.phone}</Td>
                <Td>
                  <span
                    className={`${
                      detail?.createdBy?.status === "active"
                        ? "bg-primary-default text-white"
                        : "text-white bg=red-500"
                    } p-2 rounded-xl`}
                  >
                    {detail?.createdBy?.status}
                  </span>
                </Td>

                {/* <Td>{shortenText(detail?.description, 20)}</Td> */}
              </Tr>
            );
          })}
        </TableLayoutComponent>
      )}
    </div>
  );
};

export default AdminAllCustomersPage;
