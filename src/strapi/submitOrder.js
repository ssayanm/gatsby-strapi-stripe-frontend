import axios from "axios";
// import url from "../utils/URL";

const submitOrder = async ({
  name,
  total,
  items,
  stripeTokenId,
  userToken,
}) => {
  const response = await axios
    .post(
      `${process.env.GATSBY_API_URL}/orders`,
      {
        name,
        total,
        items,
        stripeTokenId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
};

export default submitOrder;
