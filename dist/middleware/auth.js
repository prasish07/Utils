import jwt from "jsonwebtoken";
import customAPIErrors from "../error/customError.js";
const authorizationMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        throw new customAPIErrors(401, "Unauthorized");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const { userId, name, role } = decoded;
        req.user = decoded;
        next();
    }
    catch (error) {
        throw new customAPIErrors(401, "Unauthorized");
    }
};
//# sourceMappingURL=auth.js.map