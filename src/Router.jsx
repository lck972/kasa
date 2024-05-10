import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/Error/NotFound'
import FicheLogement from './pages/FicheLogement'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/logement',
    element: <FicheLogement />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default routes