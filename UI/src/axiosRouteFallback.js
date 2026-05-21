const RETRY_MARKER = "__routeStyleFallbackRetried";

const buildAbsoluteUrl = (config) => {
  const requestUrl = config.url || "";
  const baseURL = config.baseURL || window.location.origin;

  try {
    return new URL(requestUrl, baseURL);
  } catch {
    return null;
  }
};

const buildAlternateUrl = (config) => {
  const absoluteUrl = buildAbsoluteUrl(config);

  if (!absoluteUrl) {
    return null;
  }

  const currentPath = absoluteUrl.pathname.replace(/\/+$/, "") || "/";

  if (/^\/api(?:\/|$)/i.test(currentPath)) {
    absoluteUrl.pathname = currentPath.replace(/^\/api/i, "") || "/";
  } else {
    absoluteUrl.pathname =
      currentPath === "/" ? "/api" : `/api${currentPath.startsWith("/") ? currentPath : `/${currentPath}`}`;
  }

  return absoluteUrl.toString();
};

const shouldRetry = (error) => {
  if (!error || !error.config || error.config[RETRY_MARKER]) {
    return false;
  }

  if (error.response && error.response.status === 404) {
    return true;
  }

  if (!error.response && (error.code === "ERR_NETWORK" || error.message === "Network Error")) {
    return true;
  }

  return false;
};

export const attachApiRouteFallback = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!shouldRetry(error)) {
        throw error;
      }

      const alternateUrl = buildAlternateUrl(error.config);

      if (!alternateUrl) {
        throw error;
      }

      const retriedConfig = {
        ...error.config,
        baseURL: undefined,
        url: alternateUrl,
        [RETRY_MARKER]: true,
      };

      return axiosInstance.request(retriedConfig);
    }
  );
};
