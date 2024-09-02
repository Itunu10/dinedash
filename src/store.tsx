import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fileApi } from "./features/file";
import { orderApi } from "./features/order";
import { categoryApi } from "./features/category";
import { menuApi } from "./features/menu";
import { cartApi } from "./features/cart";
import { transactionApi } from "./features/transactions";
import { notificationApi } from "./features/notifications";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      fileApi.middleware,
      orderApi.middleware,
      categoryApi.middleware,
      menuApi.middleware,
      cartApi.middleware,
      transactionApi.middleware,
      notificationApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
