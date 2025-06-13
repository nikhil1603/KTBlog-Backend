import { Request, Response, NextFunction, RequestHandler } from "express";

export const TryCatch = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
): RequestHandler => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); // ✅ enforce void-returning function
    } catch (error) {
      console.error("🔥 Caught error:", error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };
};


export default TryCatch;