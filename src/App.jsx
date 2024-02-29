import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="content">
        <Navigation />
        <div className="mainBody">
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
