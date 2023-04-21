import { Request, Response } from "express";
import { registerNewUser, loginUser, getUsers } from "../services/authService";
import { handleHttp } from "../utils/error.handle";


const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const user = await registerNewUser(body);
        res.send(user);
    } catch (e) {
        handleHttp(res, `Oh a ocurrido un error ${e},`);
    }
};

const loginCtrl = async (req: Request, res: Response) => { };

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.send(users);
    }
    catch (e) {
        handleHttp(res, `Oh a ocurrido un error ${e},`);
    };
}


export { registerCtrl, loginCtrl, getAllUsers };