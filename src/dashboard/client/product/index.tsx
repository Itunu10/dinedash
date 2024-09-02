import { useEffect, useState } from "react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { restaurantProducts } from "../../../data/product-data";
import { ObjectProps } from "../../../types";
import ItemCardComponent from "../../../components/card/item-card";
import { useGetcategoriesQuery } from "../../../features/category";
import { SectionLoader } from "../../../components/loader";
import { EmptySectionComponent } from "../../../components/placeholder/empty";
import { useGetmenusQuery } from "../../../features/menu";

const combineProductItems = (products: ObjectProps) => {
  return Object.values(products).flat();
};

const Productpage = () => {
  const allItems = combineProductItems(restaurantProducts);

  const { data: categories, isLoading: isLoadingCategory } =
    useGetcategoriesQuery();

  const { data: menus, isLoading: isLoadingMenu } = useGetmenusQuery();
  console.log(categories, menus);

  const [category, setCategory] = useState("all");
  const [_, setItems] = useState<Array<ObjectProps>>([{}]);
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
        {isLoadingCategory ? (
          <SectionLoader />
        ) : categories?.data?.docs?.length === 0 ? (
          <EmptySectionComponent title="category" />
        ) : (
          <ul className="flex gap-5 md:overflow-x-hidden  overflow-x-scroll py-5">
            {categories?.data?.docs?.map((item: ObjectProps) => {
              return (
                <li
                  onClick={() => setCategory(item?._id)}
                  role="button"
                  className={` ${
                    item?._id === category
                      ? "bg-primary-light text-black"
                      : "bg-primary-default text-white"
                  } capitalize tracking-wider hover:bg-primary-light hover:text-black duration-700 w-32 text-center   p-2 rounded-md`}
                  key={item?._id}
                >
                  <span> {item?.name}</span>
                </li>
              );
            })}
          </ul>
        )}
        <div>
          <h1 className="text-base capitalize font-semibold">
            {category} Items
          </h1>

          {isLoadingMenu ? (
            <SectionLoader />
          ) : menus?.data?.docs?.length === 0 ? (
            <EmptySectionComponent title="menu" />
          ) : (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-5">
              {menus?.data?.docs?.map((item: ObjectProps) => (
                <ItemCardComponent data={item} key={item?._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productpage;
