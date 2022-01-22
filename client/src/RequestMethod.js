import axios from "axios";

// const BASE_URL = "https://vu-fashion-server.vercel.app/api/";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTRkMmI1NmRhMzE4NmMwOTZiN2ZiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg0MDEwMSwiZXhwIjoxNjQzMDk5MzAxfQ.7i2Nq6NLPp6BYzU6KuW7iUF270c26lPfoUwTR7AhOEE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: "Bearer " + TOKEN },
});
