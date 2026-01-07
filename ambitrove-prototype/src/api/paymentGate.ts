//!  Add stripe API
import axios from "axios";

const BASE_URL: string = "https://your-backend.com/api/payment";

const paymentGateWay = async () => {
  try {
    const response = await axios.get(BASE_URL);

    const data = await response;
    if (response.status === 200)
      console.log(`Susccesful status ${data}`);

    return response.data;
  } catch (err) {
    console.error(`Sorry seems we something went wrong ${err}`);
    return null;
  }
};

paymentGateWay();
