import express from "express";
import cors from "cors";
import router from "./DatasManager/TodoRouter.js";

const App = express();
App.use(express.json());
App.use(cors());
App.use("/", router);

App.listen(5000, () => console.log("App is listening on port 5000"));
 