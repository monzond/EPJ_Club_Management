import * as bodyParser from "body-parser";
import express from "express";
import hbs from "express-handlebars";
import * as db from "./config/dbConfig";
import {apiRoutes} from "./routes/apiRoutes";
import {clubRoutes} from "./routes/clubRoutes";


// Controllers
import { createConnection } from "typeorm";
import { clubController } from "./controllers/clubController";

// Create express server
const app = express();

// DB connection
db.client.connect();
createConnection();

// Express configuration
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/views", express.static("views"));
app.use(clubRoutes);
app.use("/api", apiRoutes);




export default app;
