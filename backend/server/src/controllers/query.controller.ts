import AbstractController from 'controllers';
import { Request, Response } from 'express';

export default class QueryController extends AbstractController {
  postQuery() {
    return async (req: Request, res: Response) => {
        const { query } = req.body;
        console.log(query);
        return res.status(200).json({ msg: 'Yeaah!!' });
    };
  }
}
