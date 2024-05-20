import AbstractController from 'controllers';
import { Request, Response } from 'express';
import nplService from 'libs/nlp.lib';

export default class QueryController extends AbstractController {
  postQuery() {
    return async (req: Request, res: Response) => {
        const { query } = req.body;
        const response = await nplService.getSQLQuery(query);
        return res.status(200).json(response);
    };
  }
}
