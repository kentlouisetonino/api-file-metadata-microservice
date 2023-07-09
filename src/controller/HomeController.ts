import { Request, Response } from 'express';

export async function HomeController(_: Request, res: Response) {
  return res.sendFile('index.html');
}
