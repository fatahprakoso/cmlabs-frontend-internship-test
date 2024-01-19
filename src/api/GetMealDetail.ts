import { theMealAPI } from "../config/axios";
import { IAPIResponse } from "../types/base";

/**
 * @function {@link getMealDetail}
 * @async get detail of meal
 * @method GET
 * @returns {Promise<APIResponse>} Promise of APIResponse that represents data returned from api or error
 */
const getMealDetail = async (id: number): Promise<IAPIResponse> => {
  return await theMealAPI.get(`lookup.php?i=${id}`);
};

export { getMealDetail };
