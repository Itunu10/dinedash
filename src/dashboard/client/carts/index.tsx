import { useEffect, useState } from "react";
import CartItemComponent from "../../../components/card/cart-item";
import DashboardHeaderText from "../../../components/header/dashboard";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import ButtonComponent from "../../../components/tags/button";
import { cartApi, useGetcartsQuery } from "../../../features/cart";
import { ObjectProps } from "../../../types";
import { useCreateorderMutation } from "../../../features/order";
import { errorHandler } from "../../../utils";
import { useCustomToast } from "../../../utils/toast";
import { useDispatch } from "react-redux";

const CartPage = () => {
  const { data, isLoading } = useGetcartsQuery();

  const [createorder, { isLoading: createorderLoading }] =
    useCreateorderMutation();
  const showToast = useCustomToast();

  const dispatch = useDispatch();

  console.log(data?.data?.docs);

  const [total, setTotal] = useState(0);

  const handleCreateOrder = async () => {
    try {
      const response = await createorder({
        items: data?.data?.docs?.map((item: ObjectProps) => ({
          item: item?.menuId?._id,
          quantity: item?.quantity,
          cartId: item?._id,
        })),

        totalPrice: total,
        address: "my address",
        // menuId: data?._id,
        // quantity: +quantity,
      });
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Products orders successfully",
        status: "success",
      });
      dispatch(cartApi.util.invalidateTags(["cart"]));
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description,
        status: "error",
      });
    }
  };

  useEffect(() => {
    if (data?.data) {
      const totalPrice = data?.data?.docs?.reduce(
        (total: number, item: ObjectProps) => {
          return total + item?.menuId?.price * item.quantity;
        },
        0
      );
      setTotal(totalPrice);
    }
  }, [data]);
  console.log(data);
  return (
    <>
      <div>
        <div className="mb-5">
          <DashboardHeaderText
            title="Cart Details"
            description="View all items added to cart"
          />
        </div>
        {isLoading ? (
          <SectionLoader />
        ) : data?.data?.docs?.length === 0 ? (
          <EmptySectionComponent title="cart" />
        ) : (
          <>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-5">
              {data?.data?.docs.map((item: ObjectProps) => (
                <CartItemComponent data={item} key={item?._id} />
              ))}
            </div>
            <div className="flex items-center justify-end gap-6">
              <h1 className="font-semibold">
                Total:
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </h1>
              <ButtonComponent
                isLoading={createorderLoading}
                onClick={handleCreateOrder}
                width="w-36"
              >
                Checkout
              </ButtonComponent>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
