import CartItemComponent from "../../../components/card/cart-item";
import DashboardHeaderText from "../../../components/header/dashboard";
import ButtonComponent from "../../../components/tags/button";
import { cartData } from "../../../data/cart-data";

const CartPage = () => {
  return (
    <>
      <div>
        <div className="mb-5">
          <DashboardHeaderText
            title="Cart Details"
            description="View all items added to cart"
          />
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-5">
          {cartData.map((item, index) => (
            <CartItemComponent data={item} key={index} />
          ))}
        </div>
        <div className="flex items-center justify-end gap-6">
          <h1 className="font-semibold">
            Total: $
            {Math.ceil(cartData.reduce((acc, item) => acc + item.price, 0))}
          </h1>
          <ButtonComponent width="w-36">Checkout</ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default CartPage;
