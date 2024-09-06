import { useEffect, useState } from "react";
import CartItemComponent from "../../../components/card/cart-item";
import DashboardHeaderText from "../../../components/header/dashboard";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import ButtonComponent from "../../../components/tags/button";
import { useGetcartsQuery } from "../../../features/cart";
import { ObjectProps } from "../../../types";
import MakePaymentModalComponent from "../../../components/modals/make-payment-modal";
import { useModal } from "../../../hooks";

const CartPage = () => {
  const { data, isLoading } = useGetcartsQuery();

  const { modal, setModal } = useModal();

  console.log(data?.data?.docs);

  const [total, setTotal] = useState(0);

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

  return (
    <>
      <MakePaymentModalComponent total={total} data={data} />
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
                onClick={() => setModal({ ...modal, isOpenMakeOrder: true })}
                width="w-36"
              >
                Make Payment
              </ButtonComponent>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
