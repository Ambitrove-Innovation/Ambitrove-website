//!  Add stripe API
import axios from "axios";

const BASE_URL: string = "";

const paymentGateWay = async () => {
  const response = await axios.get(`https://stripe/api${BASE_URL}`);

  if (response.status === 200) console.log(`Susccesful status ${response}`);
  try {
    return null;
  } catch (error) {
    console.error(`Sorry seems we something went wrong ${error}`);
  }
};

paymentGateWay();
