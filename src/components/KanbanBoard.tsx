import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import '../styles/TodoBoard.css'
import { mockData } from '../mocks/mocks'
import { TodoItem } from './TodoItem'

export const KanbanBoard = () => {

    const [data, setData] = useState(mockData);

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId);

            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];

            const sourceTask = [...sourceCol.items]
            const destinationTask = [...destinationCol.items]

            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);

            data[sourceColIndex].items = sourceTask;
            data[destinationColIndex].items = destinationTask;

            setData(data);
        } else {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
            const temp = data[sourceColIndex].items[source.index];
            data[sourceColIndex].items[source.index] = data[sourceColIndex].items[destination.index];
            data[sourceColIndex].items[destination.index] = temp;
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="boards">
                {data.map(section =>
                    <Droppable
                        key={section.id}
                        droppableId={section.id}
                    >
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef} 
                                className="kanban__section"
                            >
                                <div className="board__title" style={{backgroundColor: section.color}}>
                                    {section.title}
                                </div>
                                <div className="board__items">
                                    {
                                        section.items.map((item, index) =>
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) =>
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            opacity: snapshot.isDragging ? '0.5' : '1'
                                                        }}
                                                        className="todo__container"
                                                    >
                                                        <TodoItem item={item}/>
                                                    </div>
                                                }
                                            </Draggable>
                                        )
                                    }
                                    {provided.placeholder}
                                </div>
                            </div>
                            
                        )}
                    </Droppable>    
                )}
            </div>
        </DragDropContext>
    )
}
