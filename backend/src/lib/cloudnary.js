import {v2 as cloudnary} from "cloudinary";

import { config } from "dotenv";

config();

cloudnary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudnary;