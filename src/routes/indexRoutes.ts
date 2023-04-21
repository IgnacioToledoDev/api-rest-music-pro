import { Request, Response, Router } from "express";

/**Controllers imports */
import {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController";
import { loginCtrl, registerCtrl, getAllUsers } from "../controllers/authController";

const router = Router();

//PRODUCTS
router.get('/api/products', getProducts)

router.get('/api/product/:id', getProduct);

router.post('/api/products', addProduct);

router.put('/api/update-product/:id', updateProduct);

router.delete('/api/delete-product/:id', deleteProduct);

//AUTH
router.post('/auth/register', registerCtrl);

router.post('/auth/login', loginCtrl);

router.get('/auth/users', getAllUsers);

export { router };