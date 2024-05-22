import QueryController from 'controllers/query.controller';
import AbstractRouter from 'routers/index';

export default class QueryRouter extends AbstractRouter {
  registerRoutes(): void {
    const queryController = new QueryController(this.ctx);
    this.registerPOST('/', queryController.postQuery());
  }
}
