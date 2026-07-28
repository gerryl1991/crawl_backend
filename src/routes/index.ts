import { Router } from "express";
import { crawl } from "../controllers/crawl.controller";
import { upload } from "../controllers/upload.controller";

const router = Router();

router.post("/crawl",crawl);
router.post("/upload", upload);

export default router;
