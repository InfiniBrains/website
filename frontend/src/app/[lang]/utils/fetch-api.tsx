import qs from "qs";
import { getStrapiURL } from "./api-helpers";
import axios from "axios";
import {headers} from "next/headers";

export interface ApiRequest {
  path: string;
  queryParams?: object;
  headers?: Record<string, string>;
}

export async function APIGet(req :ApiRequest): Promise<any> {

  try {
    if(!req.headers)
      req.headers = {};
    req.headers["Content-Type"] = "application/json";

    // Merge default and user options
    const mergedOptions: RequestInit = {
      next: { revalidate: 60 },
      headers: req.headers,
    };

    // Build request URL
    const queryString = qs.stringify(req.queryParams);
    const requestUrl = `${getStrapiURL(
        `/api${req.path}${queryString ? `?${queryString}` : ""}`
    )}`;

    console.log(requestUrl);

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
