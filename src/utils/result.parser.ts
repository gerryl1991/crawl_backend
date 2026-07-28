import * as cheerio from "cheerio";

export interface CrawlResult {
  submitter: string;
  date: string;
  link: string;
  label: string;
}

export function extractResults(html: string): CrawlResult[] {
  const $ = cheerio.load(html);

  const records: CrawlResult[] = [];

  $("table tbody tr").each((_, row) => {
    const tr = $(row);

    const submitter = tr
      .find("td.col-md-2")
      .text()
      .trim();

    const date = tr
      .find("td.nowrap")
      .text()
      .trim();

    const linkElement = tr
      .find("td.nopadding summary a")
      .first();

    const link = linkElement.attr("href") || "";

    const label = linkElement
      .text()
      .trim();


    if (submitter || date || link || label) {
      records.push({
        submitter,
        date,
        link,
        label,
      });
    }
  });

  return records;
}
