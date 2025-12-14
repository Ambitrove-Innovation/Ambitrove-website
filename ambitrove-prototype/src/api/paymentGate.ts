//!  Add stripe API
import axios from "axios";

const BASE_URL: string = "https://your-backend.com/api/payment";

const paymentGateWay = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.status === 200)
      console.log(`Susccesful status ${response.data}`);

    return response.data;
  } catch (error) {
    console.error(`Sorry seems we something went wrong ${error}`);
    return null;
  }
};

paymentGateWay();
