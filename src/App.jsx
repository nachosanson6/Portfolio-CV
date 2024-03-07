import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react"

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
      <Analytics />
    </>
  )
}

export default App
