import { StatusCodes } from "http-status-codes";
import customAPIErrors from "../error/customError.js";
export const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (err instanceof customAPIErrors) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: err.message,
    });
};
//# sourceMappingURL=error.handler.js.map