import axios from "axios";

const instance = axios.create({
  baseURL: `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getData = async () => {
  try {
    const response = await instance.get("/s?category=all");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export default getData;
