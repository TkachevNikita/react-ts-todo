import { KanbanBoard } from "./components/KanbanBoard";
import './App.css'
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout/>}>
        <Route path="/kanban" element={<KanbanBoard/>}/>
        <Route path="/calendar" element={<div>Calendar</div>}/>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  );
}
