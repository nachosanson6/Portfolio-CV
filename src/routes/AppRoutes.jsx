import { Routes, Route } from 'react-router-dom';
import ProjectsPage from './../pages/ProjectsPage/ProjectsPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/projects'} element={<ProjectsPage />} />

            {/* <Route path={'/picturesGallery'} element={<PicturesGalleryPage />} />
            <Route path={'/sculpturesGallery'} element={<SculpturesGalleryPage />} />
            <Route path={'/jewelryGallery'} element={<JewelryGalleryPage />} />
            <Route path={'/productDetails/:product_id'} element={<ProductDetailsPage />} />
            <Route path={'/productsGallery'} element={<ProductsGalleryPage />} /> */}

        </Routes>
    )
}
export default AppRoutes