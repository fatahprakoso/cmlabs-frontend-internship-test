import { theMealAPI } from "../config/axios";
import { IAPIResponse } from "../types/base";

/**
 * @function {@link getCategories}
 * @async get all meal category
 * @method GET
 * @returns {Promise<APIResponse>} Promise of APIResponse that represents data returned from api or error
 */
const getCategories = async (): Promise<IAPIResponse> => {
  return await theMealAPI.get("categories.php");
};

export { getCategories };
