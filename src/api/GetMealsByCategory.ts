import { theMealAPI } from "../config/axios";
import { IAPIResponse } from "../types/base";

/**
 * @function {@link getMealByCategory}
 * @async get all meal on spesific category
 * @method GET
 * @returns {Promise<APIResponse>} Promise of APIResponse that represents data returned from api or error
 */
const getMealByCategory = async (category: string): Promise<IAPIResponse> => {
  return await theMealAPI.get(`filter.php?c=${category}`);
};

export { getMealByCategory };
