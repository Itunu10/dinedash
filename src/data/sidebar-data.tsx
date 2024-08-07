import { Icon } from "@iconify/react/dist/iconify.js";

export const sidebarData = {
  clients: [
    {
      name: "Products",
      link: "products",
      icon: <Icon icon="gridicons:product-virtual" />,
    },
    {
      name: "Orders",
      link: "order",
      icon: <Icon icon="material-symbols:draft-orders-outline-rounded" />,
    },
    {
      name: "Carts",
      link: "cart",
      icon: <Icon icon="mdi:cart-outline" />,
    },
    {
      name: "Notifications",
      link: "notifications",
      icon: <Icon icon="material-symbols:notifications-outline" />,
    },
    {
      name: "Transactions",
      link: "transactions",
      icon: <Icon icon="fluent:wallet-32-regular" />,
    },
  ],
  admin: [],
};
