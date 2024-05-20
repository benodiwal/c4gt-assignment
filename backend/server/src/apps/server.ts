import Express, { NextFunction, Request, Response, Express as TExpress } from 'express';
import logger from 'middlewares/logger.middleware';
import Context from 'models/Context';
import { NotFoundError } from 'errors/not-found-error';
import { errorHandler } from 'middlewares/error.middleware';
import { IDatabase } from 'interfaces';
import getEnvVar from 'env/index';
import QueryRouter from 'routers/query.router';

export default class Server {
  db: IDatabase;
  engine: TExpress;

  constructor(database: IDatabase) {
    this.db = database;
    this.engine = Express();
  }

  #registerHandlers() {
    this.engine.use(logger);
    this.engine.use(Express.json());

    this.engine.get('/health', (_, res) => {
      return res.sendStatus(200);
    });

    this.engine.get('/', (_, res) => {
      return res.sendStatus(200);
    });

    const ctx = new Context(this.db);

    const queryRouter = new QueryRouter(ctx, this.engine, '/query');
    queryRouter.register();

    this.engine.all('*', async (__: Request, _: Response, next: NextFunction) => {
      next(new NotFoundError());
    });

    this.engine.use(errorHandler);
  }

  start() {
    this.#registerHandlers();
    this.engine.listen(parseInt(getEnvVar('PORT')), () => {
      console.log(`Server listening at ${getEnvVar('PORT')}`);
    });
  }
}
