import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import eventController from "./controllers/eventController.js";

const routes = Router();

routes.use(homeController);
routes.use('/auth', authController);
routes.use('/events', eventController);


routes.all('*', (req, res) => {
    res.render('404');
});

export default routes;