import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertProduct, getAllProducts, getProductByID, getProductByIDAndUpdate, getProductByIDAndRemove } from "../productService";


const getProducts = async (req: Request, res: Response) => {
    try {
        const product = await getAllProducts();
        res.send(product);
    }
    catch (e) {
        handleHttp(res, `Oh a ocurrido un error ${e},`);
    };
};

const getProduct = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const product = await getProductByID(id);
        return res.send(product);
    }
    catch (e) {
        handleHttp(res, `Oh a ocurrido un error ${e} en getProduct`);
    };
};

const addProduct = async ({ body }: Request, res: Response) => {
    try {
        const product = insertProduct(body);
        res.send(product);
    } catch (e) {
        handleHttp(res, `Oh a ocurrido un error ${e} en addProduct`, e);
    };
};

const updateProduct = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const product = await getProductByIDAndUpdate(id, body)
        res.send(product);
    }
    catch (e) {
        handleHttp(res, `Oh a ocurrido un error ${e} en uptadeProduct`);
    };
};

const deleteProduct = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const product = await getProductByIDAndRemove(id);
        res.send(product);
    }
    catch (e) {
        handleHttp(res, `Oh a ocurrido un error en ${e} en deleteProduct`);
    };
};




export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }