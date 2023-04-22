import { Product } from './../types/productTypes';
import { Schema, Types, model, Model } from "mongoose";


const ProductSchema = new Schema<Product>(
    {
        series: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        amount: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const productModel = model('Products', ProductSchema);

export default productModel;