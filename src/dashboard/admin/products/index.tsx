import DashboardHeaderText from "../../../components/header/dashboard";
import ButtonComponent from "../../../components/tags/button";
import { useModal } from "../../../hooks";
import { useGetcategoriesQuery } from "../../../features/category";
import { Td, Tr } from "@chakra-ui/react";
import TableLayoutComponent from "../../../components/layout/table";
import { formatDate, shortenText } from "../../../utils";
import { ObjectProps } from "../../../types";
import { useGetmenusQuery } from "../../../features/menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";

const ActionButtonComponent: React.FC<{
  data: ObjectProps;
  type: string;
}> = ({ data, type }) => {
  const navigate = useNavigate();
  const { modal, setModal } = useModal();
  console.log(data);

  const handleRename = () => {
    navigate(`?type=${type}&id=${data?._id}&name=${data?.name}`);
    setModal({ ...modal, isOpenRename: true });
  };

  const handleDelete = () => {
    navigate(`?type=${type}&id=${data?._id}`);
    setModal({ ...modal, isOpenDelete: true });
  };
  return (
    <div
      role="button"
      className="flex items-center gap-2 text-gray-700 text-base"
    >
      <Icon onClick={handleRename} icon="tabler:edit" />
      <Icon onClick={handleDelete} icon="ic:outline-delete" />
    </div>
  );
};

const AdminProductsPage = () => {
  const { modal, setModal } = useModal();

  const { data: categories, isLoading: isLoadingCategory } =
    useGetcategoriesQuery();
  const { data: menus, isLoading: isLoadingMenu } = useGetmenusQuery();
  console.log(menus);

  return (
    <div>
      <div className="mb-5">
        <DashboardHeaderText
          title="Products"
          description="View all products categories"
        />
        <div className="flex my-3 items-center justify-between">
          <h1 className="capitalize text-gray-700">Categories</h1>
          <ButtonComponent
            onClick={() => {
              setModal({ ...modal, isOpenAddCategory: true });
            }}
            width="md:w-40 "
          >
            Add Category
          </ButtonComponent>
        </div>
        {isLoadingCategory ? (
          <SectionLoader />
        ) : categories?.data?.docs?.length === 0 ? (
          <EmptySectionComponent title="category" />
        ) : (
          <TableLayoutComponent
            headers={[
              "Created Date",
              "Category ID",
              "Name",
              "Image",
              "Description",
              "Action",
            ]}
          >
            {categories?.data?.docs?.map((detail: ObjectProps) => {
              return (
                <Tr>
                  <Td>{detail?.createdAt && formatDate(detail?.createdAt)}</Td>
                  <Td>{detail?._id}</Td>

                  <Td>{detail?.name}</Td>
                  <Td>
                    <div className="w-10 bg-gray-200 h-10 overflow-hidden rounded-full">
                      <img
                        className="w-full h-full object-cover"
                        alt={detail?.name}
                        src={detail?.image?.url}
                      />
                    </div>
                  </Td>
                  <Td>{shortenText(detail?.description, 20)}</Td>

                  <Td>
                    <ActionButtonComponent data={detail} type="category" />
                  </Td>
                </Tr>
              );
            })}
          </TableLayoutComponent>
        )}
      </div>{" "}
      <div className="mb-5">
        <div className="flex my-3 items-center justify-between">
          <h1 className="capitalize text-gray-700">Menus</h1>
          <ButtonComponent
            onClick={() => {
              setModal({ ...modal, isOpenAddMenu: true });
            }}
            width="md:w-40 "
          >
            Add Menu
          </ButtonComponent>
        </div>

        {isLoadingMenu ? (
          <SectionLoader />
        ) : menus?.data?.docs?.length === 0 ? (
          <EmptySectionComponent title="menu" />
        ) : (
          <TableLayoutComponent
            headers={[
              "Created Date",
              "Ingredients",
              "Name",
              "Image",
              "Description",
              "Action",
            ]}
          >
            {menus?.data?.docs?.map((detail: ObjectProps) => {
              return (
                <Tr>
                  <Td>{detail?.createdAt && formatDate(detail?.createdAt)}</Td>
                  <Td>{shortenText(detail?.ingredients?.join(" , "), 30)}</Td>

                  <Td>{detail?.name}</Td>
                  <Td>
                    <div className="w-10 bg-gray-200 h-10 overflow-hidden rounded-full">
                      <img
                        className="w-full h-full object-cover"
                        alt={detail?.name}
                        src={detail?.image?.url}
                      />
                    </div>
                  </Td>
                  <Td>{shortenText(detail?.description, 20)}</Td>

                  <Td>
                    <ActionButtonComponent data={detail} type="menu" />
                  </Td>
                </Tr>
              );
            })}
          </TableLayoutComponent>
        )}
      </div>{" "}
    </div>
  );
};

export default AdminProductsPage;
