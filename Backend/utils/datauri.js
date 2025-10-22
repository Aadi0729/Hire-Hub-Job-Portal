import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    if (!file || !file.originalname || !file.buffer) {
        return null; // Return null instead of throwing an error
    }

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString().replace('.', ''); // Removing the dot

    return parser.format(extName, file.buffer);
};

export default getDataUri;
