import { IUser } from "./IUser";

export interface ITodo{
    executor: IUser,
    title: string,
    id: string
}