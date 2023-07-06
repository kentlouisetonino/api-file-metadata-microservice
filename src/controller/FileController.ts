import { Request, Response } from 'express';

interface MulterRequest extends Request {
  file: any;
}

export function GetFileData(req: Request, res: Response) {
  const file = (req as MulterRequest).file;

  return res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size,
  });
}
