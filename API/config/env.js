import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const envFilePath = path.resolve(__dirname, "../.env");

const stripWrappingQuotes = (value) => {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
};

const loadEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = stripWrappingQuotes(line.slice(separatorIndex + 1).trim());

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
};

const normalizeUrl = (value, fallback = "") => {
  const resolved = (value || fallback).trim();
  return resolved.replace(/\/+$/, "");
};

const splitOrigins = (value) =>
  value
    .split(",")
    .map((origin) => normalizeUrl(origin))
    .filter(Boolean);

loadEnvFile(envFilePath);

export const config = {
  isVercel: process.env.VERCEL === "1",
  port: Number(process.env.PORT || 3001),
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pawnshop",
  clientUrl: normalizeUrl(process.env.CLIENT_URL, "http://localhost:3000"),
  allowedOrigins: splitOrigins(
    process.env.ALLOWED_ORIGINS || process.env.CLIENT_URL || "http://localhost:3000"
  ),
  jwtSecret: process.env.JWT_SECRET || "",
  openAiApiKey: process.env.OPENAI_API_KEY || "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || "",
  smtpService: process.env.SMTP_SERVICE || "gmail",
  smtpUser: process.env.SMTP_USER || "",
  smtpPass: process.env.SMTP_PASS || "",
  mailFrom: process.env.MAIL_FROM || process.env.SMTP_USER || "",
  allowVercelPreviewOrigins: process.env.ALLOW_VERCEL_PREVIEW_ORIGINS !== "false",
  enableLocalUploads:
    process.env.ENABLE_LOCAL_UPLOADS !== "false" && process.env.VERCEL !== "1",
  uploadRoot: path.resolve(__dirname, "../../UI/public/assets/uploads"),
};

export const isAllowedOrigin = (origin) => {
  const normalizedOrigin = normalizeUrl(origin);

  if (!normalizedOrigin) {
    return true;
  }

  if (config.allowedOrigins.includes(normalizedOrigin)) {
    return true;
  }

  if (/^https?:\/\/localhost(?::\d+)?$/i.test(normalizedOrigin)) {
    return true;
  }

  if (
    config.allowVercelPreviewOrigins &&
    /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(normalizedOrigin)
  ) {
    return true;
  }

  return false;
};

export const requireConfig = (value, message) => {
  if (!value) {
    const error = new Error(message);
    error.statusCode = 500;
    throw error;
  }

  return value;
};
