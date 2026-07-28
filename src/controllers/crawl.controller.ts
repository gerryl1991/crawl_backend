import { Request, Response } from "express";
import { crawlCER } from "../services/crawler.service";
import { CrawlRequest } from "../types/crawl.types";

export async function crawl(req: Request, res: Response) {

    try {

        const body = req.body as CrawlRequest;
        const result = await crawlCER(body);

        res.json({
            success:true,
            data:result
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:
            error instanceof Error
                ? error.message
                : "Unknown error"
        });
    }
}
