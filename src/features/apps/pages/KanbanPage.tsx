import React from 'react'
import { KanbanBoard } from '../components/KanbanBoard'
import './styles/KanbanPage.css'

export const KanbanPage = () => {
  return (
    <div>
        <h2 className='kanban__title'>
            Kanban board
        </h2>
        <KanbanBoard/>
    </div>
  )
}
