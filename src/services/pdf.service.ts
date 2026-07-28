import axios from "axios";

import { config } from "../config/config";

export async function downloadPdf(link: string) {
  const response = await axios.get(
    `${config.baseUrl}${link}`,
    {
      responseType: "stream",
      headers: {
        "User-Agent": config.userAgent,
      },
    }
  );

  return response.data;
}
