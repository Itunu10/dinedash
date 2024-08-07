export type NotificationStatus = "Unread" | "Read";

interface Notification {
  status: NotificationStatus;
  message: string;
  notificationId: string;
  date: string; // ISO date string
}

export const notificationsData: Notification[] = [
  {
    status: "Unread",
    message: "New order received.",
    notificationId: "notif-001",
    date: "2024-08-01T08:00:00Z",
  },
  {
    status: "Read",
    message: "Order #12345 has been completed.",
    notificationId: "notif-002",
    date: "2024-08-01T09:00:00Z",
  },
  {
    status: "Unread",
    message: "New user signed up.",
    notificationId: "notif-003",
    date: "2024-08-01T10:00:00Z",
  },
  {
    status: "Read",
    message: "Your profile has been updated.",
    notificationId: "notif-004",
    date: "2024-08-01T11:00:00Z",
  },
  {
    status: "Unread",
    message: "Password change request.",
    notificationId: "notif-005",
    date: "2024-08-01T12:00:00Z",
  },
  {
    status: "Read",
    message: "New comment on your post.",
    notificationId: "notif-006",
    date: "2024-08-01T13:00:00Z",
  },
  {
    status: "Unread",
    message: "System maintenance scheduled.",
    notificationId: "notif-007",
    date: "2024-08-01T14:00:00Z",
  },
  {
    status: "Read",
    message: "Your subscription is about to expire.",
    notificationId: "notif-008",
    date: "2024-08-01T15:00:00Z",
  },
  {
    status: "Unread",
    message: "New feature released!",
    notificationId: "notif-009",
    date: "2024-08-01T16:00:00Z",
  },
  {
    status: "Read",
    message: "Weekly report is ready.",
    notificationId: "notif-010",
    date: "2024-08-01T17:00:00Z",
  },
  {
    status: "Unread",
    message: "Server downtime notice.",
    notificationId: "notif-011",
    date: "2024-08-01T18:00:00Z",
  },
  {
    status: "Read",
    message: "Welcome to our service!",
    notificationId: "notif-012",
    date: "2024-08-01T19:00:00Z",
  },
  {
    status: "Unread",
    message: "New update available.",
    notificationId: "notif-013",
    date: "2024-08-01T20:00:00Z",
  },
  {
    status: "Read",
    message: "Your payment was successful.",
    notificationId: "notif-014",
    date: "2024-08-01T21:00:00Z",
  },
  {
    status: "Unread",
    message: "Security alert: Unusual login detected.",
    notificationId: "notif-015",
    date: "2024-08-01T22:00:00Z",
  },
];
