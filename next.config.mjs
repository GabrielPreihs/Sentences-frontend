/** @type {import('next').NextConfig} */
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const json = require("./package.json");
const nextConfig = {
  publicRuntimeConfig: {
        version: json.version,
    },
};

export default nextConfig;
