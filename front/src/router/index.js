import Projects from "../pages/Projects";
import Users from "../pages/Users";
import TODOs from "../pages/TODOs";
import ProjectDetail from "../pages/ProjectDetail";


export const publicRoutes = [
    {path: '/projects', component: <Projects/>},
    {path: '/projects/:id', component: <ProjectDetail/>},
    {path: '/users', component: <Users/>},
    {path: '/todos', component: <TODOs/>}
]