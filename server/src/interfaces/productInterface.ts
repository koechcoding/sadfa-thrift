import { Request } from "express";

export interface ProductInterface extends Request{
    body: {
        ID: number
        TITLE:string
        PRICE: number
        DESCRIPTION :string
        CATEGORY :string
        IMAGE:string
        QUANTITY: number
        RATING:number
    }
}