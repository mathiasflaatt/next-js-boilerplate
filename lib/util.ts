import getConfig from "next/config";

// Use this when using links, so this can be hosted behind custom proxy;
export const getBaseApiUrl = () => {
  return `${hrefPrefix()}api`;
};

// Use for asset fetching,
export const assetBase = (uri: string) => {
  if (uri.charAt(0) === "/") uri = uri.substr(1);
  let base = hrefPrefix();
  // Check if base ends with "/"  if not add an extra so we get "/s/..."
  return `${base}${base.charAt(base.length - 1) === "/" ? "" : "/"}s/${uri ?? ""}`;
};

export const hrefPrefix = () => getConfig().publicRuntimeConfig.hostUrl ?? "";
