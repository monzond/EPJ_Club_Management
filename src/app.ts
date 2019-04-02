import * as bodyParser from "body-parser";
import express from "express";
import hbs from "express-handlebars";

// Controllers
import * as demoController from "./controllers/demoController";

// Create express server
const app = express();

// DB connection

// Express configuration
app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use("/public", express.static("public"));

// Primary routes
app.get("/", demoController.index);
app.get("/forgot-password", demoController.forgotPassword);
app.get("/members", demoController.membersView);
app.get("/teams", demoController.teamsView);
app.get("/events", demoController.eventsView);
app.get("/dashboard", demoController.dashboard);
app.get("/profile", demoController.profile);

export default app;
