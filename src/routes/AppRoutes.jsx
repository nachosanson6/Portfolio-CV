import { Routes, Route } from 'react-router-dom';
import ProjectsPage from './../pages/ProjectsPage/ProjectsPage'
import AboutPage from '../pages/AboutPage/AboutPage';


const AppRoutes = () => {

    return (
        <Routes>
            {/* <Route path={'/'} element={<HomePage />} /> */}
            <Route path={'/projects'} element={<ProjectsPage />} />
            <Route path={'/about'} element={<AboutPage />} />
        </Routes>
    )
}
export default AppRoutes