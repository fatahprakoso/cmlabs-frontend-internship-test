import { lazy } from "react";
import { IRoute } from "../../types/base";
import Home from "../../pages/home";

/**
 * this array represents route of guest actor (actor that's not authenticated)
 *
 * this data represented with array of Router @see {@link IRoute}
 *
 * @constant {@link guestRoutes}
 * @type {IRoute[]}
 */
const guestRoutes: IRoute[] = [
  {
    name: "homepage",
    path: "/",
    element: lazy(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      return { default: () => <Home /> };
    }),
  },
  {
    name: "meals by category",
    path: "/meals",
    element: lazy(() => import("../../pages/mealsList")),
  },
  {
    name: "meal detail",
    path: "/meal/:id",
    element: lazy(() => import("../../pages/mealDetail")),
  },
];

export default guestRoutes;
