import { ComponentType, LazyExoticComponent } from "react";

/**
 *
 * represents a single browser route of this website
 *
 * @interface {@link Router}
 * @example <caption>example represent of implemented interface on object</caption>
 * const homePage: Router = {path: "/home", element: lazy(() => import("../pages/home"))}
 *
 */
interface IRoute {
  /**
   * route name
   */
  name: string;

  /**
   * path for web router
   */
  path: string;

  /**
   * components that will represented to browser depend on defined path
   */
  element: LazyExoticComponent<ComponentType>;
}

export default IRoute;
