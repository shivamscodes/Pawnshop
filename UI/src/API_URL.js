const normalizeApiBaseUrl = (rawValue) => {
  let normalized = (rawValue || "").trim().replace(/\/+$/, "");

  if (!normalized || normalized === "/") {
    return "";
  }

  normalized = normalized.replace(/\/api\/health$/i, "/api");
  normalized = normalized.replace(/\/health$/i, "");

  if (/^https?:\/\//i.test(normalized)) {
    try {
      const url = new URL(normalized);
      url.pathname = url.pathname.replace(/\/+$/, "");
      return url.toString().replace(/\/+$/, "");
    } catch {
      return normalized;
    }
  }

  return normalized;
};

export const API_BASE_URL = normalizeApiBaseUrl(
  process.env.REACT_APP_API_BASE_URL || ""
);

const buildApiUrl = (pathName) => `${API_BASE_URL}${pathName}`;

export const __userapiurl = buildApiUrl("/user/");

export const __categoryapiurl = buildApiUrl("/category/");

export const __subcategoryapiurl = buildApiUrl("/subcategory/");

export const __addproductapiurl = buildApiUrl("/addproducts/");

export const __resetpasswordurl = buildApiUrl("/resetpassword");

export const __transactionapiurl = buildApiUrl("/transaction/");

export const __paymentapiurl = buildApiUrl("/payment");
