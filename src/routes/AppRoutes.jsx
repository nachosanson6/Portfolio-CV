import { Routes, Route } from 'react-router-dom';
import ProjectsPage from './../pages/ProjectsPage/ProjectsPage'
import AboutPage from '../pages/AboutPage/AboutPage';
import HomePage from '../pages/HomePage/HomePage';
import FormationPage from '../pages/FormationPage/FormationPage';
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage';


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/projects'} element={<ProjectsPage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/formation'} element={<FormationPage />} />
            <Route path={'/experience'} element={<ExperiencePage />} />
        </Routes>
    )
}
export default AppRoutes