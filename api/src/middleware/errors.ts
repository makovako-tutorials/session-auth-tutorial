import { RequestHandler, Request, Response, NextFunction } from "express";

// returning new handler with catch, if error it is send to next function
export const catchAsync = (handler: RequestHandler) => (
  ...args: [Request, Response, NextFunction]
) => handler(...args).catch(args[2]);

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({message: "Not found"})
}

export const internalServerError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err.status) {
    console.error(err.stack);
    
  }
  // console.log(err.stack);
  res.status(err.status || 500).json({message: err.message || "Internal server error"})
  
}