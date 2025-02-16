import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import disasterController from "./controllers/disasterController.js";

const routes = Router();

routes.use(homeController);
routes.use('/auth', authController);
routes.use('/events', disasterController);


routes.all('*', (req, res) => {
    res.render('404');
});

export default routes;