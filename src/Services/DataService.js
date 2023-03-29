import axios from "axios";

const instance = axios.create({
  baseURL: `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getData = () => {
  return instance
    .get("/s?category=all")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getData;
