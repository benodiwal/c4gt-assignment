import AbstractController from "controllers";
import { Request, Response } from "express";

export default class QueryController extends AbstractController {
    getQuery() {
        return async (req: Request, res: Response) => {
            console.log(req.params);
            return res.sendStatus(200);
        }
    }
}
