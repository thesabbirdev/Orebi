import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlice from "./slices/breadcrumbSlice";
import singleSlice from "./slices/singleSlice";

export default configureStore({
  reducer: {
    breadcrumb: breadcrumbSlice,
    singleproduct: singleSlice,
  },
});
