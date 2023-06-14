import qs from "qs";
import { getStrapiURL } from "./api-helpers";
import axios from "axios";
import {headers} from "next/headers";

export interface ApiRequest {
  path: string;
  queryParams?: object;
  headers?: object;
}

export async function APIGet(req :ApiRequest ): Promise<any> {

  const requestUrl = `${getStrapiURL(
      `/api${req.path}${req.queryParams ? `?${qs.stringify(req.queryParams)}` : ""}`
  )}`

  console.log(requestUrl);

  try {
    const response = await fetch(requestUrl, req.headers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}
