import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

/**modules imports */
import { router } from "./routes/indexRoutes";
import db from './config/database';

const app = express();

/**Globals */
dotenv.config();
const port = process.env.PORT;

/** Database */
db().then(() => console.log('Connexion ready')).catch((err) => console.log(`Oh a ocurrido un error ${err}`));

/**OTHERS */

/** App use */
app.use(bodyParser.json());
app.use(router);
app.use(cors());

//Init server
app.listen(port, () => console.log(`Server on port ${port}`));