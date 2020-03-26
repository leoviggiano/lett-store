import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/register', ProductController.store);
routes.post('/show', ProductController.show);

export default routes;
