import { IBoard } from "../interfaces/IBoard";
import { v4 as uuidv4 } from 'uuid';

export const mockData: IBoard[] = [
    {
        title: 'В работе',
        id: uuidv4(),
        color: '#E1E4E8',
        items: [
            { executor: {name: 'Victor'}, id: uuidv4(), title: 'React' },
            { executor: {name: 'Dima'}, id: uuidv4(), title: 'Angular' },
            { executor: {name: 'Radmir'}, id: uuidv4(), title: 'Vue' }
        ]
    },
    {
        title: 'Выполнены',
        id: uuidv4(),
        color: '#CBDFD8',
        items: [
            { executor: {name: 'Misha'}, id: uuidv4(), title: 'spring' },
            { executor: {name: 'Nikita'}, id: uuidv4(), title: 'fastapi' },
            { executor: {name: 'Aidimir'}, id: uuidv4(), title: 'asp.net' }
        ]
    },
    {
        title: 'На оценке',
        id: uuidv4(),
        color: '#F0E7F6',
        items: [
            { executor: {name: 'Olya'}, id: uuidv4(), title: 'spring' },
            { executor: {name: 'Ekaterina'}, id: uuidv4(), title: 'asp.net' }
        ]
    },
    {
        title: 'Просрочены',
        id: uuidv4(),
        color: '#FFDCE0',
        items: [
            { executor: {name: 'Timofey'}, id: uuidv4(), title: 'spring' },
            { executor: {name: 'Ruslan'}, id: uuidv4(), title: 'asp.net' }
        ]
    },

]