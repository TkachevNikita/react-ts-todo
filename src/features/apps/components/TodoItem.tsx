import React, { FC } from 'react'
import { ITodo } from '../interfaces/ITodo';
import './styles/TodoItem.css'

interface TodoItemProps {
    item: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({item}) => {
  return (
        <div 
          className="todo"
          onClick={e => {console.log(e.target)}}
        >
          {item.title}
        </div>
  )
}
