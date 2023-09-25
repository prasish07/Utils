import path from "path";
import { fileURLToPath } from "url";
export const dirName = () => {
    const __filename = fileURLToPath(import.meta.url);
    const dirPath = path.dirname(__filename);
    return path.join(dirPath, "../..");
};
//# sourceMappingURL=dirname.js.map