import axios from "axios";
// import url from "../utils/URL";

const loginUser = async ({ email, password }) => {
  const response = await axios
    .post(`${process.env.GATSBY_API_URL}/auth/local`, {
      identifier: email,
      password,
    })
    .catch((error) => console.log(error));
  return response;
};

export default loginUser;
