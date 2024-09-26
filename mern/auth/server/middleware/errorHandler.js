import { z } from "zod";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http.js";
import AppError from "../utils/AppError.js";

const handleZodError = (res, error) => {
  const errorMessages = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));

  return res.status(BAD_REQUEST).json({
    success: false,
    errors: errorMessages,
  });
};

const handleAppError = (res, error) => {
  return res.status(error.statusCode).json({
    message: error.message,
  });
};

export const errorHandler = (error, req, res, next) => {
  // Log the error path and error object
  console.log(`Path ${req.path}`, error);

  if (error instanceof z.ZodError) {
    return handleZodError(res, error);
  }

  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  // Handle other types of errors
  return res.status(INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal server error",
  });
};
