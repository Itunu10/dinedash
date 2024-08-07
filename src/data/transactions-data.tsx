export type TransactionStatus =
  | "Pending"
  | "Completed"
  | "Failed"
  | "In Progress";

interface Transaction {
  transactionReference: string;
  orderId: string;
  amount: number;
  status: TransactionStatus;
  date: string; // ISO date string
}

export const transactionsData: Transaction[] = [
  {
    transactionReference: "TRX12345",
    orderId: "ORD12345",
    amount: 50.75,
    status: "Pending",
    date: "2024-08-01T12:34:56Z",
  },
  {
    transactionReference: "TRX12346",
    orderId: "ORD12346",
    amount: 100.5,
    status: "Completed",
    date: "2024-08-01T13:00:00Z",
  },
  {
    transactionReference: "TRX12347",
    orderId: "ORD12347",
    amount: 75.0,
    status: "Failed",
    date: "2024-08-01T14:20:00Z",
  },
  {
    transactionReference: "TRX12348",
    orderId: "ORD12348",
    amount: 25.0,
    status: "In Progress",
    date: "2024-08-01T15:30:00Z",
  },
  // Add more transactions as needed
];
