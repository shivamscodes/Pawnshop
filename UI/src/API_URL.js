export const API_BASE_URL = (
  process.env.REACT_APP_API_BASE_URL || "/api"
).replace(/\/+$/, "");

const buildApiUrl = (pathName) => `${API_BASE_URL}${pathName}`;

export const __userapiurl = buildApiUrl("/user/");

export const __categoryapiurl = buildApiUrl("/category/");

export const __subcategoryapiurl = buildApiUrl("/subcategory/");

export const __addproductapiurl = buildApiUrl("/addproducts/");

export const __resetpasswordurl = buildApiUrl("/resetpassword");

export const __transactionapiurl = buildApiUrl("/transaction/");

export const __paymentapiurl = buildApiUrl("/payment");

