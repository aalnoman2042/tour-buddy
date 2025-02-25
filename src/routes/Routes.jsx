import { createHashRouter } from "react-router-dom"
import Main from "../layout/Main";
import GuideProfile from "../pages/GuideProfile";
import PaymentPage from "../pages/PaymentPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <GuideProfile></GuideProfile>,
      },
      {
        path: "/payment",
        element: <PaymentPage></PaymentPage>,
      },
    ],
  },
]);
