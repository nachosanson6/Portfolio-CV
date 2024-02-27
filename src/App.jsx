import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <div className="content">
        <Navigation />
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
