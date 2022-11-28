import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "x-access-token": "test_jwt",
  },
};
export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonConfig,
  });
};
