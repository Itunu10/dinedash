import bread from "../assets/bread_1.jpg";
import baking from "../assets/baking.jpg";
import snack from "../assets/snacks_1.jpg";
import drink from "../assets/drink_1.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

export const mostOrderedProductsCatergories = [
  {
    title: "Baking",
    value: 425000,
    image: baking,
  },
  {
    title: "Bread",
    value: 745000,
    image: bread,
  },
  {
    title: "Snack",
    value: 445000,
    image: snack,
  },
  {
    title: "Drink",
    value: 455000,
    image: drink,
  },
];

export const statisticalData = [
  {
    title: "Total Products",
    value: 100,
    icon: <Icon icon="dashicons:products" />,
    bg: "bg-[#3BB247]",
  },
  {
    title: "Total Orders",
    value: 20,
    icon: <Icon icon="material-symbols:draft-orders" />,
    bg: "bg-[#3BA4B2]",
  },
  {
    title: "Total Categories",
    value: 100,
    icon: <Icon icon="tabler:category-2" />,
    bg: "bg-[#FD7E14]",
  },
  {
    title: "Total Customers",
    value: 200,
    icon: <Icon icon="ph:users-four" />,
    bg: "bg-[#609F20]",
  },
];
