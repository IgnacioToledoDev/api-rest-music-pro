import express from 'express';
import dotenv from 'dotenv'
import db from './config/database'

const app = express();

/**modules imports */
import { router } from "./routes/productsRoutes"

/**Globals */
dotenv.config();
const port = process.env.PORT;

/** Database */
db().then(() => console.log('Connexion ready')).catch((err) => console.log(`Oh a ocurrido un error ${err}`));

/** App use */
app.use(router);




app.listen(port, () => console.log(`Server on port ${port}`));