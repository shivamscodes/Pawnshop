import fs from "fs";
import path from "path";

import { config } from "../config/env.js";

export const assertLocalUploadsEnabled = () => {
  if (config.enableLocalUploads) {
    return;
  }

  const error = new Error(
    "File uploads are disabled in this environment. Vercel needs external storage such as Vercel Blob, S3, or Cloudinary for uploads to persist."
  );
  error.statusCode = 503;
  throw error;
};

export const buildUploadFilePath = (folderName, fileName) => {
  const filePath = path.join(config.uploadRoot, folderName, fileName);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  return filePath;
};
