import { Request } from "express"

export interface UserInterface extends Request{
    body:{
        ID: number
        EMAIL: string
        FIRSTNAME: string
        LASTNAME: string
        PASSWORD: string
        CONFIRM_PWD: string
        ROLE: string
    }
}
