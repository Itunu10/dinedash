export type OrderStatus = "Pending" | "Completed" | "Cancelled" | "In Progress";
type Category =
  | "Fruits"
  | "Drinks"
  | "Snacks"
  | "Bread"
  | "Baking"
  | "Coffee"
  | "Spices";

interface RestaurantOrder {
  status: OrderStatus;
  category: Category;
  orderId: string;
  price: number;
  orderDate: string; // ISO date string
  location: string;
}

export const orderData: RestaurantOrder[] = [
  {
    status: "Pending",
    category: "Fruits",
    orderId: "12345",
    price: 25.99,
    orderDate: "2024-08-01T12:34:56Z",
    location: "New York",
  },
  {
    status: "Completed",
    category: "Drinks",
    orderId: "12346",
    price: 9.99,
    orderDate: "2024-08-01T13:00:00Z",
    location: "Los Angeles",
  },
  {
    status: "In Progress",
    category: "Snacks",
    orderId: "12347",
    price: 15.49,
    orderDate: "2024-08-01T14:20:00Z",
    location: "Chicago",
  },
  {
    status: "Cancelled",
    category: "Bread",
    orderId: "12348",
    price: 7.99,
    orderDate: "2024-08-01T15:30:00Z",
    location: "Houston",
  },
  {
    status: "Pending",
    category: "Fruits",
    orderId: "12345",
    price: 25.99,
    orderDate: "2024-08-01T12:34:56Z",
    location: "New York",
  },
  {
    status: "Completed",
    category: "Drinks",
    orderId: "12346",
    price: 9.99,
    orderDate: "2024-08-01T13:00:00Z",
    location: "Los Angeles",
  },
  {
    status: "In Progress",
    category: "Snacks",
    orderId: "12347",
    price: 15.49,
    orderDate: "2024-08-01T14:20:00Z",
    location: "Chicago",
  },
  {
    status: "Cancelled",
    category: "Bread",
    orderId: "12348",
    price: 7.99,
    orderDate: "2024-08-01T15:30:00Z",
    location: "Houston",
  },
  // Add more orders as needed
];
