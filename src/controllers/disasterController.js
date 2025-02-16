import { Router } from "express";

const disasterController = Router();

disasterController.get('/create', (req, res) => {
    res.render('disaster/create');
});

export default disasterController;