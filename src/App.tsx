import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AppLayout } from "./features/layouts/AppLayout";
import { KanbanPage } from "./features/apps/pages/KanbanPage";
import { LoginInput } from './features/apps/components/UI/LoginInput';
import { LoginLayout } from './features/layouts/LoginLayout';
import { RegisterForm } from './features/apps/components/RegisterForm';


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AppLayout/>}>
          <Route path="/kanban" element={<KanbanPage/>}/>
          <Route path="/calendar" element={<LoginInput placeholder='Zdarova'/>}/>
        </Route>
        <Route element={<LoginLayout/>}>
          <Route path="/login" element={<RegisterForm/>}/>
          <Route path="/register" element={<LoginInput placeholder='rEGISTER'/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  );
}
