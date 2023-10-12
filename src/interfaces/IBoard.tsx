import { ITodo } from "./ITodo";

export interface IBoard {
    id: string,
    title: string,
    color: string,
    items: ITodo[]
}