const normalizeApiBaseUrl = (rawValue) => {
  let normalized = (rawValue || "/api").trim().replace(/\/+$/, "");

  if (!normalized) {
    return "/api";
  }

  // Guard against accidentally using health-check URLs as the API base.
  if (normalized === "/") {
    return "";
  }

  normalized = normalized.replace(/\/health$/i, "");
  normalized = normalized.replace(/\/api\/health$/i, "/api");

  if (!normalized || normalized === "/") {
    return "";
  }

  // Keep absolute URLs exactly as provided after cleanup.
  if (/^https?:\/\//i.test(normalized)) {
    try {
      const url = new URL(normalized);
      const cleanPath = url.pathname.replace(/\/+$/, "");

      if (!cleanPath || cleanPath === "/") {
        url.pathname = "";
      } else if (/\/health$/i.test(cleanPath)) {
        url.pathname = cleanPath.replace(/\/health$/i, "");
      } else {
        url.pathname = cleanPath;
      }

      return url.toString().replace(/\/+$/, "");
    } catch {
      return normalized;
    }
  }

  return normalized;
};

export const API_BASE_URL = normalizeApiBaseUrl(
  process.env.REACT_APP_API_BASE_URL || "/api"
);

const buildApiUrl = (pathName) => `${API_BASE_URL}${pathName}`;

export const __userapiurl = buildApiUrl("/user/");

export const __categoryapiurl = buildApiUrl("/category/");

export const __subcategoryapiurl = buildApiUrl("/subcategory/");

export const __addproductapiurl = buildApiUrl("/addproducts/");

export const __resetpasswordurl = buildApiUrl("/resetpassword");

export const __transactionapiurl = buildApiUrl("/transaction/");

export const __paymentapiurl = buildApiUrl("/payment");

