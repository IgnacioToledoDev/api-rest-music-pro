
import ProductModel from "../models/ProductModel";
import { Product } from "../types/productTypes";

const insertProduct = async (product: Product) => {
    const responseInsert = await ProductModel.create(product);
    return responseInsert;
};


const getAllProducts = async () => {
    const responseGetProducts = await ProductModel.find();
    return responseGetProducts;
};

const getProductByID = async (id: string) => {
    const responseGetProduct = await ProductModel.findOne({ _id: id })
    return responseGetProduct;
};

const getProductByIDAndUpdate = async (id: string, data: Product) => {
    const responseGetProduct = await ProductModel.findByIdAndUpdate(
        { _id: id },
        data,
        {
            new: true
        });
    return responseGetProduct;
};

const getProductByIDAndRemove = async (id: string) => {
    const responseGetProduct = await ProductModel.findByIdAndRemove({ _id: id });
    return responseGetProduct;
};



export { insertProduct, getAllProducts, getProductByID, getProductByIDAndUpdate, getProductByIDAndRemove };