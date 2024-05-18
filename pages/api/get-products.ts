const WooCommerceRestApi = require("woocommerce-rest-ts-api").default;

const api = new WooCommerceRestApi({
  url: "https://hoanglongamthanhso.com",
  consumerKey: "ck_f3dc21f71cababb062e18629bfaa4191ddfe5023",
  consumerSecret: "cs_adc3fbd326b33e9472b0cf8902df894efe2ae3bb",
  version: "wc/v3",
  queryStringAuth: false, // Force Basic Authentication as query string true and using under HTTPS
});

export const getProductsData = async (perPage = 50) => {
  return await api.get("products", {
    per_page: perPage || 50,
  });
};

export const getProductsCategories = async () => {
	return await api.get("products/categories");
  };
export default async function handler(req, res) {
  const responseData = {
    success: false,
    products: [],
  };
  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 50,
    });

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {
    res.status(500).json(responseData);
  }
}
