import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

/**
 * implemented AxiosBase interface for fakeAPI
 *
 * @constant {@link fakeApiConfig}
 * @see {@link https://fakestoreapi.com/ fakeAPIDocs} for api documentations
 */
const theMealDBAPIConfig: CreateAxiosDefaults = {
  baseURL: "https://themealdb.com/api/json/v1/1/",
  timeout: 10000,
};

/**
 * ready to use The Meal DB API
 *
 * @constant {@link fakeApi}
 * @type {AxiosInstance}
 */
const theMealAPI: AxiosInstance = axios.create(theMealDBAPIConfig);

export { theMealAPI };
