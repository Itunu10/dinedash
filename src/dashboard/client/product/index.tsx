import { useEffect, useState } from "react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { restaurantProducts } from "../../../data/product-data";
import { ObjectProps } from "../../../types";
import ItemCardComponent from "../../../components/card/item-card";

const combineProductItems = (products: ObjectProps) => {
  return Object.values(products).flat();
};

const Productpage = () => {
  const allItems = combineProductItems(restaurantProducts);

  const [category, setCategory] = useState("all");
  const [items, setItems] = useState<Array<ObjectProps>>([{}]);
  useEffect(() => {
    if (category === "all") {
      setItems(allItems);
    } else {
      console.log(category);
      const filteredItems = restaurantProducts[category];
      console.log(filteredItems);
      setItems(filteredItems);
    }
  }, [category]);

  return (
    <div>
      <DashboardHeaderText
        title="Products"
        description=" Discover our delicious range of appetizers, main courses, and desserts perfect for any occasion."
      />
      <div className="my-4">
        <h1 className="text-base font-semibold">Food Items Category</h1>
        <ul className="flex gap-5 md:overflow-x-hidden  overflow-x-scroll py-5">
          {Object.keys(restaurantProducts).map((item) => {
            return (
              <li
                onClick={() => setCategory(item)}
                role="button"
                className={` ${
                  item === category
                    ? "bg-primary-light text-black"
                    : "bg-primary-default text-white"
                } capitalize tracking-wider hover:bg-primary-light hover:text-black duration-700 w-32 text-center   p-2 rounded-md`}
                key={item}
              >
                <span> {item}</span>
              </li>
            );
          })}
        </ul>
        <div>
          <h1 className="text-base capitalize font-semibold">
            {category} Items
          </h1>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-5">
            {items.map((item, index) => (
              <ItemCardComponent data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
