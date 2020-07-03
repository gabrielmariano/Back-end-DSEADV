import { Router } from 'express';

import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middleware/auth';
import authAdmin from './app/middleware/authAdmin';

import multerConfig from '../src/config/multer';
const upload = multer(multerConfig);

const routes = new Router();

routes.post('/usuario', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/usuario/:id', UserController.index);
routes.get('/usuario', UserController.list);
routes.put('/usuario/:id', UserController.update);
routes.delete('/usuario/:id', UserController.delete);

routes.post('/uploads/', upload.single('file'), FileController.store);

routes.delete('/usuario/:id', authAdmin, UserController.delete);

export default routes;
