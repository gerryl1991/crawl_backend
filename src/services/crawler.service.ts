import axios from "axios";
import * as cheerio from "cheerio";

import { config } from "../config/config";
import { CrawlRequest } from "../types/crawl.types";
import { extractResults } from "../utils/result.parser";

export async function crawlCER(filters: CrawlRequest) {

  const params = {
    sd: filters.dateRange[0],
    ed: filters.dateRange[1],
    rds: filters.applicationType.join(","),
    sr: 1,
    _: Date.now(),
  };


  const response = await axios.get(
    config.cerUrl,
    {
      headers: {
        "User-Agent": config.userAgent,
      },
      params,
    }
  );


  const $ = cheerio.load(response.data);


  const ajaxUrl =
    $("#section-results")
      .attr("data-ajax-replace");

  if (!ajaxUrl) {
    return {
      records: []
    };
  }

  const result = await axios.get(
    `${config.baseUrl + ajaxUrl}`,
    {
      headers: {
        "User-Agent": config.userAgent,
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );


  const records = extractResults(result.data);


  return {
    records
  };
}
