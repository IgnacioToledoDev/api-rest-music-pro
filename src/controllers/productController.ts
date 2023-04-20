import { Request, Response } from "express";


const getProducts = (req: Request, res: Response) => {
    try {
        const message = 'Aqui_iran_los_productos';
        res.status(200);
        res.send(message);
    }
    catch (e) {
        res.send(`Oh a ocurrido un error ${e}`);
    };
};

const getProduct = (req: Request, res: Response) => {
    try {
        res.status(200);
        res.send('Aqui_ira_el_producto_por_ID');
    }
    catch (e) {
        res.send(`Oh a ocurrido un error ${e}`);
    };
};

const addProduct = (req: Request, res: Response) => {
    try {
        //TODO
    } catch (e) {
        //TODO
    };
};

const updateProduct = (req: Request, res: Response) => {
    try {
        //TODO
    }
    catch (e) {
        //TODO
    };
};

const deleteProduct = (req: Request, res: Response) => {
    try {
        //TODO
    }
    catch (e) {
        //TODO
    };
};




export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }