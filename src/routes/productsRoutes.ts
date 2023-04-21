import { Request, Response, Router } from "express";

/**Controllers imports */
import {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController";

const router = Router();

router.get('/api/products', getProducts)

router.get('/api/product/:id', getProduct);

router.post('/api/products', addProduct);

router.put('/api/update-product/:id', updateProduct);

router.delete('/api/delete-product/:id', deleteProduct);



export { router };