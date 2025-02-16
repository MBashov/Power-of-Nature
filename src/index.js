import express from "express";
import handlebars from 'express-handlebars';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

import routes from "./routes.js";
import { auth } from './middlewares/authMiddleware.js';
import { tempData } from "./middlewares/tempDataMiddleware.js";

const app = express();

try {
    await mongoose.connect('mongodb://localhost:27017/Power-of-Nature');
    console.log('DB conected succesfully!');
} catch (err) {
    console.log('Cannot conect to DB!');
    console.error(err.message);
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        setTitle(title) {
            this.pageTitle = title;
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(expressSession({
    secret: '$2b$10$KeohpPQ4M6i23G/d4I768uplZM2/8sdRC5/gYaBDLddkd.Aizd/ssd',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true }
}));
app.use(auth);
app.use(tempData);
app.use(routes);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));