import { createBrowserRouter } from "react-router-dom";
import { IRoute } from "../types/base";
import Layout from "../layout";

import guestRoutes from "./guest";

/**
 * Wraped routes from userRouters and guestRoutes
 * @constant {@link routes}
 * @type {IRoute[]}
 */
const routes: IRoute[] = [...guestRoutes];

/**
 * Processed routes so react-router can use defined routes
 *
 * @constant {@link routers}
 */
const RoutesMap = createBrowserRouter(
  routes.map((route) => {
    return {
      path: route.path,
      element: (
        <Layout>
          <route.element />
        </Layout>
      ),
    };
  })
);

export default RoutesMap;
