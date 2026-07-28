import { Request, Response } from "express";
import { uploadDocuments } from "../services/upload.service";

export async function upload(req: Request, res: Response) {
  const result = await uploadDocuments(req.body.records);
  res.json(result);
}
