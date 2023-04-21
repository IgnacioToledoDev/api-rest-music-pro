/**To handler all error on controllers.ts */
import { Response } from "express"

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(404);
    res.send(error);
};


export { handleHttp };