import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import customAPIErrors from "../error/customError.js";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err instanceof customAPIErrors) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: err.message,
  });
};
