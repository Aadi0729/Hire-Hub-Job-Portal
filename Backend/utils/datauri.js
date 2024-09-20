import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    if (!file || !file.originalname || !file.buffer) {
        throw new Error("Invalid file object. Ensure it has 'originalname' and 'buffer' properties.");
    }

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString().replace('.', ''); // Removing the dot
    if (!extName) {
        throw new Error("File extension could not be determined.");
    }

    try {
        return parser.format(extName, file.buffer);
    } catch (error) {
        throw new Error("Error generating Data URI: " + error.message);
    }
};

export default getDataUri;
