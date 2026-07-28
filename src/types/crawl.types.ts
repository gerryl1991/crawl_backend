export interface CrawlRequest {

    dateRange: [
        string,
        string
    ];

    applicationType: number[];

}



export interface CrawlResponse {

    success: boolean;

    data?: unknown;

    message?: string;

}
